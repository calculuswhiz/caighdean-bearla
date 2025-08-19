import fs from 'fs/promises';

(async () => {
    const text = await fs.readFile('./scripts/temp.txt', { encoding: 'utf-8' });
    
    console.log(`[.samplebox]
[cols="1,1"]
|===`);
    const parsed = JSON.parse(text);
    for (const [i, [a, b]] of parsed.entries()) {
        console.log(`| ${a.replace(/``/g, "*").replace(/`/g, "_")}`);
        console.log(`| ${b.replace(/``/g, "*").replace(/`/g, "_")}`);
        if (i < parsed.length - 1)
            console.log();
    }
    console.log('|===')
})();
