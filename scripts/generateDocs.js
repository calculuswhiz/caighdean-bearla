import Asciidoctor from "asciidoctor";
import fs from "fs/promises";
import path from "path";

/*
Run command to generate all chapters:
node ./scripts/generateDocs.js --dev --all
*/

const asciidoctor = Asciidoctor();

/** Special processing for handling language-specific content in AsciiDoc files
 * @param {string} contents The raw contents of the AsciiDoc file
 * @param {'ga' | 'en'} language The language selection
 * @returns {string} The processed contents
 */
export function processAdocFileContents(contents, language) {
  const lines = contents.split('\n');
  /** @type {string[]} */
  const outputBuffer = [];

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

function convertCommon(raw, devMode, isGa = false) {
  return asciidoctor.convert(raw, {
    attributes: {
      rootRef: devMode ? "/public/" : "/caighdean-i18n/",
      idprefix: "sec_",
      // If the isGa attribute is set, we are generating the Irish version
      isGa: isGa ? "1" : undefined,
    }
  });
}

/** Generate html for chapter by number.
 * Does not generate full document, only chapter content in a div.
 * @param {string} chapterFolder The chapter folder to load
 * @param {'ga' | 'en'} language The language selection
 * @param {boolean} devMode Whether to generate in dev mode
 * @returns {Promise<string>} The processed chapter content as a string
 */
async function makeChapterHtml(chapterFolder, language, devMode) {
  const [chapterAdocModule, chapterAttributesModule, commonAttributesModule] =
    await Promise.all([
      fs.readFile(`./translation/${chapterFolder}/${chapterFolder}.adoc`, "utf-8"),
      fs.readFile(`./translation/${chapterFolder}/attributes.adoc`, "utf-8"),
      fs.readFile(`./translation/CommonAttributes.adoc`, "utf-8"),
    ]);

  const rawChapterAdoc = chapterAdocModule;
  const rawChapterAttributes = chapterAttributesModule;
  const rawCommonAttributes = commonAttributesModule;

  const processedChapterAttrs = processAdocFileContents(rawChapterAttributes, language);
  const processedCommonAttrs = processAdocFileContents(rawCommonAttributes, language);

  const combined = [
    processedCommonAttrs, processedChapterAttrs, rawChapterAdoc,
  ].join("\n");

  return convertCommon(combined, devMode, language === 'ga');
}

/**
 * Generate the full HTML document for a chapter and write to `entrypoints`.
 * @param {string} chapterFolder The chapter id
 */
async function generateDoc(chapterFolder) {
  const devMode = process.argv.includes("--dev");

  const translationHtml = await makeChapterHtml(chapterFolder, 'en', devMode);
  const originalIrishHtml = await makeChapterHtml(chapterFolder, 'ga', devMode);
  const chapterTemplate = await fs.readFile(`./src/chapterTemplate.html`, "utf-8");

  const finalTranslatedHtml = chapterTemplate
    .replace("<!-- Insert content here -->", translationHtml);
  const finalOriginalIrishHtml = chapterTemplate
    .replace("<!-- Insert content here -->", originalIrishHtml);

  await fs.writeFile(
    `./entrypoints/${chapterFolder[0].toLocaleLowerCase()}${chapterFolder.slice(1)}-en.html`,
    finalTranslatedHtml,
    "utf-8");
  await fs.writeFile(
    `./entrypoints/${chapterFolder[0].toLocaleLowerCase()}${chapterFolder.slice(1)}-ga.html`,
    finalOriginalIrishHtml,
    "utf-8");
}

(async () => {
  const xlateFolderEnts = await fs.readdir("./translation/", {
    // Lets us filter only directories
    withFileTypes: true
  });
  const allChapters = xlateFolderEnts
    .filter(ent =>
      ent.isDirectory()
      // ! The main page is not built with asciidoc, ignore
      && ent.name !== "json"
    )
    .map(ent => ent.name);

  if (process.argv.includes("--all")) {
    await fs.rm("./entrypoints/", { recursive: true, force: true });
    await fs.mkdir("./entrypoints/");

    for (const chapterFolder of allChapters) {
      console.log(`Generating chapter: ${chapterFolder}`);
      await generateDoc(chapterFolder);
    }
  } else if (process.argv.includes("--watch")) {
    console.log("Watching for changes...");
    const watcher = fs.watch("./translation/", { recursive: true });
    for await (const event of watcher) {
      console.log(`File changed: ${event.filename}`);
      // Regenerate the document for the changed chapter
      const chapterFolder = path.dirname(event.filename);
      await generateDoc(chapterFolder);
    }
  } else {
    let chapterFolder = null;
    const folderArg = process.argv.find(arg => arg.startsWith("--folder="));
    if (folderArg != null) {
      chapterFolder = folderArg.split("=")[1];
    } else {
      throw new Error("Please specify a folder to generate with --folder=ChapterN");
    }

    await generateDoc(chapterFolder);
  }
})();
