import fs from 'fs/promises';
// Flatten the json file

(async () => {
    const text = await fs.readFile('./scripts/temp.txt', { encoding: 'utf-8' });
    const root = JSON.parse(text);

    function flattenObject(obj, parentKey = '', separator = '.') {
        let result = {};

        for (const [key, value] of Object.entries(obj)) {
            const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

            if (value && typeof value === 'object' && !Array.isArray(value)) {
                Object.assign(result, flattenObject(value, newKey, separator));
            } else {
                result[newKey] = value;
            }
        }

        return result;
    }

    console.log(JSON.stringify(flattenObject(root)));
})();
