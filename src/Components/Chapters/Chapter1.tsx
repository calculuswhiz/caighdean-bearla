import React from "react";
import { Chapter, ChapterSection, LanguageSelector, ListItem, Paragraph, SectionGroupHeader, Subsection, TableKey } from "../BodyMatter";
import chapter1Text from "../../../translation/Chapter1.json";
import SampleBox from "../SampleBox";
import { translateText, translateTextMarkup, type LanguageSelection, type Translation } from "../../translate";
import { joinIfPossible } from "../../utility";

function Section1() {
    const sectionObject = chapter1Text["1.1"];
    return <ChapterSection
        title={sectionObject.title}
        sectionId="1.1"
    >
        <Subsection heading="1.1.1">
            <Paragraph content={sectionObject[".1"]} />
        </Subsection>
        <Subsection heading="1.1.2">
            <Paragraph content={sectionObject[".2"]} />
        </Subsection>
        <Subsection heading="1.1.3">
            <Paragraph content={sectionObject[".3"]} />
        </Subsection>
        <Subsection heading="1.1.4">
            <Paragraph content={sectionObject[".4"]} />
        </Subsection>
        <Subsection heading="1.1.5">
            <Paragraph content={sectionObject[".5"].text} />
            <ol className="list-[lower-alpha] list-inside pl-2">
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".a"].text} />
                    <SampleBox samples={sectionObject[".5"][".a"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".b"].text} />
                    <SampleBox samples={sectionObject[".5"][".b"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".c"].text} />
                    <SampleBox samples={sectionObject[".5"][".c"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".d"].p1} />
                    <SampleBox samples={sectionObject[".5"][".d"].samples} />
                    <Paragraph content={sectionObject[".5"][".d"].p2} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".e"].p1} />
                    <SampleBox samples={sectionObject[".5"][".e"].samples} />
                    <Paragraph content={sectionObject[".5"][".e"].p2} />
                    <Paragraph content={sectionObject[".5"][".e"].p3} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".f"].p1} />
                    <Paragraph content={sectionObject[".5"][".f"].p2} />
                    <SampleBox samples={sectionObject[".5"][".f"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".g"].p1} />
                    <Paragraph content={sectionObject[".5"][".g"].p2} />
                    <SampleBox samples={sectionObject[".5"][".g"].samples} />
                    <Paragraph content={sectionObject[".5"][".g"].p3} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".h"].p1} />
                    <ol className="list-[lower-roman] list-inside pl-2">
                        <ListItem>
                            <Paragraph content={sectionObject[".5"][".h"].i} />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".5"][".h"].ii} />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".5"][".h"].iii} />
                        </ListItem>
                    </ol>
                    <SampleBox samples={sectionObject[".5"][".h"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".i"].p1} />
                    <ol className="list-[upper-alpha] list-inside p2">
                        <ListItem>
                            <Paragraph content={sectionObject[".5"][".i"][".A"].p1} />
                            <ol className="list-[lower-roman] list-inside p2">
                                <ListItem>
                                    <Paragraph content={sectionObject[".5"][".i"][".A"][".i"]} />
                                </ListItem>
                                <ListItem>
                                    <Paragraph content={sectionObject[".5"][".i"][".A"][".ii"]} />
                                </ListItem>
                                <ListItem>
                                    <Paragraph content={sectionObject[".5"][".i"][".A"][".iii"]} />
                                </ListItem>
                            </ol>
                            <Paragraph content={sectionObject[".5"][".i"][".A"].p2} />
                            <SampleBox samples={sectionObject[".5"][".i"][".A"].samples} />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".5"][".i"][".B"].p} />
                            <ol className="list-[lower-roman] list-inside p2">
                                <ListItem>
                                    <Paragraph content={sectionObject[".5"][".i"][".B"][".i"]} />
                                </ListItem>
                                <ListItem>
                                    <Paragraph content={sectionObject[".5"][".i"][".B"][".ii"]} />
                                </ListItem>
                                <ListItem>
                                    <Paragraph content={sectionObject[".5"][".i"][".B"][".iii"]} />
                                </ListItem>
                                <ListItem>
                                    <Paragraph content={sectionObject[".5"][".i"][".B"][".iv"]} />
                                </ListItem>
                            </ol>
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".5"][".i"][".C"].p} />
                            <SampleBox samples={sectionObject[".5"][".i"][".C"].samples} />
                        </ListItem>
                    </ol>
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".j"].p} />
                    <SampleBox samples={sectionObject[".5"][".j"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".k"].p1} />
                    <Paragraph content={sectionObject[".5"][".k"].p2} />
                    <SampleBox samples={sectionObject[".5"][".k"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".l"].p1} />
                    <SampleBox samples={sectionObject[".5"][".l"].samples} />
                    <Paragraph content={sectionObject[".5"][".l"].p2} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".m"].p} />
                    <SampleBox samples={sectionObject[".5"][".m"].samples} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".5"][".n"].p1} />
                    <SampleBox samples={sectionObject[".5"][".n"].samples} />
                    <Paragraph content={sectionObject[".5"][".n"].p2} />
                </ListItem>
            </ol>
        </Subsection>
    </ChapterSection>;
}

