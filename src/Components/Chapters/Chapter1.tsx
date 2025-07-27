import { Chapter, ChapterSection, Paragraph, Subsection } from "../BodyMatter";
import chapter1Text from "../../../translation/Chapter1.json";

export default function Chapter1() {
    return <Chapter
        number={1}
        title={chapter1Text.Chapter1Title}
        sections={[
            <ChapterSection
                key="1.1"
                title={chapter1Text["1.1"]}
                sectionId="1.1"
                subsections={[
                    <Subsection key="1.1.1" heading="1.1.1">
                        <Paragraph content={chapter1Text["1.1.1"]} />
                    </Subsection>,
                    <Subsection key="1.1.2" heading="1.1.2">
                        <Paragraph content={chapter1Text["1.1.2"]} />
                    </Subsection>
                ]} />
        ]} />;
}