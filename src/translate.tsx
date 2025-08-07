import React from "react";
import markdownit from 'markdown-it';

const md = markdownit();

export type Translation = {
    ga: Multipliable<string>;
    en: Nullable<Multipliable<string>>;
};

export type LanguageSelection = 'ga' | 'en';

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
        return text.map(line => handleMarkdown(line)).join("<br />");
    } else {
        // Treat ` as _ characters
        return md.render(text.replaceAll("`", "_"));
    }
}

export function translateIfAvailable(line: string | Translation, tableLanguage: LanguageSelection) {
    return typeof line === 'string'
        ? line
        : <><span>&nbsp;&nbsp;</span>{translateTextMarkup(line, tableLanguage)}</>;
}
