/** The little gray boxes that appear as examples. This is a translation project, 
 * so of course, we will need corresponding translations for each sample text. */
export default function SampleBox(props: {
    samples: {
        /** Gaeilge source */
        ga: string;
        /** English translation */
        en: string;
    }[]
}) {
    return <div className="bg-gray-300 py-1 px-3">
        <table className="border-collapse">
            <thead>
                <tr>
                    <th className="font-bold border-1 border-black">GA</th>
                    <th className="font-bold border-1 border-black">EN</th>
                </tr>
            </thead>
            <tbody>{
                props.samples.map(s =>
                    <tr>
                        <td className="border-1 border-black">{s.ga}</td>
                        <td className="border-1 border-black">{
                            (s.en ?? "") === ""
                            ? <span className="text-red-500 italic">Missing Translation</span>
                            : s.en
                        }</td>
                    </tr>
                )
            }</tbody>
        </table>
    </div>
}