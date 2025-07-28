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
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.a"]} />
                                <SampleBox samples={([1, 2, 3, 4] as const).map(x => chapter1Text[`1.1.5.a.sample.${x}`])} />
                            </li>
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.b"]} />
                                <SampleBox samples={([1, 2, 3, 4] as const).map(x => chapter1Text[`1.1.5.b.sample.${x}`])} />
                            </li>
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.c"]} />
                                <SampleBox samples={([1, 2, 3, 4, 5, 6] as const).map(x => chapter1Text[`1.1.5.c.sample.${x}`])} />
                            </li>
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.d.p.1"]} />
                                <SampleBox samples={([1, 2, 3] as const).map(x => chapter1Text[`1.1.5.d.sample.${x}`])} />
                                <Paragraph content={chapter1Text["1.1.5.d.p.2"]} />
                            </li>
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.e.p.1"]} />
                                <SampleBox samples={([1, 2, 3] as const).map(x => chapter1Text[`1.1.5.e.sample.${x}`])} />
                                <Paragraph content={chapter1Text["1.1.5.e.p.2"]} />
                                <Paragraph content={chapter1Text["1.1.5.e.p3"]} />
                            </li>
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.f.p.1"]} />
                                <Paragraph content={chapter1Text["1.1.5.f.p.2"]} />
                                <SampleBox samples={([1, 2] as const).map(x => chapter1Text[`1.1.5.f.sample.${x}`])} />
                            </li>
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.g.p.1"]} />
                                <Paragraph content={chapter1Text["1.1.5.g.p.2"]} />
                                <SampleBox samples={([1, 2, 3, 4, 5] as const).map(x => chapter1Text[`1.1.5.g.sample.${x}`])} />
                                <Paragraph content={chapter1Text["1.1.5.g.p.3"]} />
                            </li>
                            <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                <Paragraph content={chapter1Text["1.1.5.h.p.1"]} />
                                <ol className="list-[lower-roman] list-inside p-2">
                                    <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                        <Paragraph content={chapter1Text["1.1.5.h.i"]} />
                                    </li>
                                    <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                        <Paragraph content={chapter1Text["1.1.5.h.ii"]} />
                                    </li>
                                    <li className="border-l-3 border-gray-300 pl-2 mb-2">
                                        <Paragraph content={chapter1Text["1.1.5.h.iii"]} />
                                    </li>
                                </ol>
                                <SampleBox samples={([1, 2, 3] as const).map(x => chapter1Text[`1.1.5.h.sample.${x}`])} />
                            </li>
                        </ol>
                    </Subsection>,
                ]} />
        ]} />;
}