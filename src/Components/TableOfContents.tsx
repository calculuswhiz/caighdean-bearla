import { useEffect, useState } from "react";

function List(props: {
    structure: Multipliable<{ id: string, label: string; }>[]
}) {
    return <ol className="list-inside pl-2 list-disc">{
        props.structure.map((ent, i) =>
            Array.isArray(ent)
                ? <List key={i} structure={ent} />
                : <li key={i}>
                    <a className="text-blue-500" href={`#${ent.id}`}>{ent.label}</a>
                </li>
        )
    }</ol>;
}

export function TableOfContents(props: {
    currentChapter: number;
}) {
    const [structure, setStructure] = useState([] as Multipliable<{ id: string, label: string; }>[]);
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const headings = document.querySelectorAll<HTMLHeadElement>('h1, h2');
        const newStruct: Multipliable<{ id: string, label: string; }>[] = [];
        let headerState = 1;
        const pushTargetStack = [newStruct];
        for (const hTag of headings) {
            if ((hTag.id ?? "") === "")
                continue;
            const hNum = +hTag.tagName.slice(1);
            const entryObject = {
                id: hTag.id,
                label: hTag.textContent ?? "Missing text"
            };
            if (hNum > headerState) {
                const entry: typeof newStruct[number] = [entryObject];
                newStruct.push(entry);
                pushTargetStack.push(entry);
                headerState = hNum;
            } else if (hNum === headerState) {
                pushTargetStack.at(-1)?.push(entryObject);
            } else {
                pushTargetStack.pop();
                pushTargetStack.at(-1)?.push(entryObject);
            }
        }
        setStructure(newStruct);
    }, [props.currentChapter]);

    return <div className="bg-gray-100 p-2">
        <div>
            Table of Contents: {
                <span
                    onClick={() => setExpanded(!expanded)}
                    className="cursor-pointer text-blue-300 select-none">
                    [{expanded ? "-" : "+"}]
                </span>
            }
        </div>
        {expanded && <List structure={structure} />}
    </div>;
}