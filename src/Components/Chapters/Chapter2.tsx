import { AlphaList, Chapter, ChapterSection, LanguageSelector, ListItem, Notes, Paragraph, Subsection } from "../BodyMatter";
import chapter2Text from "../../../translation/Chapter2.json";
import commonText from "../../../translation/Common.json";
import { Caption, TableStack } from "../TableHelpers";
import { joinIfPossible } from "../../utility";
import { joinTranslations, makeUniversal, translateText, translateTextMarkup, type LanguageSelection, type Translation } from "../../translate";
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

function Table2ATemplate(props: {
    id: string;
    title: Translation;
    tableData: string[][][];
    declensionOffset: number;
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);
    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <table className="p-2 w-[100%] text-center chapter-2">
            <Caption
                id={joinIfPossible(`${translateText(commonText.Table, langSelect)} ${props.id}`)}
                content={translateTextMarkup(props.title, langSelect)}
            />
            <thead>
                <tr>
                    <th className="p-2 uppercase" rowSpan={2}>
                        {translateTextMarkup(chapter2Text.Table2A.CornerHeading, langSelect)}
                    </th>
                    <th className="p-2 uppercase" colSpan={2}>
                        {translateTextMarkup(commonText.Singular, langSelect)}
                    </th>
                    <th className="p-2 uppercase" colSpan={2}>
                        {translateTextMarkup(commonText.Plural, langSelect)}
                    </th>
                </tr>
                <tr>
                    <th className=" p-2">
                        {translateTextMarkup(commonText.Nominative, langSelect)}
                    </th>
                    <th className="p-2">
                        {translateTextMarkup(commonText.Genitive, langSelect)}
                    </th>
                    <th className="p-2">
                        {translateTextMarkup(commonText.Nominative, langSelect)}
                    </th>
                    <th className="p-2">
                        {translateTextMarkup(commonText.Genitive, langSelect)}
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.tableData.map((bigRow, rowBigI) =>
                    <React.Fragment key={rowBigI}>
                        <tr>
                            <th rowSpan={bigRow.length} className="p-2 bg-gray-300 text-black">
                                {translateTextMarkup(declensionTranslations[rowBigI + props.declensionOffset], langSelect)}
                            </th>
                            {
                                bigRow[0].map((ent, i) => <td key={i} className="p-2 bg-gray-200">
                                    {ent}
                                </td>)
                            }
                        </tr>
                        {
                            bigRow[1] != null &&
                            <tr>
                                {bigRow[1].map((ent, i) => <td key={i} className="p-2 bg-gray-200">
                                    {ent}
                                </td>)}
                            </tr>
                        }
                    </React.Fragment>)}
            </tbody>
        </table>
    </div>;
}

