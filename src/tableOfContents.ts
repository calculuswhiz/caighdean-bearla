import { EasyDOM } from "./EasyDOM";
import translations from "../translation/MainPage/translations.json";

// This script processes headings and uses them to make Table of Contents

function createListItem(heading: HTMLHeadingElement): EasyDOM<HTMLLIElement> {
  return EasyDOM.createElement("li")
    .addClasses('toc-item', 'my-1')
    .append(
      EasyDOM.createElement("a")
        .setProperties({ href: `#${heading.id}` })
        .setText(heading.textContent ?? "")
    );
}

/** 1) Removes everything after the numeric prefix.
 *   E.g. "sec_1_1_general" becomes "sec_1_1".
 * 2) Also encapsulate the number part in a span for styling.
 */
function processHeading(heading: EasyDOM<HTMLHeadingElement>) {
  const id = heading.element.id;
  const newId = id.replace(/(sec(_\d+)+).*/, '$1');
  heading.element.id = newId;

  const match = heading.element.textContent?.match(/^(\d+(\.\d+)+)(.*)/);
  if (match) {
    const numberSpan = EasyDOM.createElement("span")
      .addClasses('mr-2')
      .setText(match[1] + ' ');

    const restText = match[3] ?? '';

    heading
      .setText('')
      .append(
        numberSpan,
        EasyDOM.createElement("span").setText(restText)
      )
  }
}

function addSectionLinks(heading: EasyDOM<HTMLHeadingElement>) {
  const linkIcon = EasyDOM.createElement("span")
    .setProperties({ title: "Link to this section" })
    .addClasses('ml-2', 'text-gray-400', 'hover:text-gray-600', 'cursor-pointer', 'select-none')
    .setText('#');

  linkIcon.element.addEventListener('click', () => {
    location.href = `${location.origin}${location.pathname}#${heading.element.id}`;
  });

  heading.append(linkIcon);
}

/** Scan DOM, adding Table of Contents element to the document.
 * Also processes heading IDs for easier reference linking.
 * Will not add TOC if there are no headings.
 */
export function cleanHeadersAndMakeToC(docLang: keyof typeof translations["tableOfContents"] = 'en') {
  const headings = document.querySelectorAll<HTMLHeadingElement>("h2,h3,h4,h5,h6");

  if (headings.length === 0)
    return;

  for (const heading of headings)
    processHeading(new EasyDOM(heading));

  const showHideSpan = EasyDOM.createElement("span")
    .addClasses('toc-toggle', 'text-sm', 'ml-4', 'cursor-pointer', 'text-blue-700')
    .setText("[+/-]");

  showHideSpan.element.addEventListener('click', () => {
    rootList.element.classList.toggle('hidden');
  });

  const tocContainer = EasyDOM.createElement("div")
    .addClasses('toc-container', 'border', 'p-4', 'mb-6', 'bg-gray-100')
    .append(
      EasyDOM.createElement("h2")
        .addClasses('toc-title', 'text-xl', 'font-bold', 'mb-4', 'select-none')
        .setText(translations.tableOfContents[docLang])
        .append(showHideSpan),
    );

  const rootList = EasyDOM.createElement("ul").addClasses('hidden');
  tocContainer.append(rootList);

  let writeRef = rootList;

  // Normalized at 0 = h2
  let currentLevel = 0;
  for (const heading of headings) {
    // Ignore certain headings
    if (
      // Empty after number
      heading.textContent?.replace(/\d+(\.\d+)+/, '').trim() === ""
      // Starts with capital letter (A/B starts)
      || /^[A-Z] /.test(heading.textContent ?? "")
    ) {
      continue;
    }

    const level = parseInt(heading.tagName.substring(1)) - 2;
    const levelDiff = level - currentLevel;

    if (levelDiff > 0) {
      for (let i = 0; i < levelDiff; i++) {
        const newList = EasyDOM.createElement("ul")
          .addClasses('toc-list', 'list-disc', 'ml-4', 'mt-1', 'mb-1', 'pl-4');
        writeRef.append(newList);
        writeRef = newList;
      }

      currentLevel = level;
      writeRef.append(createListItem(heading));
    } else if (levelDiff < 0) {
      for (let i = 0; i < -levelDiff; i++) {
        if (writeRef.element.parentElement) {
          const parent = writeRef.element.parentElement.closest('ul');
          if (parent)
            writeRef = new EasyDOM(parent);
        }
      }

      currentLevel = level;
      writeRef.append(createListItem(heading));
    } else {
      // Same level
      writeRef.append(createListItem(heading));
    }
  }

  for (const heading of headings)
    addSectionLinks(new EasyDOM(heading));

  EasyDOM.querySelector<HTMLDivElement>("#toc-container")?.append(tocContainer.element);
}
