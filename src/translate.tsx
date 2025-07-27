export type Translation = {
    ga: string;
    en: string | null;
};

export type LanguageSelection = 'ga' | 'en';

/** Basic handling of text */
export function translateText(translation: Translation, selection: LanguageSelection) {
    return selection === 'en'
        ? translation.en ?? translation.ga
        : translation.ga;
}

/** Basic handling of text */
export function translateTextMarkup(translation: Translation, selection: LanguageSelection) {
    const englishExists = selection === "en" && translation.en === null;
    return <span 
        className={englishExists ? "text-red-900" : ""} 
        title={englishExists ? "Translation not found." : undefined}>{
        applyBasicMarkup(translateText(translation, selection))
    }</span>;
}

/** Applies the following to the text:
 * `text` -> italic text
 * ``text`` -> bold text
 * Backtick was chosen because a) this is not a coding manual, b) it works better with text editors that auto-quote selection.
  */
export function applyBasicMarkup(text: string) {
    let counter = 0;
    const outputBuffer = new Array<string | React.ReactElement>;
    while (counter < text.length) {
        const currentText = text.slice(counter);
        const entryTickIdx = currentText.indexOf("`");
        if (entryTickIdx === -1) {
            outputBuffer.push(currentText);
            break;
        } else {
            outputBuffer.push(currentText.slice(0, entryTickIdx));
            counter += entryTickIdx;
            // Starts with 1 or 2 `s
            const remainingText = currentText.slice(entryTickIdx);
            const boldTextMatches = remainingText.match(/``([^`]*?)``/);
            if (boldTextMatches != null) {
                outputBuffer.push(<b key={counter}>{applyBasicMarkup(boldTextMatches[1])}</b>);
                counter += boldTextMatches[0].length;
            }
            else {
                const italicTextMatches = remainingText.match(/`([^`]*?)`/);
                if (italicTextMatches != null) {
                    outputBuffer.push(<i key={counter}>{applyBasicMarkup(italicTextMatches[1])}</i>);
                    counter += italicTextMatches[0].length;
                } else {
                    throw new Error(`Unexpected error encountered in position ${counter} in ${text}`);
                }
            }
        }
    }
    return <>{outputBuffer}</>;
}