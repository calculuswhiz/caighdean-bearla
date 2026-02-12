import Asciidoctor from "asciidoctor";
import fs from "fs/promises";
import path from "path";
import { JSDOM } from "jsdom";
import { EasyDOM } from "../src/EasyDOM";
import { applyMenuTranslations } from "./HomeMenu";

/*
Run command to generate all chapters:
npx tsx ./scripts/generateDocs.ts --dev --all
*/

const asciidoctor = Asciidoctor();

/** Special processing for handling language-specific content in AsciiDoc files:
 * - Remove suffixes of `_en:` or `_ga:` based on selected language
 * - Add `pass:q[]` to all attribute definitions to prevent AsciiDoc from processing them
 * - NOTE: Do not use multi-line attributes. Use <br /> instead
 * @param contents The raw contents of the AsciiDoc file
 * @param language The language selection
 * @returns The processed contents
 */
export function processAttributeFile(contents: string, language: string) {
  const lines = contents.split('\n');
  const outputBuffer: string[] = [];

  // Line-by-line is easier and faster than global regex.
  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "")
      continue;

    const langSelect = trimmed.replace(new RegExp(`_${language}:`), ':');

    // Default behavior is "pass" as a lot of our text is marked up.
    const addPass = langSelect
      .replace(/^:(.+?): (.*?)$/, ":$1: pass:q[$2]");
    outputBuffer.push(addPass);
  }

  return outputBuffer.join("\n");
}

/** Generate html for chapter by number.
 * Does not generate full document, only chapter content in a div.
 * @param chapterFolder The chapter folder to load
 * @param language The language selection
 * @param devMode Whether to generate in dev mode
 * @returns The processed chapter content as a string
 */
async function makeChapterHtml(
  layoutModule: string,
  chapterAttributesModule: string,
  commonAttributesModule: string,
  language: string, devMode: boolean) {


  const rawChapterAdoc = layoutModule;
  const processedChapterAttrs = processAttributeFile(chapterAttributesModule, language);
  const processedCommonAttrs = processAttributeFile(commonAttributesModule, language);

  const combined = [
    processedCommonAttrs, processedChapterAttrs, rawChapterAdoc,
  ].join("\n");

  return asciidoctor.convert(combined, {
    attributes: {
      rootRef: devMode ? "/public/" : "/caighdean-i18n/",
      idprefix: "sec_",
      // If the isGa attribute is set, we are generating the Irish version
      isGa: language === 'ga' ? "1" : undefined,
      docLang: language
    }
  }) as string;
}

/**
 * Clean the headers in the given JSDOM document. (in-place)
 * 1) Removes everything after the numeric prefix.
 *   E.g. "sec_1_1_general" becomes "sec_1_1".
 * 2) Also encapsulate the number part in a span for styling.
 * @param jsDom 
 */
function normalizeHeadingIds() {
  const headings = EasyDOM.querySelectorAll<HTMLHeadingElement>("h2,h3,h4,h5,h6");

  for (const heading of headings) {
    const id = heading.element.id;
    const newId = id.replace(/(sec(_\d+)+).*/, '$1');
    heading.element.id = newId;

    // Use innerHTML because we want to preserve any inner markup (like <em> and <strong>)
    const match = heading.element.innerHTML?.match(/^(\d+(\.\d+)+)(.*)/);
    if (match) {
      const numberSpan = EasyDOM.createElement("span")
        .addClasses('mr-2')
        .setText(match[1] + ' ');

      const restText = match[3] ?? '';

      heading
        .setText('')
        .append(
          numberSpan,
          EasyDOM.createElement("span").setHtml(restText)
        )
    }
  }
}

/** Give tables ids. E.g. Table/Tábla 1A -> table1a */
function giveTablesIds(document: Document) {
  const allTables = document.querySelectorAll<HTMLTableElement>("table");
  for (const table of allTables) {
    const captionId = table.querySelector("caption > strong");
    if (captionId) {
      const id = captionId.textContent
        ?.match(/\d+[A-Z]/)?.[0]
        .toLowerCase();
      table.id = `table${id}`;
    }
  }
}

const romanMap: Record<number, string> = {
  1: 'i',
  2: 'ii',
  3: 'iii',
  4: 'iv',
  5: 'v',
  6: 'vi',
  7: 'vii',
  8: 'viii',
  9: 'ix',
  10: 'x'
};

const alphaMap = "abcdefghijklmnopqrstuvwxyz".split("");

/** Give list items ids based on their position and containing section's id.
 */
