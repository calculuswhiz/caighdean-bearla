import React from "react";
import { Chapter, ChapterSection, LanguageSelector, ListItem, Paragraph, SectionGroupHeader, Subsection, TableKey } from "../BodyMatter";
import chapter1Text from "../../../translation/Chapter1.json";
import commonText from "../../../translation/Common.json";
import SampleBox from "../SampleBox";
import { translateIfAvailable, translateText, translateTextMarkup, type LanguageSelection, type Translation } from "../../translate";
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

/** E.g. Table 1A, 1F, etc. */
function ArticleTableTemplate(props: {
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
                    chapter1Text.ArticleTableCommon.colNames.map((t, i) =>
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
                    {translateTextMarkup(chapter1Text.ArticleTableCommon.row1Name, props.langSelect)}
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
                    {translateTextMarkup(chapter1Text.ArticleTableCommon.row2Name, props.langSelect)}
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
            <ArticleTableTemplate
                title={commonText.Masculine}
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
            <ArticleTableTemplate
                title={commonText.Feminine}
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

type ValidSampleEntry = Multipliable<string | Translation>;

/** E.g. Table 1C */
function MascFemTable(props: {
    title: Translation;
    /** For any subheadings that appear below gender cells. If 1 supplied, gives colspan 2. If not specified, no headings */
    subheadings?: [Translation, Translation] | [Translation] | [];
    samples: [ValidSampleEntry, ValidSampleEntry][];
    tableKeyProps: {
        id: string;
        label: Translation;
    };
}) {
    const [tableLanguage, setTableLanguage] = React.useState('en' as LanguageSelection);

    return <div>
        <LanguageSelector
            selection={tableLanguage}
            position="right"
            onClick={() => setTableLanguage(tableLanguage === "en" ? "ga" : "en")} />
        <table className="p-2 w-[100%]">
            <colgroup>
                <col span={1} className="w-[50%]" />
                <col span={1} className="w-[50%]" />
            </colgroup>
            <thead>
                <tr>
                    <th className="bg-blue-950 text-white text-xl" colSpan={2}>{translateTextMarkup(props.title, tableLanguage)}</th>
                </tr>
                <tr>
                    <th className="bg-cyan-800 text-white text-l">{translateText(commonText.Masculine, tableLanguage)}</th>
                    <th className="bg-cyan-800 text-white text-l">{translateText(commonText.Feminine, tableLanguage)}</th>
                </tr>
                {
                    props.subheadings != null && <tr>
                        {
                            props.subheadings.map((sh, shIdx) =>
                                <th key={shIdx} className="text-l bg-gray-200 p-2" colSpan={3 - (props.subheadings?.length ?? 0)}>{
                                    translateTextMarkup(sh, tableLanguage)
                                }</th>
                            )
                        }
                    </tr>
                }
            </thead>
            <tbody>{
                props.samples.map((entries, i) => <tr key={i}>{
                    entries.map((ent, j) =>
                        <td className="bg-gray-100 p-1 border-2 border-white " key={j}>{
                            Array.isArray(ent)
                                ? ent.map((line, lineNo) => <React.Fragment key={lineNo}>
                                    {translateIfAvailable(line, tableLanguage)}
                                    {lineNo < ent.length - 1 && <br />}
                                </React.Fragment>
                                )
                                : translateIfAvailable(ent, tableLanguage)
                        }</td>
                    )
                }</tr>)
            }
            </tbody>
        </table>
        <TableKey tableId={props.tableKeyProps.id}
            label={translateTextMarkup(props.tableKeyProps.label, tableLanguage)}
            language={tableLanguage} />
    </div>;
}

function Section4() {
    const sectionObject = chapter1Text["1.4"];

    return <ChapterSection
        sectionId="1.4"
        title={sectionObject.title}>
        <Subsection heading="1.4.1">
            <Paragraph content={sectionObject[".1"].text} />
            <MascFemTable
                title={sectionObject[".1"].Table1B.title}
                samples={[
                    ["ag an bhfear maith", "ag an gcuideachta bheag"],
                    ["ar an mbosca dearg", "ar an mbean shaibhir"],
                    ["as an ngleann mór", "as an bpáirc chéanna"],
                    ["chuig an gCoimisinéir coinsiasach", "chuig an mbean ghairmiúil"],
                    ["den chrann caol", "den bhean fhlaithiúil"],
                    ["don fhear trom", "don chuideachta ghnóthach"],
                    ["fairis an ngarda béasach", "fairis an mbean chairdiúil"],
                    ["faoin bhfógra práinneach", "faoin ngrian bhreá"],
                    [
                        [
                            "sa bhosca buí",
                            "sa fhraoch bán",
                            "",
                            sectionObject[".1"].Table1B.note1,
                            "san fhéar fliuch"
                        ],
                        [
                            "sa chomhairle shóisialta",
                            "sa fhrithréabhlóid fhíochmhar",
                            "",
                            sectionObject[".1"].Table1B.note1,
                            "san fharraige ghlan"
                        ]
                    ],
                    ["leis an bhfasach cruinn", "leis an mbáisteach throm"],
                    ["ón gcaisleán fuar", "ón gcathair mhór"],
                    ["roimh an gcruinniú tábhachtach", "roimh an mbainis bheag"],
                    ["thar an gcnoc bán", "thar an bhfarraige chiúin"],
                    ["tríd an ngairdín breá", "tríd an bhfuinneog ghorm"],
                    ["um an mBille fada", "um an ngníomhaireacht reachtúil"],
                ]}
                tableKeyProps={{
                    id: "1B",
                    label: sectionObject[".1"].Table1B.title
                }} />
        </Subsection>
        <Subsection heading="1.4.2">
            <Paragraph content={sectionObject[".2"].text} />
            <MascFemTable
                title={sectionObject[".2"].Table1C.title}
                subheadings={[sectionObject[".2"].Table1C.col1Desc, sectionObject[".2"].Table1C.col2Desc]}
                samples={[
                    ["ag an Seapánach cliste", "ag an tseanmháthair bhocht"],
                    ["ar an suíochán fliuch", "ar an tsráid ghlan"],
                    ["as an sailéad blasta", "as an tsaoire bhliantúil"],
                    ["chuig an Seanadóir nuacheaptha", "chuig an tsatailít mhór"],
                    ["den saighdiúir sásúil", "den tslándáil shóisialach"],
                    ["don Seanad nua", "don tsaoirse cheart"],
                    ["fairis an saineolaí lách", "fairis an tseanbhean shaibhir"],
                    ["faoin sonrasc déanach", "faoin tslí dhíreach"],
                    ["sa soitheach gorm", "sa tseacláid mhilis"],
                    ["leis an salann bán", "leis an tslat fhada"],
                    ["ón suirbhé pearsanta", "ón scoil bheag"],
                    ["roimh an samhradh fada", "roimh an tseachtain mhór"],
                    ["thar an seol mór", "thar an tSionainn fhada"],
                    ["tríd an sorcas mór", "tríd an tseift chliste"],
                    ["um an sainchomhairleoir cruinn", "um an tseirbhís mhaith"],
                ]}
                tableKeyProps={{
                    id: "1C",
                    label: sectionObject[".2"].Table1C.title
                }} />
        </Subsection>
        <Subsection heading="1.4.3">
            <Paragraph content={sectionObject[".3"].text} />
            <MascFemTable
                title={sectionObject[".3"].Table1D.Title}
                samples={[
                    ["ag an Albanach ciallmhar", "ag an aeráid ghaofar"],
                    ["ar an eitleán dubh", "ar an olann bhán"],
                    ["as an uisce glan", "as an iris cháiliúil"],
                    ["chuig an Aire ilteangach", "chuig an Ostair shléibhtiúil"],
                    ["den alt fada", "den uimhir chruinn"],
                    ["don údarás céanna", "don obair chrua"],
                    ["fairis an oifigeach múinte", "fairis an ógbhean chliste"],
                ]}
                tableKeyProps={{
                    id: "1D",
                    label: sectionObject[".3"].Table1D.Title
                }} />
        </Subsection>
        <Subsection heading="1.4.4">
            <Paragraph content={sectionObject[".4"].text} />
            <MascFemTable
                title={sectionObject[".4"].Table1E.Title}
                samples={[
                    ["faoin dréimire briste", "faoin deacracht bhreise"],
                    ["sa teas mór", "sa deoch fhuar"],
                    ["leis an duine ciúin", "leis an taithí mhaith"],
                    ["ón deartháir cineálta", "ón teanga líofa"],
                    ["roimh an tarbh fiáin", "roimh an deighilt mhór"],
                    ["thar an teach gorm", "thar an diallait nua"],
                    ["tríd an talamh crua", "tríd an drochaimsir ghránna"],
                    ["um an dlí coiriúil", "um an tagairt chuí"],
                ]}
                tableKeyProps={{
                    id: "1E",
                    label: sectionObject[".4"].Table1E.Title
                }} />
            <h4 className="font-bold">N.B.</h4>
            <Paragraph content={sectionObject[".4"].Notes.p1} />
            <ol className="list-[lower-alpha] list-inside pl-2">
                <ListItem>
                    <Paragraph content={sectionObject[".4"].Notes[".a"]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".4"].Notes[".b"]} />
                </ListItem>
            </ol>
        </Subsection>
    </ChapterSection>;
}

function Section5() {
    const sectionObject = chapter1Text["1.5"];
    return <ChapterSection
        sectionId="1.5"
        title={sectionObject.title}>
        <Subsection heading="1.5.1">
            <Paragraph content={sectionObject[".1"].p1} />
            <ol className="list-[lower-alpha] list-inside pl-2">
                {
                    (["a", "b", "c", "d", "e"] as const).map(l =>
                        <ListItem key={l}>
                            <Paragraph content={sectionObject[".1"][`.${l}`].text} />
                            <SampleBox samples={sectionObject[".1"][`.${l}`].samples} />
                        </ListItem>
                    )
                }
            </ol>
            <Paragraph content={sectionObject[".1"].p2} />
        </Subsection>
        <Subsection heading="1.5.2">
            <Paragraph content={sectionObject[".2"].text} />
            Under construction...
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
            <Section4 key="ch1.4" />,
            <Section5 key="ch1.5" />,
        ]} />;
}