import Asciidoctor from "asciidoctor";
import chapterAdoc from '../../../translation/Chapter2/Chapter2.adoc?raw';
import rawChapterAttributes from '../../../translation/Chapter2/attributes.adoc?raw';
import rawCommonAttributes from '../../../translation/CommonAttributes.adoc?raw';
import { processAdocFileContents } from "../../utility";

const asciidoctor = Asciidoctor();

export function Chapter2() {
    const languageSelection = 'en';
    
    const [chapterAttributes, commonAttributes] = [rawChapterAttributes, rawCommonAttributes]
        .map(x => processAdocFileContents(x, languageSelection));
    const toConvert = [
        // Common should come first so we can share it with other attribute imports
        commonAttributes, chapterAttributes, chapterAdoc
    ].join('\n');
    // console.log(toConvert);
    const resultHtml = asciidoctor.convert(toConvert) as string;

    return <div dangerouslySetInnerHTML={{ __html: resultHtml }}>

    </div>;
}