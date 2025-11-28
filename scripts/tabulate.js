import { readFile } from 'fs/promises';

try {
    const filePath = 'scripts/temp.txt';
    const fileContent = await readFile(filePath, 'utf8');
    const lines = fileContent.split("\n");

    for (const line of lines) {
        const words = line.split(' ').map(x => `<td>${x}</td>`);
        console.log(`<tr>${words.join("")}</tr>`);
    }
} catch (error) {
    console.error('Error reading file:', error.message);
}