function Table1aTemplate(props: {
    title: Translation;
    langSelect: LanguageSelection;
    consonantCases: {
        initRule: Translation;
        effect: Translation;
        // Shouldn't have to translate these
        samples: string[];
    }[];
    vowelInfo: {
        initRule: Translation;
        effect: Translation;
        samples: string[];
    }
}) {
    return <table className="p-2 w-[100%]">
        <colgroup>
            <col span={1} className="w-20" />
            <col span={1} className="w-70" />
            <col span={1} className="w-30" />
            <col span={1} className="w-30" />
        </colgroup>
        <thead>
            <tr>
                <td className="border-2 border-white bg-blue-950 text-white font-bold text-center text-xl p-2" colSpan={5}>
                    {translateTextMarkup(props.title, props.langSelect)}
                </td>
            </tr>
            <tr>
                {
                    chapter1Text["1.2"].Table1A.colNames.map((t, i) =>
                        <td key={i}
                            className="border-2 border-white bg-cyan-800 text-white font-bold text-center text-l p-2"
                            colSpan={i === 0 ? 2 : 1}>
                            {translateTextMarkup(t, props.langSelect)}
                        </td>
                    )
                }
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border-2 border-white p-2 bg-gray-300 font-bold text-center" rowSpan={props.consonantCases.length}>
                    {translateTextMarkup(chapter1Text["1.2"].Table1A.row1Name, props.langSelect)}
                </td>
                <td className="border-2 border-white p-2 bg-gray-200">
                    {translateTextMarkup(props.consonantCases[0].initRule, props.langSelect)}
                </td>
                <td className="border-2 border-white p-2 bg-gray-200">an</td>
                <td className="border-2 border-white p-2 bg-gray-200">
                    {translateTextMarkup(props.consonantCases[0].effect, props.langSelect)}
                </td>
                <td className="border-2 border-white p-2 bg-gray-200">
                    <ul>
                        {props.consonantCases[0].samples.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </td>
            </tr>
            {
                props.consonantCases.slice(1).map((cCase, i) => <tr key={i}>
                    {
                        [
                            translateTextMarkup(cCase.initRule, props.langSelect),
                            "an",
                            translateTextMarkup(cCase.effect, props.langSelect),
                            <ul>{cCase.samples.map(s => <li key={s}>{s}</li>)}</ul>
                        ].map((x, i) =>
                            <td key={i} className="p-2 border-2 border-white bg-gray-200">{x}</td>
                        )
                    }
                </tr>)
            }
            <tr>
                <td className="p-2 border-2 border-white bg-gray-300 font-bold text-center">
                    {translateTextMarkup(chapter1Text["1.2"].Table1A.row2Name, props.langSelect)}
                </td>
                <td className="p-2 border-2 border-white bg-gray-200">
                    {translateTextMarkup(props.vowelInfo.initRule, props.langSelect)}
                </td>
                <td className="p-2 border-2 border-white bg-gray-200">
                    an
                </td>
                <td className="p-2 border-2 border-white bg-gray-200">
                    {translateTextMarkup(props.vowelInfo.effect, props.langSelect)}
                </td>
                <td className="p-2 border-2 border-white bg-gray-200">
                    <ul>
                        {props.vowelInfo.samples.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>;
}

function Table1A() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <div>
            <Table1aTemplate
                title={chapter1Text["1.2"].Table1A.Title1}
                consonantCases={[
                    {
                        initRule: chapter1Text["1.2"].Table1A.masc.cons[0],
                        effect: chapter1Text["1.2"].Table1A.masc.cons[1],
                        samples: ["an cnoc", "an diabhal", "an fear", "an saol", "an Seapánach", "an teach"]
                    }
                ]}
                vowelInfo={{
                    initRule: chapter1Text["1.2"].Table1A.masc.vowel[0],
                    effect: chapter1Text["1.2"].Table1A.masc.vowel[1],
                    samples: ["an t-íochtar", "an t-uisce", "an t-alt", "an tAcht", "an tUltach",]
                }}
                langSelect={langSelect} />
            <Table1aTemplate
                title={chapter1Text["1.2"].Table1A.Title2}
                consonantCases={[
                    {
                        initRule: chapter1Text["1.2"].Table1A.fem.cons.cases[0][0],
                        effect: chapter1Text["1.2"].Table1A.fem.cons.cases[0][1],
                        samples: ["an fhuinneog", "an chaibidil"]
                    },
                    {
                        initRule: chapter1Text["1.2"].Table1A.fem.cons.cases[1][0],
                        effect: chapter1Text["1.2"].Table1A.fem.cons.cases[1][1],
                        samples: ["an deoch", "an teanga"]
                    },
                    {
                        initRule: chapter1Text["1.2"].Table1A.fem.cons.cases[2][0],
                        effect: chapter1Text["1.2"].Table1A.fem.cons.cases[2][1],
                        samples: ["an tsráid", "an tSeapáin"]
                    },
                ]}
                vowelInfo={{
                    initRule: chapter1Text["1.2"].Table1A.fem.vowel[0],
                    effect: chapter1Text["1.2"].Table1A.fem.vowel[1],
                    samples: ["an áit", "an Astráil", "an Iodáil", "an obair",]
                }}
                langSelect={langSelect} />
            <TableKey tableId="1A"
                language={langSelect}
                label={joinIfPossible(translateText(chapter1Text["1.2"].title, langSelect))} />
            <div className="text-sm">{
                translateTextMarkup(chapter1Text["1.2"].Table1A.footnote, langSelect)
            }</div>
        </div>
    </div>
}

function Section2() {
    return <ChapterSection
        sectionId="1.2"
        title={chapter1Text["1.2"].title}>
        <Paragraph content={chapter1Text["1.2"].p1} />
        <Table1A />
    </ChapterSection>
}

function ContractionTable(props: {
    /** [preposition, result] */
    entries: [string, string][]
}) {
    return <table>
        <tbody>
            {
                props.entries.map(([prepososition, result]) =>
                    <tr key={result}>
                        <td className="bg-gray-100 p-2 border-2 border-white">{prepososition} + an</td>
                        <td className="bg-gray-100 p-2 border-2 border-white">&rarr;</td>
                        <td className="bg-gray-100 p-2 border-2 border-white">{result}</td>
                    </tr>)
            }
        </tbody>
    </table>;
}

function Section3() {
    const sectionObject = chapter1Text["1.3"];
    return <ChapterSection
        sectionId="1.3"
        title={sectionObject.title}>
        <Subsection heading="1.3.1">
            <Paragraph content={sectionObject[".1"]} />
        </Subsection>
        <Subsection heading="1.3.2">
            <Paragraph content={sectionObject[".2"]} />
        </Subsection>
        <Subsection heading="1.3.3">
            <Paragraph content={sectionObject[".3"]} />
        </Subsection>
        <Subsection heading="1.3.4">
            <Paragraph content={sectionObject[".4"]} />
            <ContractionTable entries={[
                ["de", "den"],
                ["do", "don"],
                ["faoi", "faoin"],
                ["i", "sa, san"],
                ["ó", "ón"],
            ]} />
        </Subsection>
        <Subsection heading="1.3.5">
            <Paragraph content={sectionObject[".5"]} />
            <ContractionTable entries={[
                ["fara", "fairis an"],
                ["le", "leis an"],
                ["trí", "tríd an"],
            ]} />
        </Subsection>
    </ChapterSection>;
}

function Section4() {
    const sectionObject = chapter1Text["1.4"];

    const [tableLanguage, setTableLanguage] = React.useState('en' as LanguageSelection);

    return <ChapterSection
        sectionId="1.4"
        title={sectionObject.title}>
        <Subsection heading="1.4.1">
            <Paragraph content={sectionObject[".1"].text} />
            <div>
                <LanguageSelector
                    selection={tableLanguage}
                    position="right"
                    onClick={() => setTableLanguage(tableLanguage === "en" ? "ga" : "en")} />
                <table className="p-2 w-[100%]">
                    <thead>
                        <tr>
                            <th className="bg-blue-950 text-white" colSpan={2}>{translateTextMarkup(sectionObject[".1"].Table1B.title, tableLanguage)}</th>
                        </tr>
                        <tr>
                            <th className="bg-cyan-800 text-white">{translateText(sectionObject[".1"].Table1B.col1Name, tableLanguage)}</th>
                            <th className="bg-cyan-800 text-white">{translateText(sectionObject[".1"].Table1B.col2Name, tableLanguage)}</th>
                        </tr>
                    </thead>
                    <tbody>{
                        [
                            ["ag an bhfear maith", "ag an gcuideachta bheag"],
                            ["ar an mbosca dearg", "ar an mbean shaibhir"],
                            ["as an ngleann mór", "as an bpáirc chéanna"],
                            ["chuig an gCoimisinéir coinsiasach", "chuig an mbean ghairmiúil"],
                            ["den chrann caol", "den bhean fhlaithiúil"],
                            ["don fhear trom", "don chuideachta ghnóthach"],
                            ["fairis an ngarda béasach", "fairis an mbean chairdiúil"],
                            ["faoin bhfógra práinneach", "faoin ngrian bhreá"],
                            [
                                <>
                                    sa bhosca buí<br />
                                    sa fhraoch bán<br /><br />
                                    &nbsp;{translateTextMarkup(sectionObject[".1"].Table1B.note1, tableLanguage)}<br />
                                    san fhéar fliuch
                                </>,
                                <>
                                    sa chomhairle shóisialta<br />
                                    sa fhrithréabhlóid fhíochmhar<br /><br />
                                    &nbsp;{translateTextMarkup(sectionObject[".1"].Table1B.note1, tableLanguage)}<br />
                                    san fharraige ghlan
                                </>
                            ],
                            ["leis an bhfasach cruinn", "leis an mbáisteach throm"],
                            ["ón gcaisleán fuar", "ón gcathair mhór"],
                            ["roimh an gcruinniú tábhachtach", "roimh an mbainis bheag"],
                            ["thar an gcnoc bán", "thar an bhfarraige chiúin"],
                            ["tríd an ngairdín breá", "tríd an bhfuinneog ghorm"],
                            ["um an mBille fada", "um an ngníomhaireacht reachtúil"],
                        ].map(([l, r], i) => <tr key={i}>
                            <td className="bg-gray-200 border-2 border-white pl-2 py-1">{l}</td>
                            <td className="bg-gray-200 border-2 border-white pl-2 py-1">{r}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
                <TableKey tableId="1B" label={translateTextMarkup(sectionObject[".1"].Table1B.title, tableLanguage)} language={tableLanguage} />
            </div>
        </Subsection>
    </ChapterSection>;
}

export default function Chapter1() {
    return <Chapter
        number={1}
        title={chapter1Text.Chapter1Title}
        sections={[
            <Section1 key="ch1.1" />,
            <SectionGroupHeader key="ch(1.5)" title={chapter1Text["(1.5).group"].title} content={chapter1Text["(1.5).group"].p} />,
            <Section2 key="ch1.2" />,
            <Section3 key="ch1.3" />,
            <Section4 key="ch1.4" />
        ]} />;
}