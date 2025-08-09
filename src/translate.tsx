import React from "react";
import markdownit from 'markdown-it';

const md = markdownit();

/** Represents an Irish-English equivalent grouping. An array in either is reducible to 
 * a single string joined by "<br />" due to markdown rendering.
 */
export type Translation<T extends Multipliable<string> = Multipliable<string>> = {
    ga: T;
    en: Nullable<T>;
};

export type LanguageSelection = 'ga' | 'en';

function reduceTranslation(translation: Translation): Translation<string> {
    return {
        ga: Array.isArray(translation.ga) ? translation.ga.join("<br />") : translation.ga,
        en: Array.isArray(translation.en) ? translation.en.join("<br />") : translation.en,
    };
}

export function joinTranslations(joiner: string, ...translations: Translation[]): Translation<string> {
    const merge = reduceTranslation({
        ga: translations[0].ga,
        en: translations[0].en,
    });

    for (const translation of translations.slice(1)) {
        const reduction = reduceTranslation(translation);
        merge.ga += joiner + reduction.ga;
        merge.en += joiner + reduction.en;
    }

    return merge;
}

/** Basic handling of text */
export function translateText(translation: Translation, selection: LanguageSelection) {
    return selection === 'en'
        ? translation.en ?? translation.ga
        : translation.ga;
}

/** Basic handling of text */
export function translateTextMarkup(
    translation: Translation,
    selection: LanguageSelection
): React.ReactElement {
    const englishMissing = selection === "en" && translation.en == null;
    return <span
        className={englishMissing ? "text-red-900" : ""}
        title={englishMissing ? "Translation not found." : undefined}
        dangerouslySetInnerHTML={{ __html: handleMarkdown(translateText(translation, selection)) }}></span>;
}

function handleMarkdown(text: Multipliable<string>): string {
    if (Array.isArray(text)) {
        return text.map(line => handleMarkdown(line)).join("<br>");
    } else {
        // Treat ` as _ characters
        return md.renderInline(text.replaceAll("`", "_"));
    }
}

export function translateIfAvailable(line: string | Translation, tableLanguage: LanguageSelection) {
    return typeof line === 'string'
        ? line
        : <><span>&nbsp;&nbsp;</span>{translateTextMarkup(line, tableLanguage)}</>;
}
