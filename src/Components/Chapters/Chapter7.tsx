import { Chapter, ChapterSection, ListItem, Paragraph, Subsection } from "../BodyMatter";
import chapter7Text from "../../../translation/Chapter7.json";
import SampleBox from "../SampleBox";

function Section1() {
    const sectionText = chapter7Text["7.1"];
    return <ChapterSection
        sectionId="7.1"
        title={sectionText.title}>
        <Paragraph content={sectionText.p1} />
        <Paragraph content={sectionText.p2} />
        <Subsection heading={"7.1.1"}>
            <Paragraph content={sectionText[".1"].p1} />
            <Paragraph content={sectionText[".1"].p2} />
            <ol className="list-[lower-alpha] list-inside pl-2">
                {
                    (["a", "b", "c", "d", "e", "f", "g", "h", "i"] as const).map(x =>
                        <ListItem key={`li-${x}`}>
                            <Paragraph content={sectionText[".1"][`.${x}`].text} />
                            <SampleBox samples={sectionText[".1"][`.${x}`].samples} />
                        </ListItem>
                    )
                }
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