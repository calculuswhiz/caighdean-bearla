import React from "react";
import * as frontmatterText from "../../../translation/FrontMatter.json";
import { translateTextMarkup, type LanguageSelection } from "../../translate";
import { LanguageSelector } from "../BodyMatter";

export function Preface() {
    return <>Preface TBD</>;
}

export function Preface1stEdition() {
    return <>Preface to 1st Ed. TBD</>
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
                    <th className="bg-blue-900 text-white font-bold" colSpan={2}>
                        {translateTextMarkup(frontmatterText.grammar.tableTitle, langSelect)}
                    </th>
                </tr>
            </thead>
            <tbody>{
                frontmatterText.grammar.rowData.map(([l, r], i) => 
                    <tr key={i}>
                        <td className="bg-gray-100 p-1 border-1 border-white font-bold">{translateTextMarkup(l, langSelect)}</td>
                        <td className="bg-gray-100 p-1 border-1 border-white">{translateTextMarkup(r, langSelect)}</td>
                    </tr>
                )
            }</tbody>
        </table>
    </div>;
}

export function FrontMatter() {
    return <>
        <Preface />
        <Preface1stEdition />
        <GrammarNotes />
    </>;
}