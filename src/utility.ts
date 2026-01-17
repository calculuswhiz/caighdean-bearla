import type { LanguageSelection } from "./translate";

export function joinIfPossible<T extends string>(a: Multipliable<T>): string {
  if (Array.isArray(a))
    return a.join(" ");
  else
    return a;
}

export function processAdocFileContents(contents: string, language: LanguageSelection) {
  const lines = contents.split('\n');
  const outputBuffer = new Array<string>;

  let inBlockComment = false;

  // Line-by-line is easier and faster than global regex.
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('////')) {
      inBlockComment = !inBlockComment;
      continue;
    } else if (inBlockComment)
      continue;
    else if (trimmed.startsWith('//'))
      continue;

    const langSelect = trimmed.replace(new RegExp(`_${language}:`), ':');
    // Default behavior is "pass" as a lot of our text is marked up.
    // Allow cancelling "pass" by prefixing id with `nopass-`
    if (langSelect.startsWith(":nopass-") || langSelect === '') {
      outputBuffer.push(langSelect.replace('nopass-', ''));
    } else {
      const stage1 = langSelect
        .replace(/^:(.+?): (.*?)$/, ":$1: pass:q[$2");
      const stage2 = stage1.endsWith(" + \\") ? stage1 : `${stage1}]`;
      outputBuffer.push(stage2);
    }
  }

  return outputBuffer.join("\n");
}
