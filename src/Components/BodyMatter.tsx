import React from "react";
import { translateText, translateTextMarkup, type LanguageSelection, type Translation } from "../translate";

export function LanguageSelector(props: {
    selection: LanguageSelection;
    position: 'left' | 'right';
    onClick: React.MouseEventHandler;
}) {
    return <div>
        <div className={`ml-1 cursor-pointer text-sm select-none ${props.position === 'left' ? "float-left" : "float-right"} mt-1`}
            onClick={props.onClick}
            title="Click to toggle language">
            <span className={`${props.selection === 'en' ? "bg-blue-500 text-white" : ""} p-0.5`}>EN</span>
            <span className={`${props.selection === 'ga' ? "bg-emerald-500 text-white" : ""} p-0.5`}>GA</span>
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
        <h1 id={`chapter-${props.number}`} className="mb-2 text-2xl font-bold border-b-1 border-black">
            Chapter {props.number} | {translateText(props.title, langSelect)}
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
    title: string;
    content: string;
}) {
    return <>
        <h2 className="text-xl mb-2">{props.title}</h2>
        <p>{props.content}</p>
    </>;
}

/** This one is for matter like 1.1 */
export function ChapterSection(props: {
    title: Translation;
    /** E.g. 1.1 */
    sectionId: string;
    subsections: React.ReactElement<Parameters<typeof Subsection>>[];
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <>
        <h2 id={`section-${props.sectionId.replaceAll(".", "-")}`} className="text-xl mb-2 border-b-1 border-black">
            {props.sectionId} {translateText(props.title, langSelect)}
            <LanguageSelector
                selection={langSelect}
                onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
                position="right" />
        </h2>
        <section className="pl-2">
            {props.subsections}
        </section>
    </>;
}

/** Matter such as 1.1.1 */
export function Subsection(props: {
    heading: string;
    children?: React.ReactNode
}) {
    return <>
        <h3 className="text-lg">{props.heading}</h3>
        {props.children}
    </>;
}

export function Paragraph(props: {
    content: Translation;
}) {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);
    return <div className="border-y-1 border-gray-300 py-1 flex flex-row">
        <p className="pl-2">{
            translateTextMarkup(props.content, langSelect)
        }</p>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
    </div>;
}
