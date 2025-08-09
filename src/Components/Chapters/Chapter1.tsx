import React from "react";
import { Chapter, ChapterSection, Footnote, LanguageSelector, ListItem, Paragraph, SectionGroupHeader, Subsection } from "../BodyMatter";
import chapter1Text from "../../../translation/Chapter1.json";
import commonText from "../../../translation/Common.json";
import SampleBox from "../SampleBox";
import { translateIfAvailable, translateText, translateTextMarkup, type LanguageSelection, type Translation } from "../../translate";
import { joinIfPossible } from "../../utility";
import { Caption, TableStack } from "../TableHelpers";

function Section1() {
    const sectionObject = chapter1Text["1.1"];
    return <ChapterSection
        title={commonText.General}
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
            <ol className="list-[lower-alpha] pl-2">
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
                    <ol className="list-[lower-roman] pl-2">
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
                    <ol className="list-[upper-alpha] p-2">
                        <ListItem>
                            <Paragraph content={sectionObject[".5"][".i"][".A"].p1} />
                            <ol className="list-[lower-roman] p-2">
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
                            <ol className="list-[lower-roman] p-2">
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

function ArticleTableHeaders(props: {
    titleContent: Translation;
    hideInitalCategory?: boolean;
    langSelect: LanguageSelection;
}) {
    return <thead>
        <tr>
            <th className="text-center text-xl p-2" colSpan={props.hideInitalCategory ? 4 : 5}>
                {translateTextMarkup(props.titleContent, props.langSelect)}
            </th>
        </tr>
        <tr>
            {
                chapter1Text.ArticleTableCommon.colNames.map((t, i) =>
                    <th key={i}
                        className="text-center text-l p-2"
                        // The first column is 2-span, unless hidden
                        colSpan={i === 0
                            ? !props.hideInitalCategory
                                ? 2 : 1
                            : 1}>
                        {translateTextMarkup(t, props.langSelect)}
                    </th>
                )
            }
        </tr>
    </thead>;
}

function ArticleTableRow(props: {
    initialText: string;
    content: React.ReactNode[][];
}) {
    return <>
        {
            props.content.map((rowData, idx) =>
                <tr key={idx}>
                    {idx === 0
                        && <th className="bg-gray-200 p-2"
                            rowSpan={props.content.length}>{props.initialText}</th>
                    }
                    {rowData.map((cellContent, cellIdx) =>
                        <td key={cellIdx} className="bg-gray-100 p-2">
                            {cellContent}
                        </td>)
                    }
                </tr>
            )
        }
    </>;
}

function Table1A() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <TableStack
            caption={{
                id: `${translateText(commonText.Table, langSelect)} 1A`,
                content: translateTextMarkup(chapter1Text["1.2"].title, langSelect)
            }}
            tables={[
                <table key="m" className="w-[100%] chapter-1">
                    <colgroup>
                        <col span={1} className="w-20" />
                        <col span={1} className="w-70" />
                        <col span={1} className="w-30" />
                        <col span={1} className="w-30" />
                    </colgroup>
                    <ArticleTableHeaders titleContent={commonText.Masculine} langSelect={langSelect} />
                    <tbody>
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Consonant, langSelect))}
                            content={[[
                                translateTextMarkup(chapter1Text["1.2"].Table1A.masc.cons[0], langSelect),
                                "an",
                                translateTextMarkup(chapter1Text["1.2"].Table1A.masc.cons[1], langSelect),
                                <ul>
                                    <li>an cnoc</li>
                                    <li>an diabhal</li>
                                    <li>an fear</li>
                                    <li>an saol</li>
                                    <li>an Seapánach</li>
                                    <li>an teach</li>
                                </ul>
                            ]]} />
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Vowel, langSelect))}
                            content={[[
                                translateTextMarkup(chapter1Text["1.2"].Table1A.masc.vowel[0], langSelect),
                                "an",
                                translateTextMarkup(chapter1Text["1.2"].Table1A.masc.vowel[1], langSelect),
                                <ul>
                                    <li>an t-íochtar</li>
                                    <li>an t-uisce</li>
                                    <li>an t-alt</li>
                                    <li>an tAcht</li>
                                    <li>an tUltach</li>
                                </ul>
                            ]]} />
                    </tbody>
                </table>,
                <table key="f" className="w-[100%] chapter-1">
                    <colgroup>
                        <col span={1} className="w-20" />
                        <col span={1} className="w-70" />
                        <col span={1} className="w-30" />
                        <col span={1} className="w-30" />
                    </colgroup>
                    <ArticleTableHeaders titleContent={commonText.Feminine} langSelect={langSelect} />
                    <tbody>
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Consonant, langSelect))}
                            content={[
                                [
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[0][0], langSelect),
                                    "an",
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[0][1], langSelect),
                                    <ul>
                                        <li>an fhuinneog</li>
                                        <li>an chaibidil</li>
                                    </ul>
                                ],
                                [
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[1][0], langSelect),
                                    "an",
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[1][1], langSelect),
                                    <ul>
                                        <li>an deoch</li>
                                        <li>an teanga</li>
                                    </ul>
                                ],
                                [
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[2][0], langSelect),
                                    "an",
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[2][1], langSelect),
                                    <ul>
                                        <li>an tsráid</li>
                                        <li>an tSeapáin</li>
                                    </ul>
                                ],
                            ]} />
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Vowel, langSelect))}
                            content={[[
                                translateTextMarkup(chapter1Text["1.2"].Table1A.fem.vowel[0], langSelect),
                                "an",
                                translateTextMarkup(chapter1Text["1.2"].Table1A.fem.vowel[1], langSelect),
                                <ul>
                                    <li>an áit</li>
                                    <li>an Astráil</li>
                                    <li>an Iodáil</li>
                                    <li>an obair</li>
                                </ul>
                            ]]} />
                    </tbody>
                </table>
            ]} />
        <Footnote>{
            translateTextMarkup(chapter1Text["ArticleTableCommon"].LenitionNote, langSelect)
        }</Footnote>
    </div>;
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
    return <table className="ml-1">
        <tbody>
            {
                props.entries.map(([prepososition, result]) =>
                    <tr key={result}>
                        <td className="bg-gray-100 p-2">{prepososition} + an</td>
                        <td className="bg-gray-100 p-2">&rarr;</td>
                        <td className="bg-gray-100 p-2">{result}</td>
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
        <table className="p-2 w-[100%] chapter-1">
            <Caption
                id={joinIfPossible(`${translateText(commonText.Table, tableLanguage)} ${props.tableKeyProps.id}`)}
                content={translateTextMarkup(props.tableKeyProps.label, tableLanguage)}
            />
            <colgroup>
                <col span={1} className="w-[50%]" />
                <col span={1} className="w-[50%]" />
            </colgroup>
            <thead>
                <tr>
                    <th className="text-xl py-1" colSpan={2}>{translateTextMarkup(props.title, tableLanguage)}</th>
                </tr>
                <tr>
                    <th className="text-l py-1">{translateText(commonText.Masculine, tableLanguage)}</th>
                    <th className="text-l py-1">{translateText(commonText.Feminine, tableLanguage)}</th>
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
                        <td className="bg-gray-100 p-1" key={j}>{
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
            <ol className="list-[lower-alpha] pl-2">
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

/** Very similar to 1A. Not going to do a whole new translation for this. */
function Table1F() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    const femVowelEffect = { ...chapter1Text["1.2"].Table1A.masc.vowel[1] };
    femVowelEffect.ga = femVowelEffect.ga.replace(/`t`/, "`h`");
    femVowelEffect.en = femVowelEffect.en.replace(/`t`/, "`h`");

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <TableStack
            caption={{
                id: `${joinIfPossible(translateText(commonText.Table, langSelect))} 1F`,
                content: translateTextMarkup(chapter1Text["1.5"].title, langSelect)
            }}
            tables={[
                <table key="M" className="w-[100%]">
                    <colgroup>
                        <col span={1} className="w-20" />
                        <col span={1} className="w-70" />
                        <col span={1} className="w-30" />
                        <col span={1} className="w-30" />
                    </colgroup>
                    <ArticleTableHeaders titleContent={commonText.Masculine} langSelect={langSelect} />
                    <tbody>
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Consonant, langSelect))}
                            content={[
                                [
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[0][0], langSelect),
                                    "an",
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[0][1], langSelect),
                                    <ul>
                                        <li>barr an chnoic</li>
                                        <li>hata an fhir</li>
                                    </ul>
                                ],
                                [
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[1][0], langSelect),
                                    "an",
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[1][1], langSelect),
                                    <ul>
                                        <li>chun an diabhail</li>
                                        <li>doras an tí</li>
                                    </ul>
                                ],
                                [
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[2][0], langSelect),
                                    "an",
                                    translateTextMarkup(chapter1Text["1.2"].Table1A.fem.cons.cases[2][1], langSelect),
                                    <ul>
                                        <li>tús an tsaoil</li>
                                        <li>pas an tSeapánaigh</li>
                                    </ul>
                                ]
                            ]} />
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Vowel, langSelect))}
                            content={[[
                                translateTextMarkup(chapter1Text["1.2"].Table1A.fem.vowel[0], langSelect),
                                "an",
                                translateTextMarkup(chapter1Text["1.2"].Table1A.fem.vowel[1], langSelect),
                                <ul>
                                    <li>de réir an ailt</li>
                                    <li>faoi réir an Achta</li>
                                    <li>pas an Albanaigh</li>
                                </ul>
                            ]]} />
                    </tbody>
                </table>,
                <table key="F" className="w-[100%]">
                    <colgroup>
                        <col span={1} className="w-20" />
                        <col span={1} className="w-70" />
                        <col span={1} className="w-30" />
                        <col span={1} className="w-30" />
                    </colgroup>
                    <ArticleTableHeaders titleContent={commonText.Masculine} langSelect={langSelect} />
                    <tbody>
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Consonant, langSelect))}
                            content={[[
                                translateTextMarkup(chapter1Text["1.2"].Table1A.masc.cons[0], langSelect),
                                "na",
                                translateTextMarkup(chapter1Text["1.2"].Table1A.masc.cons[1], langSelect),
                                <ul>
                                    <li>eac na fuinneoige</li>
                                    <li>deireadh na caibidle</li>
                                    <li>bun na sráide</li>
                                    <li>muintir na Téalainne</li>
                                </ul>
                            ]]} />
                        <ArticleTableRow
                            initialText={joinIfPossible(translateText(commonText.Vowel, langSelect))}
                            content={[[
                                translateTextMarkup(chapter1Text["1.2"].Table1A.masc.vowel[0], langSelect),
                                "na",
                                translateTextMarkup(femVowelEffect, langSelect),
                                <ul>
                                    <li>timpeall na háite</li>
                                    <li>foireann na hÍsiltíre</li>
                                </ul>
                            ]]} />
                    </tbody>
                </table>
            ]} />
        <Footnote>{
            translateTextMarkup(chapter1Text["ArticleTableCommon"].LenitionNote, langSelect)
        }</Footnote>
    </div>;
}

