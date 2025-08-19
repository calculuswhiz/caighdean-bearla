import Asciidoctor from "asciidoctor";
import chapterAdoc from '../../../translation/Chapter1/Chapter1.adoc?raw';
import rawChapterAttributes from '../../../translation/Chapter1/attributes.adoc?raw';
import rawCommonAttributes from '../../../translation/CommonAttributes.adoc?raw';
import type { LanguageSelection } from "../../translate";

const asciidoctor = Asciidoctor();

function processAdocFileContents(contents: string, language: LanguageSelection) {
    return contents.replaceAll(new RegExp(`_${language}:`, 'g'), ':')
        // We want to pass by default as a lot of our text is marked up.
        // However, if we want to evaluate an attribute first, it cannot pass.
        // Allow cancelling by prefixing id with `nopass-`
        .replaceAll(/^:(?!nopass-)(.+?): (.*?)( \+ \\\s+.*$|$)/gm, ":$1: pass:q[$2$3]")
        .replaceAll('nopass-', '');
}

export function Chapter1() {
    const languageSelection = 'en';
    
    const [chapterAttributes, commonAttributes] = [rawChapterAttributes, rawCommonAttributes]
        .map(x => processAdocFileContents(x, languageSelection));
    const toConvert = [
        // Common should come first
        commonAttributes, chapterAttributes, chapterAdoc
    ].join('\n');

    // console.log(chapterAttributes);

    const resultHtml = asciidoctor.convert(toConvert) as string;

    return <div dangerouslySetInnerHTML={{ __html: resultHtml }}>

    </div>;
}