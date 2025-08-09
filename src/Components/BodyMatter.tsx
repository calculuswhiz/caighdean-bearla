import React from "react";
import { translateText, translateTextMarkup, type LanguageSelection, type Translation } from "../translate";

export function LanguageSelector(props: {
    selection: LanguageSelection;
    position: 'left' | 'right';
    onClick: React.MouseEventHandler;
}) {
    return <div className={`${props.position === 'left' ? "float-left border-r-1" : "float-right border-l-1"} border-dotted mx-1`}>
        <div className={`ml-1 cursor-pointer text-xs select-none mt-1`}
            onClick={props.onClick}
            title="Click to toggle language">
            <span className={`${props.selection === 'en' ? "bg-blue-300 text-white" : ""} p-0.5`}>EN</span>
            <span className={`${props.selection === 'ga' ? "bg-emerald-300 text-white" : ""} p-0.5`}>GA</span>
        </div>
    </div>;
}

export function Chapter(props: {
    /** "Caibidil" is trivial to translate. No need to repeat. */
    number: number;
    /** Title (e.g. The Article/An tAlt) */
    title: Translation;
    sections: (React.ReactElement<Parameters<typeof ChapterSection | typeof SectionGroupHeader>>)[];
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);
    return <article className="pl-1">
        <h1 id={`section-${props.number}`} className={`mb-2 text-2xl font-bold border-b-1 border-black section-${props.number}`}>
            <span>{langSelect === 'en' ? "CHAPTER" : "CAIBIDIL"} {props.number} | {translateText(props.title, langSelect)}</span>
            <LanguageSelector
                selection={langSelect}
                onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
                position="right" />
        </h1>
        {props.sections}
    </article>;
}

/** For secitons like Na Tuisil (The Cases) which have no numbered section,
 * but group sections together. Seem to only be two of them, but should probably
 * be its own case unless we find a better way to handle it.
 */
export function SectionGroupHeader(props: {
    title: Translation;
    content: Translation;
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);
    return <>
        <h2 className="text-xl mb-2 border-b-1 border-black">
            <span>{translateText(props.title, langSelect)}</span>
            <LanguageSelector
                selection={langSelect}
                onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
                position="right" />
        </h2>
        <p className="pl-2 mb-10 pb-10 border-b-3 border-gray-500">
            {translateText(props.content, langSelect)}
        </p>
    </>;
}

/** This one is for matter like 1.1 */
export function ChapterSection(props: {
    title: Translation;
    /** E.g. 1.1 */
    sectionId: string;
    children?: React.ReactNode;
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <>
        <h2 id={`section-${props.sectionId.replaceAll(".", "-")}`} className="text-xl mb-2 border-b-1 border-black">
            <span>{props.sectionId} {translateText(props.title, langSelect)}</span>
            <LanguageSelector
                selection={langSelect}
                onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
                position="right" />
        </h2>
        <section className="pl-2 mb-10 pb-10 border-b-3 border-gray-500">
            {props.children}
        </section>
    </>;
}

/** Matter such as 1.1.1 */
export function Subsection(props: {
    heading: string;
    title?: Translation;
    children?: React.ReactNode
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <>
        <h3 className="text-lg" id={`section-${props.heading.replace(".", "-")}`}>
            {props.heading} {props.title != null ? translateText(props.title, langSelect) : null}
            {props.title != null && <LanguageSelector
                selection={langSelect}
                onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
                position="right" />}
        </h3>
        <div className="border-l-3 border-gray-300">
            {props.children}
        </div>
    </>;
}

export function Paragraph(props: {
    content: Translation;
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);
    return <div className="border-y-1 border-gray-100 py-1 flex flex-row">
        <p className="pl-2 grow-1">{
            translateTextMarkup(props.content, langSelect)
        }</p>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
    </div>;
}

/** Standard styled `li` element */
export function ListItem(props: {
    children?: React.ReactNode
}) {
    return <li className="border-l-3 border-gray-300 pl-2 mb-2 hover:border-orange-300">
        {props.children}
    </li>;
}

/** Caption-esque element. Reason it's not an actual caption is that the doc treats multiple tables as 1 table sometimes. */
export function TableKey(props: {
    language: LanguageSelection;
    /** e.g. 1A */
    tableId: string;
    label: React.ReactNode;
}) {
    return <div>
        <span className="font-bold mr-3">{props.language === 'en' ? "Table" : "Tábhla"} {props.tableId}</span>
        <span>{props.label}</span>
    </div>;
}

export function Footnote(props: {
    children: React.ReactNode;
}) {
    return <div className="text-sm pl-2 text-gray-600">{props.children}</div>
}
