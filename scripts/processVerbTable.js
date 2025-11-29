import { readFile } from 'fs/promises';

const pronouns = ["mé", "tú", "sé/sí", "sibh", "siad"];
const indentLevel = 12;
const indentation = ' '.repeat(indentLevel);

try {
    const filePath = 'scripts/temp.txt';
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
        console.log(rowHtml.map(x => `${indentation}<tr>${x}</tr>`).join("\n"));
    } else {
        const rowHtml = [];
        const specials = {
            noun: null,
            adj: null
        };
        for (const [lineIdx, line] of lines.entries()) {
            /** Each entry is a td */
            const dataHtml = [];
            for (const [wordIdx, word] of line.split(' ').entries()) {
                if (word === "An")
                    break;
                else if (lineIdx === 1 && wordIdx === 5) {
                    specials.noun = word;
                    break;
                } else if (lineIdx === 4 && wordIdx === 6) {
                    specials.adj = word;
                    break;
                }

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
        console.log(rowHtml.map(x => `${indentation}<tr>${x}</tr>`).join("\n"));
        console.log("-----");
        console.log(`${indentation}  <td>${specials.noun}</td>`);
        console.log(`${indentation}  <td>${specials.adj}</td>`);
    }
} catch (error) {
    console.error('Error reading file:', error.message);
}