function Section5() {
    const sectionObject = chapter1Text["1.5"];
    return <ChapterSection sectionId="1.5" title={sectionObject.title}>
        <Subsection heading="1.5.1">
            <Paragraph content={sectionObject[".1"].p1} />
            <ol className="list-[lower-alpha] pl-2">
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
            <Table1F />
        </Subsection>
    </ChapterSection>;
}

function Table1G() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    const vowelEffect = { ...chapter1Text["1.2"].Table1A.masc.vowel[1] };
    vowelEffect.ga = vowelEffect.ga.replace(/`t`/, "`h`");
    vowelEffect.en = vowelEffect.en.replace(/`t`/, "`h`");

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <div className="max-w-[100%] overflow-auto">
            <table className="w-[100%]">
                <Caption id={`${joinIfPossible(translateText(commonText.Table, langSelect))} 1G`}
                    content={translateTextMarkup(chapter1Text["1.6"][".1"].Table1G.title, langSelect)} />
                <ArticleTableHeaders hideInitalCategory titleContent={commonText.Masculine} langSelect={langSelect} />
                <tbody>
                    <ArticleTableRow
                        initialText={joinIfPossible(translateText(commonText.Consonant, langSelect))}
                        content={[[
                            "na",
                            translateTextMarkup(chapter1Text["1.2"].Table1A.masc.cons[1], langSelect),
                            <ul>
                                <li>na capaill ghlasa</li>
                                <li>na cnoic arda</li>
                                <li>na fuinneoga móra</li>
                                <li>na Seapánaigh</li>
                                <li>na sráideanna</li>
                            </ul>
                        ]]} />
                    <ArticleTableRow
                        initialText={joinIfPossible(translateText(commonText.Vowel, langSelect))}
                        content={[[
                            "na",
                            translateTextMarkup(vowelEffect, langSelect),
                            <ul>
                                <li>na hAchtanna tábhachtacha</li>
                                <li>na háiteanna</li>
                                <li>na hAlbanaigh bhródúla</li>
                                <li>na hÉireannaigh</li>
                                <li>na híomhánna</li>
                            </ul>
                        ]]} />
                </tbody>
            </table>
        </div>
    </div>;
}

