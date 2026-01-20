import { readFile } from 'fs/promises';

// Turn "| words | words" into "| {sample_ga} | {sample}"

try {
  const filePath = 'scripts/temp.txt';
  const fileContent = await readFile(filePath, 'utf8');
  const lines = fileContent.split("\n");

  const attributeOutputBuffer = [];

  let prefix = '';

  for (const line of lines) {
    if (line.trim() === '')
      continue;

    const match = line.match(/{(.*)}/);
    if (match) {
      prefix = match[1];
    }
    else if (line.startsWith('| ')) {
      const [ga, en] = line.split('|')
        .map(s => s.trim())
        .filter(s => s.length > 0);

      attributeOutputBuffer.push([ga, en]);

      console.log(`| {${prefix}-sample${attributeOutputBuffer.length}_ga} | {${prefix}-sample${attributeOutputBuffer.length}}`);
    }
  }

  console.log();
  console.log('---');
  console.log();

  for (const [index, [ga, en]] of attributeOutputBuffer.entries()) {
    console.log(`:${prefix}-sample${index + 1}_ga: ${ga}`);
    console.log(`:${prefix}-sample${index + 1}_en: ${en}`);
    console.log();
  }
} catch (error) {
  console.error('Error reading file:', error.message);
}