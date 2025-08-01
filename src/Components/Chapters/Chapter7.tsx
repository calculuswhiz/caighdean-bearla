import { Chapter, ChapterSection, ListItem, Paragraph, Subsection } from "../BodyMatter";
import chapter7Text from "../../../translation/Chapter7.json";
import SampleBox from "../SampleBox";

function Section1() {
    return <ChapterSection
        sectionId="7.1"
        title={chapter7Text["7.1"]}>
        <Paragraph content={chapter7Text["7.1.p1"]} />
        <Paragraph content={chapter7Text["7.1.p2"]} />
        <Subsection heading={"7.1.1"}>
            <Paragraph content={chapter7Text["7.1.1.p1"]} />
            <Paragraph content={chapter7Text["7.1.1.p2"]} />
            <ol className="list-[lower-alpha] list-inside pl-2">
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.a"]} />
                    <SampleBox samples={([1, 2, 3, 4] as const).map(x => chapter7Text[`7.1.1.a.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.b"]} />
                    <SampleBox samples={([1, 2] as const).map(x => chapter7Text[`7.1.1.b.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.c"]} />
                    <SampleBox samples={([1, 2, 3, 4] as const).map(x => chapter7Text[`7.1.1.c.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.d"]} />
                    <SampleBox samples={([1, 2, 3, 4, 5, 6] as const).map(x => chapter7Text[`7.1.1.d.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.e"]} />
                    <SampleBox samples={([1, 2] as const).map(x => chapter7Text[`7.1.1.e.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.f"]} />
                    <SampleBox samples={([1, 2, 3, 4, 5] as const).map(x => chapter7Text[`7.1.1.f.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.g"]} />
                    <SampleBox samples={([1, 2, 3, 4, 5] as const).map(x => chapter7Text[`7.1.1.g.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.h"]} />
                    <SampleBox samples={([1, 2, 3, 4, 5, 6, 7, 8] as const).map(x => chapter7Text[`7.1.1.h.sample${x}`])} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.i"]} />
                    <SampleBox samples={([1, 2, 3, 4, 5] as const).map(x => chapter7Text[`7.1.1.i.sample${x}`])} />
                </ListItem>
            </ol>
        </Subsection>
    </ChapterSection>;
}

export default function Chapter7() {
    return <Chapter
        number={7}
        title={chapter7Text["Chapter7Title"]}
        sections={[
            <Section1 />
        ]}
    />;
}