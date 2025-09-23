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

/** Find the root table containing the table header */
function findParentRow(element: HTMLElement) {
  let current: Nullable<HTMLElement> = element;
  while (!(current instanceof HTMLTableRowElement)) {
    if (current == null)
      throw new Error(`Misplaced row element`);
    current = current.parentElement;
  }

  return current;
}

function tdToTh(td: HTMLTableCellElement) {
  const th = document.createElement('th');
  th.innerHTML = td.innerHTML;
  for (const attribute of td.attributes) {
    th.setAttribute(attribute.name, attribute.value);
  }
  td.replaceWith(th);
}

/** Scans and extracts table elements that should be part of the table header,
 * as marked by the class table-header. Asciidoc does not allow multi-row thead
 * elements to be generated.
 */
export function tableScan() {
  const allTables = document.querySelectorAll('table');

  for (const table of allTables) {
    for (; ;) {
      const toMove = table.querySelector<HTMLDivElement>("tbody .table-header, tbody .sub-header");
      if (toMove == null)
        break;
      const containingRow = findParentRow(toMove);
      if (containingRow == null)
        throw new Error("missing row");

      let tHead = table.querySelector('thead');
      const tBody = table.querySelector("tbody");
      if (tBody == null)
        throw new Error("missing tbody");
      // Make thead if it does not exist
      if (tHead == null) {
        tHead = document.createElement('thead');
        table.insertBefore(tHead, tBody);
      }

      for (const td of containingRow.querySelectorAll('td')) {
        tdToTh(td);
      }

      // Transfer the row
      tHead.appendChild(containingRow);
    }
  }
}
