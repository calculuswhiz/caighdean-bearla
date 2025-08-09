import React from "react";
import * as frontmatterText from "../../../translation/FrontMatter.json";
import { translateTextMarkup, type LanguageSelection } from "../../translate";
import { LanguageSelector } from "../BodyMatter";

export function Preface() {
    return <div>Preface TBD</div>;
}

export function AdvisoryCommittee() {
    return <div>Members of the Advisory Committee TBD</div>;
}

export function Preface1stEdition() {
    return <div>Preface to 1st Ed. TBD</div>
}

export function GrammarNotes() {
    const [langSelect, setLangSelect] = React.useState('en' as LanguageSelection);

    return <div>
        <LanguageSelector
            selection={langSelect}
            onClick={() => setLangSelect(langSelect === 'en' ? 'ga' : 'en')}
            position="right" />
        <table className="w-[100%]">
            <thead>
                <tr>
                    <th className="bg-blue-900 text-white" colSpan={2}>
                        {translateTextMarkup(frontmatterText.grammar.tableTitle, langSelect)}
                    </th>
                </tr>
            </thead>
            <tbody>{
                frontmatterText.grammar.rowData.map(([l, r], i) => 
                    <tr key={i}>
                        <td className="bg-gray-200 p-1 font-bold align-top">{translateTextMarkup(l, langSelect)}</td>
                        <td className="bg-gray-200 p-1">{translateTextMarkup(r, langSelect)}</td>
                    </tr>
                )
            }</tbody>
        </table>
    </div>;
}

export function FrontMatter() {
    return <>
        <Preface />
        <AdvisoryCommittee />
        <Preface1stEdition />
        <GrammarNotes />
    </>;
}