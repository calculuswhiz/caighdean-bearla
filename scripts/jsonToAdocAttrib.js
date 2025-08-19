import fs from 'fs/promises';

(async () => {
    const text = await fs.readFile('./scripts/temp.txt', { encoding: 'utf-8' });
    for (const [k, v] of Object.entries(JSON.parse(`{${text.replace(/,$/, '')}}`))) {
        const newKey = k.replace(".", "-");
        const [ga, en] = [v.ga, v.en].map(x => Array.isArray(x) ? x.join(" + \\") : x);
        console.log(`:${newKey}_ga: ${ga.replace(/``/g, "*").replace(/`/g, '_')}`);
        console.log(`:${newKey}_en: ${en.replace(/``/g, "*").replace(/`/g, '_')}`);
        console.log();
    }
})();
