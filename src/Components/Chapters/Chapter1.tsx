import Asciidoctor from "asciidoctor";
import chapterAdoc from '../../../translation/Chapter1/Chapter1.adoc?raw';
import rawChapterAttributes from '../../../translation/Chapter1/attributes.adoc?raw';
import rawCommonAttributes from '../../../translation/CommonAttributes.adoc?raw';
import { processAdocFileContents, tableScan } from "../../utility";
import React from "react";

const asciidoctor = Asciidoctor();

export function Chapter1() {
    const languageSelection = 'en';
    
    const [chapterAttributes, commonAttributes] = [rawChapterAttributes, rawCommonAttributes]
        .map(x => processAdocFileContents(x, languageSelection));
    const toConvert = [
        // Common should come first so we can share it with other attribute imports
        commonAttributes, chapterAttributes, chapterAdoc
    ].join('\n');
    const resultHtml = asciidoctor.convert(toConvert) as string;

    React.useEffect(() => {
        tableScan();
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: resultHtml }}>
    </div>;
}