import { readFile } from 'fs/promises';

const pronouns = ["mé", "tú", "sé/sí", "sibh", "siad"];

try {
    const filePath = 'scripts/temp.txt'; // Replace with your file path
    const fileContent = await readFile(filePath, 'utf8');
    const lines = fileContent.split("\n");

    if (!lines[0].endsWith("An tAinm Briathartha")) {
        // First half
        /** Each entry is a tr */
        const rowHtml = [];
        for (const [lineIdx, line] of lines.entries()) {
            /** Each entry is a td */
            const dataHtml = [];
            for (const word of line.split(' ')) {
                if (word === 'sb.')
                    dataHtml.push("<em>{abbrev-autonomous}</em>");
                else if (pronouns.includes(word) || lineIdx === 6)
                    dataHtml[dataHtml.length - 1] += ` ${word}`;
                else
                    dataHtml.push(word);
            }
            rowHtml.push(dataHtml.map(d => `<td>${d}</td>`).join(""));
        }
        console.log(rowHtml.map(x => `<tr>${x}</tr>`).join("\n"));
    } else {
        const rowHtml = [];
        for (const [lineIdx, line] of lines.entries()) {
            /** Each entry is a td */
            const dataHtml = [];
            for (const [wordIdx, word] of line.split(' ').entries()) {
                if (word === "An"
                    || (lineIdx === 1 && wordIdx > 4)
                    || (lineIdx === 4 && wordIdx > 5))
                    break;

                if (word === 'sb.')
                    dataHtml.push("<em>{abbrev-autonomous}</em>");
                else if (word === "go") {
                    if (lineIdx < 6)
                        dataHtml.push("go");
                    else
                        dataHtml[dataHtml.length - 1] += ` ${word}`;
                } else if (pronouns.includes(word) || lineIdx === 6
                    || dataHtml.at(-1) === "go")
                    dataHtml[dataHtml.length - 1] += ` ${word}`;
                else
                    dataHtml.push(word);
            }
            rowHtml.push(dataHtml.map(d => `<td>${d}</td>`).join(""));
        }
        console.log(rowHtml.map(x => `<tr>${x}</tr>`).join("\n"));
    }
} catch (error) {
    console.error('Error reading file:', error.message);
}