function Table1H() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    const vowelEffect = { ...chapter1Text["1.2"].Table1A.masc.vowel[1] };
    vowelEffect.ga = vowelEffect.ga.replace(/`t`/, "`h`");
    vowelEffect.en = vowelEffect.en.replace(/`t`/, "`h`");

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <div className="max-w-[100%] overflow-auto">
            <table className="w-[100%]">
                <Caption id={`${joinIfPossible(translateText(commonText.Table, langSelect))} 1H`}
                    content={translateTextMarkup(chapter1Text["1.6"][".2"].Table1H.title, langSelect)} />
                <ArticleTableHeaders hideInitalCategory titleContent={commonText.MascAndFem} langSelect={langSelect} />
                <tbody>
                    <ArticleTableRow
                        initialText={joinIfPossible(translateText(commonText.Consonant, langSelect))}
                        content={[[
                            "na",
                            translateTextMarkup(chapter1Text["1.2"].Table1A.masc.cons[1], langSelect),
                            <ul>
                                <li>ag na fir mhóra</li>
                                <li>ar na mná cliste</li>
                                <li>as na seirbhísí poiblí</li>
                                <li>chuig na mic léinn ghlóracha</li>
                                <li>de na crainn</li>
                                <li>do na Teachtaí</li>
                                <li>faoi na daoine</li>
                                <li>fairis na gardaí</li>
                                <li>leis na fasaigh</li>
                                <li>ó na múinteoirí</li>
                                <li>roimh na cait</li>
                                <li>sna boscaí</li>
                                <li>thar na farraigí</li>
                                <li>trí na gairdíní</li>
                                <li>um na coillte</li>
                            </ul>
                        ]]} />
                    <ArticleTableRow
                        initialText={joinIfPossible(translateText(commonText.Vowel, langSelect))}
                        content={[[
                            "na",
                            translateTextMarkup(vowelEffect, langSelect),
                            <ul>
                                <li>ag na hiníonacha fásta</li>
                                <li>ar na hoileáin ghaofara</li>
                                <li>as na hirisí acadúla</li>
                                <li>chuig na hoifigigh dheasa</li>
                                <li>de na huimhreacha</li>
                                <li>do na hoibreacha</li>
                                <li>faoi na heachtraí</li>
                                <li>fairis na hógmhná</li>
                                <li>leis na heochracha</li>
                                <li>ó na hÉireannaigh</li>
                                <li>roimh na héin</li>
                                <li>sna heitleáin</li>
                                <li>thar na háiteanna</li>
                                <li>trí na haistriúcháin</li>
                                <li>um na hAchtanna</li>
                            </ul>
                        ]]} />
                </tbody>
            </table>
        </div>
    </div>;
}

