import { Chapter, ChapterSection, Paragraph, Subsection } from "../BodyMatter";
import chapter1Text from "../../../translation/Chapter1.json";
import SampleBox from "../SampleBox";

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
                    </Subsection>,
                    <Subsection key="1.1.3" heading="1.1.3">
                        <Paragraph content={chapter1Text["1.1.3"]} />
                    </Subsection>,
                    <Subsection key="1.1.4" heading="1.1.4">
                        <Paragraph content={chapter1Text["1.1.4"]} />
                    </Subsection>,
                    <Subsection key="1.1.5" heading="1.1.5">
                        <Paragraph content={chapter1Text["1.1.5"]} />
                        <ol className="list-[lower-alpha] list-inside p-2">
                            <li>
                                <Paragraph content={chapter1Text["1.1.5.a"]}></Paragraph>
                                <SampleBox samples={([1, 2, 3, 4] as const).map(x => chapter1Text[`1.1.5.a.sample.${x}`])} />
                            </li>
                        </ol>
                    </Subsection>,
                ]} />
        ]} />;
}