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
                    <SampleBox samples={chapter7Text[`7.1.1.a.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.b"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.b.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.c"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.c.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.d"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.d.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.e"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.e.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.f"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.f.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.g"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.g.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.h"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.h.samples`]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={chapter7Text["7.1.1.i"]} />
                    <SampleBox samples={chapter7Text[`7.1.1.i.samples`]} />
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
            <Section1 key={"c7.1"} />
        ]}
    />;
}