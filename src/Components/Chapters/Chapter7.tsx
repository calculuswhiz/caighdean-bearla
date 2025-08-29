import Asciidoctor from "asciidoctor";
import chapterAdoc from '../../../translation/Chapter7/Chapter7.adoc?raw';
import rawChapterAttributes from '../../../translation/Chapter7/attributes.adoc?raw';
import rawCommonAttributes from '../../../translation/CommonAttributes.adoc?raw';
import { processAdocFileContents } from "../../utility";

const asciidoctor = Asciidoctor();

export function Chapter7() {
    const languageSelection = 'en';
    
    const [chapterAttributes, commonAttributes] = [rawChapterAttributes, rawCommonAttributes]
        .map(x => processAdocFileContents(x, languageSelection));
    const toConvert = [
        // Common should come first so we can share it with other attribute imports
        commonAttributes, chapterAttributes, chapterAdoc
    ].join('\n');

    const resultHtml = asciidoctor.convert(toConvert) as string;

    return <div dangerouslySetInnerHTML={{ __html: resultHtml }}>

    </div>;
}