function giveListItemsIds(document: Document) {
  // Applies only to ordered lists. Unordered lists are never referenced.
  const allLists = document.querySelectorAll<HTMLUListElement>("ol");

  for (const list of allLists) {
    const listStyle = list.classList.contains("list-[lower-roman]")
      ? "roman"
      : list.classList.contains("list-[lower-alpha]")
        ? "lowerAlpha"
        : "upperAlpha";

    const parentSection = list.closest(".sect1, .sect2, .sect3, li");
    if (parentSection == null)
      continue;

    // li should have id, sectionbody is below header with id
    const parentId = parentSection.tagName.toLowerCase() === "li"
      ? parentSection.id
      : parentSection.firstElementChild?.id;
    if (parentId == null)
      continue;

    const listItems = list.querySelectorAll<HTMLLIElement>(":scope > li");
    for (const [index, listItem] of listItems.entries()) {
      const indexSuffix = listStyle === "roman"
        ? romanMap[index + 1]
        : listStyle === "lowerAlpha"
          ? alphaMap[index]
          : alphaMap[index].toUpperCase();

      // Nesting is accounted for by using the parent section/li id, so we don't need to worry about it here.
      listItem.id = `${parentId}_${indexSuffix}`;
    }
  }
}

const languages = ['en', 'ga'] as const;
/**
 * Generate the full HTML document for a chapter and write to `entrypoints`.
 * @param chapterFolder The chapter id
 */
async function generateDoc(chapterFolder: string) {
  const chapterBaseDir = `./translation/${chapterFolder}`;
  if (!(await fs.readdir(chapterBaseDir)).some(x => x.endsWith(".adoc"))) {
    // Skip if no adoc files.
    return;
  }
  const devMode = process.argv.includes("--dev");

  const chapterTemplate = await fs.readFile(`./src/chapterTemplate.html`, "utf-8");

  const [layoutModule, chapterAttributesModule, commonAttributesModule] =
    await Promise.all([
      `${chapterBaseDir}/${chapterFolder}.adoc`,
      `${chapterBaseDir}/attributes.adoc`,
      `./translation/CommonAttributes.adoc`,
    ].map(x => fs.readFile(x, "utf-8")));

  for (const lang of languages) {
    console.log(`  Generating language: ${lang}`);
    const convertedHtmlFragment = await makeChapterHtml(
      layoutModule, chapterAttributesModule, commonAttributesModule,
      lang, devMode
    );
    const completeHtml = chapterTemplate
      .replace("<!-- Insert content here -->", convertedHtmlFragment);

    const jsDom = new JSDOM(completeHtml);

    // Setup EasyDOM to use this JSDOM instance
    EasyDOM.document = jsDom.window.document;
    EasyDOM.HTMLElement = jsDom.window.HTMLElement;

    normalizeHeadingIds();
    giveTablesIds(jsDom.window.document);
    giveListItemsIds(jsDom.window.document);

    await fs.writeFile(
      `./entrypoints/${lang}/${chapterFolder[0].toLocaleLowerCase()}${chapterFolder.slice(1)}.html`,
      jsDom.serialize(),
      "utf-8");
  }
}

/** Using menuTemplate.html, generate the main page for each language */
async function generateMainPages() {
  console.log("Generating main pages...");

  const menuTemplate = await fs.readFile(`./src/menuTemplate.html`, "utf-8");

  for (const lang of languages) {
    const jsDom = new JSDOM(menuTemplate);
    EasyDOM.document = jsDom.window.document;
    EasyDOM.HTMLElement = jsDom.window.HTMLElement;

    applyMenuTranslations(lang);

    await fs.writeFile(
      `./entrypoints/${lang}/index.html`,
      jsDom.serialize(),
      "utf-8");
  }
}

(async () => {
  const xlateFolderEnts = await fs.readdir("./translation/", {
    // Lets us filter only directories
    withFileTypes: true
  });
  const allChapters = xlateFolderEnts
    .filter(ent =>
      ent.isDirectory()
      // ! Pages not built with AsciiDoc are built with json pairs, so we ignore them
      && ent.name !== "json"
    )
    .map(ent => ent.name);

  if (process.argv.includes("--all")) {
    await fs.rm("./entrypoints/", { recursive: true, force: true });
    await fs.mkdir("./entrypoints/");
    await fs.mkdir("./entrypoints/en");
    await fs.mkdir("./entrypoints/ga");

    for (const chapterFolder of allChapters) {
      console.log(`Generating chapter: ${chapterFolder}`);
      await generateDoc(chapterFolder);
    }

    await generateMainPages();
  } else if (process.argv.includes("--watch")) {
    console.log("Watching for changes...");
    const watcher = fs.watch("./translation/", { recursive: true });
    for await (const event of watcher) {
      if (event.filename == null || !event.filename.endsWith(".adoc"))
        continue;

      console.log(`File changed: ${event.filename}`);
      // Regenerate the document for the changed chapter
      const chapterFolder = path.dirname(event.filename);
      await generateDoc(chapterFolder);
    }
  } else {
    let chapterFolder = null;
    const folderArg = process.argv.find(arg => arg.startsWith("--folder="));
    if (folderArg != null)
      chapterFolder = folderArg.split("=")[1];
    else
      throw new Error("Please specify a folder to generate with --folder=ChapterN");

    await generateDoc(chapterFolder);
  }
})();