function Table1I() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <div className="max-w-[100%] overflow-auto">
            <table className="w-[100%]">
                <Caption id={`${joinIfPossible(translateText(commonText.Table, langSelect))} 1I`}
                    content={translateTextMarkup(chapter1Text["1.6"][".3"].Table1I.title, langSelect)} />
                <ArticleTableHeaders hideInitalCategory titleContent={commonText.MascAndFem} langSelect={langSelect} />
                <tbody>
                    <ArticleTableRow
                        initialText={joinIfPossible(translateText(chapter1Text["1.6"][".3"].Table1I.Row1Name, langSelect))}
                        content={[[
                            "na",
                            translateTextMarkup(commonText.Eclipsis, langSelect),
                            <ul>
                                <li>trasna na gcnoc íseal</li>
                                <li>leaca na bhfuinneog</li>
                                <li>i measc na ndaoine</li>
                            </ul>
                        ]]} />
                    <ArticleTableRow
                        initialText={joinIfPossible(translateText(commonText.Vowel, langSelect))}
                        content={[[
                            "na",
                            translateTextMarkup(commonText.Eclipsis, langSelect),
                            <ul>
                                <li>líon na n-áiteanna breátha</li>
                                <li>costas na n-oibreacha</li>
                                <li>líon na nAlbanach</li>
                            </ul>
                        ]]} />
                </tbody>
            </table>
            <Footnote>{
                translateTextMarkup(chapter1Text["ArticleTableCommon"].EclipsisNote, langSelect)
            }</Footnote>
        </div>
    </div>;
}