function Table2A() {
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

    return <Table2ATemplate
        id="2A"
        title={chapter2Text.Table2A.Title}
        tableData={tableData}
        declensionOffset={0} />;
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
        <table className="text-center chapter-2">
            <Caption
                id={joinIfPossible(translateText(commonText.Table, langSelect) + " " + props.caption.id)}
                content={translateTextMarkup(props.caption.content, langSelect)} />
            <thead>
                <tr>
                    <th colSpan={3} className="capitalize p-2">
                        {translateTextMarkup(props.title, langSelect)}
                    </th>
                </tr>
                <tr>
                    <th className="bg-orange-500 capitalize p-2"></th>
                    <th className="capitalize p-2">
                        {translateTextMarkup(commonText.Nominative, langSelect)}
                    </th>
                    <th className="capitalize p-2">
                        {translateTextMarkup(commonText.Genitive, langSelect)}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="bg-orange-500 text-white capitalize p-2">
                        {translateTextMarkup(commonText.Singular, langSelect)}
                    </th>
                    <td className="bg-gray-300 p-2">{props.data[0][0]}</td>
                    <td className="bg-gray-200 p-2">{props.data[0][1]}</td>
                </tr>
                <tr>
                    <th className="bg-orange-500 text-white capitalize p-2">
                        {translateTextMarkup(commonText.Singular, langSelect)}
                    </th>
                    <td className="bg-gray-200 p-2">{props.data[1][0]}</td>
                    <td className="bg-gray-300 p-2">{props.data[1][1]}</td>
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

function Table2D() {
    const tableData = [
        [["ealaín", "ealaíne", "ealaíona", "ealaíon"],
        ["súil", "súile", "súile", "súl"]],
        [["mionn", "mionna", "mionnaí", "mionn"]],
        [["bó", "bó", "ba", "bó"],
        ["grásta", "grásta", "grásta", "grást"]],
        [["caora", "caorach", "caoirigh", "caorach"],
        ["lacha", "lachan", "lachain", "lachan"]],
        [["bean", "mná", "mná", "ban"],
        ["olann", "olla", "olanna", "olann"]],
    ];

    return <Table2ATemplate
        id="2D"
        title={chapter2Text.Table2D.title}
        tableData={tableData}
        // Starts on 2nd declension
        declensionOffset={1} />;
}

function Table2E() {
    const tableObject = chapter2Text.Table2E;
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    const colGroupFactory = () => <colgroup>
        <col span={1} className="w-40" />
        <col span={2} className="w-50" />
        <col span={2} className="w-50" />
    </colgroup>;

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <TableStack
            caption={{
                id: `${translateText(commonText.Table, langSelect)} 2E`,
                content: translateTextMarkup(chapter2Text["2.1"][".8"].title, langSelect)
            }}
            tables={[
                <table key={"d-1"} className="w-[100%] chapter-2">
                    {/* Each table should have 5 columns of width, same dimensions. */}
                    {colGroupFactory()}
                    <thead>
                        <tr>
                            <th colSpan={5}>{translateTextMarkup(declensionTranslations[0], langSelect)}</th>
                        </tr>
                        <tr>
                            <th>{translateTextMarkup(commonText.Gender, langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Plural), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Plural), langSelect)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>{translateTextMarkup(tableObject.data[0][0], langSelect)}</td>
                            <td rowSpan={2}>{translateTextMarkup(tableObject.data[0][1], langSelect)}</td>
                            <td rowSpan={2}>{translateTextMarkup(tableObject.data[0][2], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[0][3], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[0][4], langSelect)}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>{translateTextMarkup(tableObject.data[0][4], langSelect)}</td>
                        </tr>
                    </tbody>
                </table>,
                <table key={"d-2"} className="w-[100%] chapter-2">
                    {colGroupFactory()}

                    <thead>
                        <tr>
                            <th colSpan={5}>{translateTextMarkup(declensionTranslations[1], langSelect)}</th>

                        </tr>
                        <tr>
                            <th>{translateTextMarkup(commonText.Gender, langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Plural), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Plural), langSelect)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>{translateTextMarkup(tableObject.data[1][0], langSelect)}</td>
                            <td rowSpan={2}>{translateTextMarkup(tableObject.data[1][1], langSelect)}</td>
                            <td rowSpan={2}>{translateTextMarkup(tableObject.data[1][2], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[1][3], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[1][4], langSelect)}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>{translateTextMarkup(tableObject.data[1][4], langSelect)}</td>
                        </tr>
                    </tbody>
                </table>,
                <table key={"d-3"} className="w-[100%] chapter-2">
                    {colGroupFactory()}

                    <thead>
                        <tr>
                            <th colSpan={5}>{translateTextMarkup(declensionTranslations[2], langSelect)}</th>
                        </tr>
                        <tr>
                            <th>{translateTextMarkup(commonText.Gender, langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Plural), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Plural), langSelect)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{translateTextMarkup(tableObject.data[2][0], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[2][1], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[2][2], langSelect)}</td>
                            <td colSpan={2}>{translateTextMarkup(tableObject.data[2][3], langSelect)}</td>
                        </tr>
                    </tbody>
                </table>,
                <table key={"d-4"} className="w-[100%] chapter-2">
                    {colGroupFactory()}

                    <thead>
                        <tr>
                            <th colSpan={5}>{translateTextMarkup(declensionTranslations[3], langSelect)}</th>
                        </tr>
                        <tr>
                            <th>{translateTextMarkup(commonText.Gender, langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Singular), langSelect)}</th>
                            <th colSpan={2}>{translateTextMarkup(
                                joinTranslations(" ", commonText.EveryCase, makeUniversal("—"), commonText.Plural),
                                langSelect)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{translateTextMarkup(tableObject.data[3][0], langSelect)}</td>
                            <td colSpan={2}>{translateTextMarkup(tableObject.data[3][1], langSelect)}</td>
                            <td colSpan={2}>{translateTextMarkup(tableObject.data[3][2], langSelect)}</td>
                        </tr>
                    </tbody>
                </table>,
                <table key={"d-5"} className="w-[100%] chapter-2">
                    {colGroupFactory()}

                    <thead>
                        <tr>
                            <th colSpan={5}>{translateTextMarkup(declensionTranslations[4], langSelect)}</th>
                        </tr>
                        <tr>
                            <th>{translateTextMarkup(commonText.Gender, langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Nominative, commonText.Singular), langSelect)}</th>
                            <th>{translateTextMarkup(joinTranslations(" ", commonText.Genitive, commonText.Singular), langSelect)}</th>
                            <th colSpan={2}>{translateTextMarkup(
                                joinTranslations(" ", commonText.EveryCase, makeUniversal("—"), commonText.Plural),
                                langSelect)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{translateTextMarkup(tableObject.data[4][0], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[4][1], langSelect)}</td>
                            <td>{translateTextMarkup(tableObject.data[4][2], langSelect)}</td>
                            <td colSpan={2}>{translateTextMarkup(tableObject.data[4][2], langSelect)}</td>
                        </tr>
                    </tbody>
                </table>,
            ]} />
    </div>;
}

