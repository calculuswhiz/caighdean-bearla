export function Caption(props: {
    /** Table label (e.g. "Table 1A") */
    id: string;
    /** Table caption content */
    content: React.ReactElement;
}) {
    return <caption className="caption-bottom">
        <span className="font-bold mr-4 inline">{props.id}</span>
        {props.content}
    </caption>;
}

/** A stack of 2 or more tables into one super-table */
export function TableStack(props: {
    title?: React.ReactElement<HTMLDataElement>;
    caption: {
        /** Table label (e.g. "Table 1A") */
        id: string;
        /** Table caption content */
        content: React.ReactElement;
    };
    tables: React.ReactElement<HTMLTableElement>[];
}) {
    if (props.tables.length < 2)
        console.warn("Are you sure you want to group fewer than 2 tables?");

    return <table className="max-w-[100%] overflow-x-auto">
        <Caption id={props.caption.id} content={props.caption.content} />
        {
            props.title != null &&
            <thead>
                <tr>
                    {props.title}
                </tr>
            </thead>
        }
        <tbody>{
            props.tables.map((subTable, i) =>
                <tr key={i}><td>{subTable}</td></tr>
            )
        }</tbody>
    </table>;
}