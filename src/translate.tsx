import React from "react";

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
        title={englishMissing ? "Translation not found." : undefined}>{
            applyBasicMarkup(translateText(translation, selection), "tx-")
        }</span>;
}

/** Applies the following to the text:
 * `text` -> italic text
 * ``text`` -> bold text
 * Backtick was chosen because a) this is not a coding manual, b) it works better with text editors that auto-quote selection.
  */
export function applyBasicMarkup<T extends Multipliable<string>>(text: T, keyPrefix = ""): React.ReactNode {
    if (Array.isArray(text)) {
        return text.map((line, i) => <React.Fragment key={`frg-${i}`}>
            {applyBasicMarkup(line, `m${i}`)}
            {i < text.length - 1 && <br key={`br-${i}`} />}
        </React.Fragment>);
    } else {
        let counter = 0;
        const outputBuffer = new Array<React.ReactElement>;
        while (counter < text.length) {
            const currentText = text.slice(counter);
            const entryTickIdx = currentText.indexOf("`");
            if (entryTickIdx === -1) {
                outputBuffer.push(<span key={`${keyPrefix}t-${counter}`}>{currentText}</span>);
                break;
            } else {
                outputBuffer.push(<span key={`${keyPrefix}s-${counter}`}>{currentText.slice(0, entryTickIdx)}</span>);
                counter += entryTickIdx;
                // Starts with 1 or 2 `s
                const remainingText = currentText.slice(entryTickIdx);
                const boldTextMatches = remainingText.match(/``([^`]*?)``/);
                if (boldTextMatches != null) {
                    outputBuffer.push(<b key={`${keyPrefix}b-${counter}`}>{applyBasicMarkup(boldTextMatches[1], keyPrefix + "_")}</b>);
                    counter += boldTextMatches[0].length;
                }
                else {
                    const italicTextMatches = remainingText.match(/`([^`]*?)`/);
                    if (italicTextMatches != null) {
                        outputBuffer.push(<i key={`${keyPrefix}i-${counter}`}>{applyBasicMarkup(italicTextMatches[1], keyPrefix + "_")}</i>);
                        counter += italicTextMatches[0].length;
                    } else {
                        throw new Error(`Unexpected error encountered in position ${counter} in ${text}`);
                    }
                }
            }
        }
        return <>{outputBuffer}</>;
    }
}