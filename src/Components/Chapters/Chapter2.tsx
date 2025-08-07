import { Chapter, ChapterSection } from "../BodyMatter";
import chapter2Text from "../../../translation/Chapter2.json";
import commonText from "../../../translation/Common.json";

function Section1() {
    return <ChapterSection sectionId="2.1" title={commonText.General}>
        Under construction.
    </ChapterSection>;
}

export default function Chapter2() {
    return <Chapter
        number={1}
        title={chapter2Text.Title}
        sections={[
            <Section1 key="ch2.1" />
        ]} />;
}