function Section6() {
    const sectionObject = chapter1Text["1.6"];
    return <ChapterSection sectionId="1.6" title={sectionObject.title}>
        <Subsection heading="1.6.1">
            <Paragraph content={sectionObject[".1"].title} />
            <Paragraph content={sectionObject[".1"].p1} />
            <Table1G />
        </Subsection>
        <Subsection heading="1.6.2">
            <Paragraph content={sectionObject[".2"].title} />
            <Paragraph content={sectionObject[".2"].p1} />
            <Table1H />
        </Subsection>
        <Subsection heading="1.6.3">
            <Paragraph content={sectionObject[".3"].title} />
            <Paragraph content={sectionObject[".3"].p} />
            <Table1I />
        </Subsection>
    </ChapterSection>;
}

function Section7() {
    const sectionObject = chapter1Text["1.7"];
    return <ChapterSection sectionId="1.7" title={sectionObject.Title}>
        <Subsection heading="1.7.1">
            <Paragraph content={sectionObject[".1"].p} />
        </Subsection>
        <Subsection heading="1.7.2">
            <Paragraph content={sectionObject[".2"].p} />
        </Subsection>
        <Subsection heading="1.7.3">
            <Paragraph content={sectionObject[".3"].p} />
            <MascFemTable title={sectionObject[".3"].Table1J.Title}
                tableKeyProps={{ id: "1J", label: sectionObject[".3"].Table1J.Title }}
                samples={[
                    ["ag an fhear mhaith", "ag an chuideachta bheag"],
                    ["ar an bhosca dhearg", "ar an bhean shaibhir"],
                    ["as an ghleann mhór", "as an pháirc chéanna"],
                    ["chuig an Choimisinéir choinsiasach", "chuig an bhean ghairmiúil"],
                    ["den chrann chaol", "den bhean fhlaithiúil"],
                    ["don fhear throm", "don chuideachta ghnóthach"],
                    ["fairis an gharda bhéasach", "fairis an bhean chairdiúil"],
                    ["faoin fhógra phráinneach", "faoin ghrian bhreá"],
                    [["sa bhosca bhuí",
                        "sa fhraoch bhán",
                        "",
                        sectionObject[".3"].Table1J.note,
                        "san fhéar fhliuch"],
                    ["sa chomhairle shóisialta",
                        "sa fhrithréabhlóid fhíochmhar",
                        "",
                        sectionObject[".3"].Table1J.note,
                        "san fharraige ghlan"]],
                    ["leis an fhasach chruinn", "leis an bháisteach throm"],
                    ["ón chaisleán fhuar", "ón chathair mhór"],
                    ["roimh an chruinniú thábhachtach", "roimh an bhainis bheag"],
                    ["thar an chnoc bhán", "thar an fharraige chiúin"],
                    ["tríd an ghairdín bhreá", "tríd an fhuinneog ghorm"],
                    ["um an Bhille fhada", "um an ghníomhaireacht reachtúil"],
                ]} />
        </Subsection>
        <Subsection heading="1.7.4">
            <Paragraph content={sectionObject[".4"].p} />
            <MascFemTable title={sectionObject[".4"].Table1K.title}
                tableKeyProps={{ id: "1K", label: sectionObject[".4"].Table1K.title }}
                subheadings={[sectionObject[".4"].Table1K.subheading]}
                samples={[
                    ["ag an tSeapánach chliste", "ag an tseanmháthair bhocht"],
                    ["ar an tsuíochán fhliuch", "ar an tsráid ghlan"],
                    ["as an tsailéad bhlasta", "as an tsaoire bhliantúil"],
                    ["chuig an tSeanadóir nuacheaptha", "chuig an tsatailít mhór"],
                    ["den tsaighdiúir shásúil", "den tslándáil shóisialach"],
                    ["don tSeanadóir nua", "don tsaoirse cheart"],
                    ["fairis an tsaineolaí lách", "fairis an tseanbhean shaibhir"],
                    ["faoin tsonrasc dhéanach", "faoin tslí dhíreach"],
                    ["sa tsoitheach ghorm", "sa tseacláid mhilis"],
                    ["leis an tsalann bhán", "leis an tslat fhada"],
                    ["ón tsuirbhé phearsanta", "ón scoil bheag"],
                    ["roimh an tsamhradh fhada", "roimh an tseachtain mhór"],
                    ["thar an tseol mhór", "thar an tSionainn fhada"],
                    ["tríd an tsorcas mhór", "tríd an tseift chliste"],
                    ["um an tsainchomhairleoir chruinn", "um an tseirbhís mhaith"]
                ]} />
        </Subsection>
        <Subsection heading="1.7.5">
            <Paragraph content={sectionObject[".5"].text} />
            <MascFemTable title={sectionObject[".5"].Table1L.Title}
                tableKeyProps={{ id: "1L", label: sectionObject[".5"].Table1L.Title }}
                samples={[
                    ["ag an Albanach chiallmhar", "ag an aeráid ghaofar"],
                    ["ar an eitleán dhubh", "ar an olann bhán"],
                    ["as an uisce ghlan", "as an iris cháiliúil"],
                    ["chuig an Aire ilteangach", "chuig an Ostair shléibhtiúil"],
                    ["den alt fhada", "den uimhir chruinn"],
                    ["don údarás chéanna", "don obair chrua"],
                    ["fairis an oifigeach mhúinte", "fairis an ógbhean chliste"],
                ]} />
        </Subsection>
        <Subsection heading="1.7.6">
            <Paragraph content={sectionObject[".6"].text} />
            <MascFemTable title={sectionObject[".6"].Table1M.Title}
                tableKeyProps={{ id: "1L", label: sectionObject[".6"].Table1M.Title }}
                samples={[
                    ["faoin dréimire bhriste", "faoin deacracht bhreise"],
                    ["sa teas mhór", "sa deoch fhuar"],
                    ["leis an duine chiúin", "leis an taithí mhaith"],
                    ["ón deartháir chineálta", "ón teanga líofa"],
                    ["roimh an tarbh fhiáin", "roimh an deighilt mhór"],
                    ["thar an teach ghorm", "thar an diallait nua"],
                    ["tríd an talamh chrua", "tríd an drochaimsir ghránna"],
                    ["um an dlí choiriúil", "um an tagairt chuí"],
                ]} />
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
            <Section6 key="ch1.6" />,
            <Section7 key="ch1.7" />,
        ]} />;
}