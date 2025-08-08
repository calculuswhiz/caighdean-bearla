import { Chapter, ChapterSection, LanguageSelector, ListItem, Paragraph, Subsection } from "../BodyMatter";
import chapter2Text from "../../../translation/Chapter2.json";
import commonText from "../../../translation/Common.json";
import { Caption } from "../TableHelpers";
import { joinIfPossible } from "../../utility";
import { joinTranslations, translateText, translateTextMarkup, type LanguageSelection, type Translation } from "../../translate";
import React from "react";

const declensionTranslations =
    [
        ...[
            commonText.Numbering.first,
            commonText.Numbering.second,
            commonText.Numbering.third,
            commonText.Numbering.fourth,
            commonText.Numbering.fifth
        ].map(x => joinTranslations(" ", { ga: "An", en: "The" }, x, commonText.Declension)),
        chapter2Text.Table2A.Irregular
    ];

function Table2A() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    const tableData = [
        [["cás", "cáis", "cásanna", "cásanna"],
        ["ceol", "ceoil", "ceolta", "ceolta"]],
        [["foirm", "foirme", "foirmeacha", "foirmeacha"],
        ["sliabh", "sléibhe", "sléibhte", "sléibhte"]],
        [["feirmeoir", "feirmeora", "feirmeoirí", "feirmeoirí"],
        ["foráil", "forála", "forálacha", "forálacha"]],
        [["amhránaí", "amhránaí", "amhránaithe", "amhránaithe"],
        ["gloine", "gloine", "gloiní", "gloiní"]],
        [["deartháir", "dearthár", "deartháireacha", "deartháireacha"],
        ["lasair", "lasrach", "lasracha", "lasracha"]],
        [["leaba", "leapa", "leapacha", "leapacha"],
        ["teach", "tí", "tithe", "tithe"]]
    ];

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <table className="p-2 w-[100%] text-center">
            <Caption
                id={joinIfPossible(`${translateText(commonText.Table, langSelect)} 2A`)}
                content={translateTextMarkup(chapter2Text.Table2A.Title, langSelect)}
            />
            <thead>
                <tr>
                    <th className="bg-orange-500 text-white font-bold p-2 border-2 border-white uppercase" rowSpan={2}>
                        {translateTextMarkup(chapter2Text.Table2A.CornerHeading, langSelect)}
                    </th>
                    <th className="bg-orange-500 text-white font-bold p-2 border-2 border-white uppercase" colSpan={2}>
                        {translateTextMarkup(commonText.Singular, langSelect)}
                    </th>
                    <th className="bg-orange-500 text-white font-bold p-2 border-2 border-white uppercase" colSpan={2}>
                        {translateTextMarkup(commonText.Plural, langSelect)}
                    </th>
                </tr>
                <tr>
                    <th className="bg-gray-700 text-white font-bold p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Nominative, langSelect)}
                    </th>
                    <th className="bg-gray-700 text-white font-bold p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Genitive, langSelect)}
                    </th>
                    <th className="bg-gray-700 text-white font-bold p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Nominative, langSelect)}
                    </th>
                    <th className="bg-gray-700 text-white font-bold p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Genitive, langSelect)}
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(([eg1, eg2], rowBigI) =>
                    <React.Fragment key={rowBigI}>
                        <tr>
                            <th rowSpan={2} className="p-2 border-2 border-white bg-gray-300">
                                {translateTextMarkup(declensionTranslations[rowBigI], langSelect)}
                            </th>
                            {
                                eg1.map((ent, i) => <td key={i} className="p-2 border-2 border-white bg-gray-200">
                                    {ent}
                                </td>)
                            }
                        </tr>
                        <tr>
                            {eg2.map((ent, i) => <td key={i} className="p-2 border-2 border-white bg-gray-200">
                                {ent}
                            </td>)}
                        </tr>
                    </React.Fragment>)}
            </tbody>
        </table>
    </div>;
}