function Table2FTemplate(props: {
    id: string;
    title: Translation;
    col1Data: (Multipliable<Translation>)[];
    // Row, col, list item
    tableData: (string | Translation<string>)[][][];
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    const hasDifferentGenPlural = props.tableData[0].length === 4;

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <table className="w-[100%] chapter-2">
            <Caption
                id={joinIfPossible(`${translateText(commonText.Table, langSelect)} ${props.id}`)}
                content={translateTextMarkup(props.title, langSelect)}
            />
            <colgroup>
                <col className="w-15"></col>
                <col span={2} className="w-8"></col>
                <col span={2} className="w-8"></col>
            </colgroup>
            <thead>
                <tr>
                    <th className="text-center" rowSpan={2}>{translateTextMarkup(chapter2Text.Table2F.CornerHeading, langSelect)}</th>
                    <th className="text-center" colSpan={2}>{translateTextMarkup(commonText.Singular, langSelect)}</th>
                    <th className="text-center" colSpan={hasDifferentGenPlural ? 2 : 1}>{
                        translateTextMarkup(commonText.Plural, langSelect)
                    }</th>
                </tr>
                <tr>
                    <th className="text-center">{translateTextMarkup(commonText.Nominative, langSelect)}</th>
                    <th className="text-center">{translateTextMarkup(commonText.Genitive, langSelect)}</th>
                    {hasDifferentGenPlural
                        ? <>
                            <th className="text-center">{translateTextMarkup(commonText.Nominative, langSelect)}</th>
                            <th className="text-center">{translateTextMarkup(commonText.Genitive, langSelect)}</th>
                        </>
                        : <th className="text-center">{translateTextMarkup(commonText.EveryCase, langSelect)}</th>
                    }
                </tr>
            </thead>
            <tbody>
                {props.col1Data.map((data, rowIdx) =>
                    <tr key={rowIdx}>
                        <td className="bg-gray-300 px-2">{
                            Array.isArray(data)
                                ? translateTextMarkup(joinTranslations("  \n", ...data), langSelect)
                                : translateTextMarkup(data, langSelect)
                        }</td>
                        {
                            props.tableData[rowIdx].map((col, colIdx) =>
                                <td key={colIdx}>
                                    <ul>{
                                        col.map((item, itemIdx) => <li key={itemIdx}>{
                                            typeof item === 'string'
                                                ? item
                                                : translateTextMarkup(item, langSelect)
                                        }</li>)
                                    }</ul>
                                </td>
                            )
                        }
                    </tr>
                )}
            </tbody>
        </table>
    </div>;

}

function Table2F() {
    return <Table2FTemplate
        id="2F"
        title={chapter2Text.Table2F.Title}
        col1Data={chapter2Text.Table2F.Col1Data}
        tableData={[
            [
                ["braon", "fál", "glór", "líon", "pór", "tuar"],
                ["braoin", "fáil", "glóir", "lín", "póir", "tuair"],
                ["braonta", "fálta", "glórtha", "líonta", "pórtha", "tuartha"]
            ],
            [
                ["árthach", "cladach", "cúram", "daichead", "margadh"],
                ["árthaigh", "cladaigh", "cúraim", "daichid", "margaidh"],
                ["árthaí", { ga: "cladaí (`gin. iol.` cladach)", en: "cladaí (`g.sg.` cladach)" }, "cúraimí", "daichidí", "margaí"],
            ],
            [
                ["aonach", "dearcadh", "toradh"],
                ["aonaigh", "dearcaidh", "toraidh"],
                ["aontaí", "dearcthaí", "torthaí"],
            ],
            [
                ["cás", "praghas", "saghas"],
                ["cáis", "praghais", "saghais"],
                ["cásanna", "praghsanna", "saghsanna"],
            ],
            [
                ["bóthar", "doras", "uasal"],
                ["bóthair", "dorais", "uasail"],
                ["bóithre", "doirse", "uaisle"],
            ],
            [
                ["cineál", "coinníoll", "tobar"],
                ["cineáil", "coinníll", "tobair"],
                ["cineálacha", "coinníollacha", "toibreacha"],
            ],
            [
                ["claíomh", "muileann", "smaoineamh"],
                ["claímh", "muilinn", "smaoinimh"],
                ["claimhte", "muilte", "smaointe"],
            ],
            [
                ["breitheamh", "briathar", "gníomh", "scaitheamh"],
                ["breithimh", "briathair", "gnímh", "scaithimh"],
                ["breithiúna", "briathra", "gníomhartha", "scaití"],
            ]
        ]} />
}

function Table2G() {
    return <Table2FTemplate
        id="2G"
        title={chapter2Text.Table2G.Title}
        col1Data={chapter2Text.Table2G.Col1Data}
        tableData={[
            [
                ["amhrán", "beithíoch", "foirgneamh", "iasc"],
                ["amhráin", "beithígh", "foirgnimh", "éisc"],
                ["amhráin", "beithígh", "foirgnimh", "éisc"],
                ["amhrán", "beithíoch", "foirgneamh", "iasc"],
            ],
            [
                ["bruach", "ceap", "giall", "úll"],
                ["bruaigh", "cip", "géill", "úill"],
                ["bruacha", "ceapa", "gialla", "úlla"],
                ["bruach", "ceap", "giall", "úll"],
            ]
        ]} />
}

function Section1() {
    const sectionObject = chapter2Text["2.1"];
    return <ChapterSection sectionId="2.1" title={commonText.General}>
        <Subsection heading="2.1.1" title={sectionObject[".1"].title}>
            <Paragraph content={sectionObject[".1"].p1} />
        </Subsection>
        <Subsection heading="2.1.2" title={sectionObject[".2"].title}>
            <AlphaList>
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
            </AlphaList>
        </Subsection>
        <Subsection heading="2.1.3" title={sectionObject[".3"].title}>
            <Paragraph content={sectionObject[".3"].p1} />
            <AlphaList>
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
                            <Table2D />
                        </ListItem>
                    </ol>
                </ListItem>
            </AlphaList>
        </Subsection>
        <Subsection heading="2.1.4" title={sectionObject[".4"].title}>
            <Paragraph content={sectionObject[".4"].p1} />
            <Paragraph content={sectionObject[".4"].p2} />
            <AlphaList>
                <ListItem><Paragraph content={sectionObject[".4"][".a"].p} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".4"][".b"].p1} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".4"][".c"].p1} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".4"][".d"].p1} /></ListItem>
            </AlphaList>
        </Subsection>
        <Subsection heading="2.1.5" title={sectionObject[".5"].title}>
            <Paragraph content={sectionObject[".5"].p1} />
            <Paragraph content={sectionObject[".5"].p2} />
            <AlphaList>
                <ListItem><Paragraph content={sectionObject[".5"][".a"]} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".5"][".b"]} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".5"][".c"]} /></ListItem>
            </AlphaList>
        </Subsection>
        <Subsection heading="2.1.6" title={sectionObject[".6"].title}>
            <Paragraph content={sectionObject[".6"].p} />
        </Subsection>
        <Subsection heading="2.1.7" title={sectionObject[".7"].title}>
            <Paragraph content={sectionObject[".7"].p1} />
            <AlphaList>
                <ListItem><Paragraph content={sectionObject[".7"][".a"]} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".7"][".b"]} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".7"][".c"]} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".7"][".d"]} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".7"][".e"]} /></ListItem>
                <ListItem><Paragraph content={sectionObject[".7"][".f"]} /></ListItem>
            </AlphaList>
            <Notes>
                <ul className="list-inside pl-1 list-disc">
                    {sectionObject[".7"].notes.map((n, i) =>
                        <ListItem key={i}><Paragraph content={n} /></ListItem>
                    )}
                </ul>
            </Notes>
        </Subsection>
        <Subsection heading="2.1.8" title={sectionObject[".8"].title}>
            <Table2E />
            <Notes>
                <Paragraph content={sectionObject[".8"].notes} />
            </Notes>
        </Subsection>
    </ChapterSection>;
}

