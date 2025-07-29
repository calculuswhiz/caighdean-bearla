import { Chapter, ChapterSection, ListItem, Paragraph, Subsection } from "../BodyMatter";
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
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.a"]} />
                                <SampleBox samples={([1, 2, 3, 4] as const).map(x => chapter1Text[`1.1.5.a.sample${x}`])} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.b"]} />
                                <SampleBox samples={([1, 2, 3, 4] as const).map(x => chapter1Text[`1.1.5.b.sample${x}`])} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.c"]} />
                                <SampleBox samples={([1, 2, 3, 4, 5, 6] as const).map(x => chapter1Text[`1.1.5.c.sample${x}`])} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.d.p1"]} />
                                <SampleBox samples={([1, 2, 3] as const).map(x => chapter1Text[`1.1.5.d.sample${x}`])} />
                                <Paragraph content={chapter1Text["1.1.5.d.p2"]} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.e.p1"]} />
                                <SampleBox samples={([1, 2, 3] as const).map(x => chapter1Text[`1.1.5.e.sample${x}`])} />
                                <Paragraph content={chapter1Text["1.1.5.e.p2"]} />
                                <Paragraph content={chapter1Text["1.1.5.e.p3"]} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.f.p1"]} />
                                <Paragraph content={chapter1Text["1.1.5.f.p2"]} />
                                <SampleBox samples={([1, 2] as const).map(x => chapter1Text[`1.1.5.f.sample${x}`])} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.g.p1"]} />
                                <Paragraph content={chapter1Text["1.1.5.g.p2"]} />
                                <SampleBox samples={([1, 2, 3, 4, 5] as const).map(x => chapter1Text[`1.1.5.g.sample${x}`])} />
                                <Paragraph content={chapter1Text["1.1.5.g.p3"]} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.h.p1"]} />
                                <ol className="list-[lower-roman] list-inside p-2">
                                    <ListItem>
                                        <Paragraph content={chapter1Text["1.1.5.h.i"]} />
                                    </ListItem>
                                    <ListItem>
                                        <Paragraph content={chapter1Text["1.1.5.h.ii"]} />
                                    </ListItem>
                                    <ListItem>
                                        <Paragraph content={chapter1Text["1.1.5.h.iii"]} />
                                    </ListItem>
                                </ol>
                                <SampleBox samples={([1, 2, 3] as const).map(x => chapter1Text[`1.1.5.h.sample${x}`])} />
                            </ListItem>
                            <ListItem>
                                <Paragraph content={chapter1Text["1.1.5.i.p1"]} />
                                <ol className="list-[upper-alpha] list-inside p2">
                                    <ListItem>
                                        <Paragraph content={chapter1Text["1.1.5.i.A.p1"]} />
                                        <ol className="list-[lower-roman] list-inside p2">
                                            <ListItem>
                                                <Paragraph content={chapter1Text["1.1.5.i.A.i"]} />
                                            </ListItem>
                                            <ListItem>
                                                <Paragraph content={chapter1Text["1.1.5.i.A.ii"]} />
                                            </ListItem>
                                            <ListItem>
                                                <Paragraph content={chapter1Text["1.1.5.i.A.iii"]} />
                                            </ListItem>
                                        </ol>
                                        <Paragraph content={chapter1Text["1.1.5.i.A.p2"]} />
                                        <SampleBox samples={([1, 2] as const).map(x => chapter1Text[`1.1.5.i.A.sample${x}`])} />
                                    </ListItem>
                                    <ListItem>
                                        <Paragraph content={chapter1Text["1.1.5.i.B.p"]} />
                                        <ol className="list-[lower-roman] list-inside p2">
                                            <ListItem>
                                                <Paragraph content={chapter1Text["1.1.5.i.B.i"]} />
                                            </ListItem>
                                            <ListItem>
                                                <Paragraph content={chapter1Text["1.1.5.i.B.ii"]} />
                                            </ListItem>
                                            <ListItem>
                                                <Paragraph content={chapter1Text["1.1.5.i.B.iii"]} />
                                            </ListItem>
                                            <ListItem>
                                                <Paragraph content={chapter1Text["1.1.5.i.B.iv"]} />
                                            </ListItem>
                                        </ol>
                                    </ListItem>
                                    <ListItem>
                                        <Paragraph content={chapter1Text["1.1.5.i.C.p"]} />
                                        <SampleBox samples={([1, 2] as const).map(x => chapter1Text[`1.1.5.i.C.sample${x}`])} />
                                    </ListItem>
                                </ol>
                            </ListItem>
                        </ol>
                    </Subsection>,
                ]} />
        ]} />;
}