function DeclensionTable(props: {
    title: Translation,
    caption: {
        id: string;
        content: Translation
    },
    data: string[][]
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <table className="text-center">
            <Caption
                id={joinIfPossible(translateText(commonText.Table, langSelect) + " " + props.caption.id)}
                content={translateTextMarkup(props.caption.content, langSelect)} />
            <thead>
                <tr>
                    <th colSpan={3} className="bg-orange-500 text-white capitalize p-2 border-2 border-white">
                        {translateTextMarkup(props.title, langSelect)}
                    </th>
                </tr>
                <tr>
                    <th className="bg-orange-500 text-white capitalize p-2 border-2 border-white"></th>
                    <th className="bg-gray-700 text-white capitalize p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Nominative, langSelect)}
                    </th>
                    <th className="bg-gray-700 text-white capitalize p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Genitive, langSelect)}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="bg-orange-500 text-white capitalize p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Singular, langSelect)}
                    </th>
                    <td className="bg-gray-300 p-2 border-2 border-white">{props.data[0][0]}</td>
                    <td className="bg-gray-200 p-2 border-2 border-white">{props.data[0][1]}</td>
                </tr>
                <tr>
                    <th className="bg-orange-500 text-white capitalize p-2 border-2 border-white">
                        {translateTextMarkup(commonText.Singular, langSelect)}
                    </th>
                    <td className="bg-gray-200 p-2 border-2 border-white">{props.data[1][0]}</td>
                    <td className="bg-gray-300 p-2 border-2 border-white">{props.data[1][1]}</td>
                </tr>
            </tbody>
        </table>
    </div>;
}

function Table2B() {
    return <DeclensionTable
        title={declensionTranslations[0]}
        caption={{ id: "2B", content: chapter2Text.Table2B.title }}
        data={[
            ["fear", "fir"],
            ["fir", "fear"],
        ]} />;
}

function Table2C() {
    return <DeclensionTable
        title={declensionTranslations[1]}
        caption={{ id: "2C", content: chapter2Text.Table2C.title }}
        data={[
            ["fuinneog", "fuinneoige"],
            ["fuinneoga", "fuinneog"],
        ]}
    />;
}

function Section1() {
    const sectionObject = chapter2Text["2.1"];
    return <ChapterSection sectionId="2.1" title={commonText.General}>
        <Subsection heading="2.1.1" title={sectionObject[".1"].title}>
            <Paragraph content={sectionObject[".1"].p1} />
        </Subsection>
        <Subsection heading="2.1.2" title={sectionObject[".2"].title}>
            <ol className="list-[lower-alpha] list-inside">
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".a"].title} />
                    <Paragraph content={sectionObject[".2"][".a"].p1} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".b"].title} />
                    <Paragraph content={sectionObject[".2"][".b"].p1} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".c"].title} />
                    <Paragraph content={sectionObject[".2"][".c"].p1} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".d"].title} />
                    <Paragraph content={sectionObject[".2"][".d"].p1} />
                </ListItem>
            </ol>
        </Subsection>
        <Subsection heading="2.1.3" title={sectionObject[".3"].title}>
            <Paragraph content={sectionObject[".3"].p1} />
            <ol className="list-inside list-[lower-alpha]">
                <ListItem>
                    <Paragraph content={sectionObject[".3"][".a"].title} />
                    <Paragraph content={sectionObject[".3"][".a"].p1} />
                    <Table2A />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".3"][".b"].title} />
                    <Paragraph content={sectionObject[".3"][".b"].p1} />
                    <ol className="list-inside list-[lower-roman]">
                        <ListItem>
                            <Paragraph content={sectionObject[".3"][".b"][".i"].p1} />
                            <Table2B />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".3"][".b"][".ii"].p1} />
                            <Table2C />
                            <Paragraph content={sectionObject[".3"][".b"][".ii"].p2} />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".3"][".b"][".iii"].p1} />
                        </ListItem>
                    </ol>
                </ListItem>
            </ol>
        </Subsection>
    </ChapterSection>;
}

export default function Chapter2() {
    return <Chapter
        number={2}
        title={chapter2Text.Title}
        sections={[
            <Section1 key="ch2.1" />
        ]} />;
}