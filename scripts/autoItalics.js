import { readFile } from 'fs/promises';

try {
    const filePath = 'scripts/temp.txt';
    const fileContent = await readFile(filePath, 'utf8');
    
    console.log(fileContent.replaceAll(/([,;]) (.*?)(?=[;.]|$)/g, "$1 _$2_"));
} catch (error) {
    console.error('Error reading file:', error.message);
}