import { applyBasicMarkup } from "../translate";

/** The little gray boxes that appear as examples. This is a translation project, 
 * so of course, we will need corresponding translations for each sample text. */
export default function SampleBox(props: {
    samples: Nullable<string>[][]
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
                props.samples.map(([ga, en], i) =>
                    <tr key={i}>
                        {/* ga should never be null */}
                        <td className="p-1 border-1 border-black">{applyBasicMarkup(ga!)}</td>
                        <td className="p-1 border-1 border-black">{
                            en == null || en === ""
                                ? <span className="text-red-700 italic">Missing Translation</span>
                                : applyBasicMarkup(en)
                        }</td>
                    </tr>
                )
            }</tbody>
        </table>
    </div>
}