function Section2() {
    const sectionObject = chapter2Text["2.2"];

    return <ChapterSection sectionId="2.2"
        title={sectionObject.title}>
        <Subsection heading="2.2.1" title={sectionObject[".1"].title}>
            <Paragraph content={sectionObject[".1"].p} />
        </Subsection>
        <Subsection heading="2.2.2" title={sectionObject[".2"].title}>
            <AlphaList>
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".a"]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".b"]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".c"]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".2"][".d"]} />
                </ListItem>
            </AlphaList>
        </Subsection>
        <Subsection heading="2.2.3" title={sectionObject[".3"].title}>
            <AlphaList>
                <ListItem>
                    <Paragraph content={sectionObject[".3"][".a"]} />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".3"][".b"].p} />
                    <ol className="list-inside list-[lower-roman]">
                        <ListItem>
                            <Paragraph content={sectionObject[".3"][".b"][".i"]} />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".3"][".b"][".ii"]} />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".3"][".b"][".iii"]} />
                        </ListItem>
                        <ListItem>
                            <Paragraph content={sectionObject[".3"][".b"][".iv"]} />
                        </ListItem>
                    </ol>
                </ListItem>
            </AlphaList>
        </Subsection>
        <Subsection heading="2.2.4" title={sectionObject[".4"].title}>
            <Paragraph content={sectionObject[".4"].p1} />
            <Paragraph content={sectionObject[".4"].p2} />
            <AlphaList>
                <ListItem>
                    <Paragraph content={sectionObject[".4"][".a"]} />
                    <Table2F />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".4"][".b"]} />
                    <Table2G />
                </ListItem>
                <ListItem>
                    <Paragraph content={sectionObject[".4"][".c"].title} />
                    <Paragraph content={sectionObject[".4"][".c"].p1} />
                </ListItem>
            </AlphaList>
        </Subsection>
    </ChapterSection>;
}

export default function Chapter2() {
    return <Chapter
        number={2}
        title={chapter2Text.Title}
        sections={[
            <Section1 key="ch2.1" />,
            <Section2 key="ch2.2" />
        ]} />;
}