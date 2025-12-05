import Asciidoctor from "asciidoctor";
import React from "react";
import { processAdocFileContents, tableScan } from "../utility";

const asciidoctor = Asciidoctor();

interface ChapterProps {
  number: number;
  language?: "en" | "ga";
  onContentReady(): void;
}

export function Chapter({ number, language = "en", onContentReady }: ChapterProps) {
  const [chapterAdoc, setChapterAdoc] = React.useState<string>("");

  React.useEffect(() => {
    async function loadChapter() {
      const [chapterAdocModule, chapterAttributesModule, commonAttributesModule] =
        await Promise.all([
          import(`../../translation/Chapter${number}/Chapter${number}.adoc?raw`),
          import(`../../translation/Chapter${number}/attributes.adoc?raw`),
          import(`../../translation/CommonAttributes.adoc?raw`),
        ]);

      const rawChapterAdoc = chapterAdocModule.default;
      const rawChapterAttributes = chapterAttributesModule.default;
      const rawCommonAttributes = commonAttributesModule.default;

      const processedChapterAttrs = processAdocFileContents(rawChapterAttributes, language);
      const processedCommonAttrs = processAdocFileContents(rawCommonAttributes, language);

      const combined = [
        processedCommonAttrs, processedChapterAttrs, rawChapterAdoc,
      ].join("\n");

      const renderedContents = asciidoctor.convert(combined, {
        attributes: {
          rootRef: import.meta.env.DEV ? "public/" : ""
        }
      }) as string;
      setChapterAdoc(renderedContents);
    }

    loadChapter();
  }, [number, language]);

  React.useLayoutEffect(() => {
    if (chapterAdoc !== "") {
      onContentReady();
    }
  }, [chapterAdoc, onContentReady]);

  const processedAdoc = tableScan(chapterAdoc);

  return (
    <div dangerouslySetInnerHTML={{ __html: processedAdoc }} />
  );
}
