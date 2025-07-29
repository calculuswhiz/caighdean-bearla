import { applyBasicMarkup } from "../translate";

/** The little gray boxes that appear as examples. This is a translation project, 
 * so of course, we will need corresponding translations for each sample text. */
export default function SampleBox(props: {
    samples: {
        /** Gaeilge source */
        ga: string;
        /** English translation */
        en: string | null;
    }[]
}) {
    return <div className="bg-gray-100 py-1 px-3">
        <table className="border-collapse">
            <thead>
                <tr>
                    <th className="p-1 font-bold border-1 border-black">GA</th>
                    <th className="p-1 font-bold border-1 border-black">EN</th>
                </tr>
            </thead>
            <tbody>{
                props.samples.map((s, i) =>
                    <tr key={i}>
                        <td className="p-1 border-1 border-black">{applyBasicMarkup(s.ga)}</td>
                        <td className="p-1 border-1 border-black">{
                            s.en == null || s.en === ""
                                ? <span className="text-red-700 italic">Missing Translation</span>
                                : applyBasicMarkup(s.en)
                        }</td>
                    </tr>
                )
            }</tbody>
        </table>
    </div>
}