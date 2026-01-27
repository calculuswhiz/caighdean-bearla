import translations from "../translation/json/translations.json";
import { EasyDOM } from "./EasyDOM";

const availableChapters: {
  labelChain: string[];
  id: string;
  bg: string;
  fg: string;
}[] = [
    {
      labelChain: ["prefaceTitle"],
      id: "preface",
      bg: "bg-purple-800",
      fg: "text-white"
    },
    {
      labelChain: ["advisoryCommittee"],
      id: "advisoryCommittee",
      bg: "bg-purple-800",
      fg: "text-white"
    },
    {
      labelChain: ["preface1stEd"],
      id: "prefaceOfFirstEdition",
      bg: "bg-purple-800",
      fg: "text-white"
    },
    {
      labelChain: ["abbrevAndGrammarTitle"],
      id: "grammarNotes",
      bg: "bg-purple-800",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter1"],
      id: "chapter1",
      bg: "bg-blue-950",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter2"],
      id: "chapter2",
      bg: "bg-orange-600",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter3"],
      id: "chapter3",
      bg: "bg-lime-300",
      fg: "text-black"
    },
    {
      labelChain: ["chapterTitles", "Chapter4"],
      id: "chapter4",
      bg: "bg-yellow-300",
      fg: "text-black"
    },
    {
      labelChain: ["chapterTitles", "Chapter5"],
      id: "chapter5",
      bg: "bg-red-600",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter6"],
      id: "chapter6",
      bg: "bg-sky-600",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter7"],
      id: "chapter7",
      bg: "bg-pink-600",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter8"],
      id: "chapter8",
      bg: "bg-gray-600",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter9"],
      id: "chapter9",
      bg: "bg-fuchsia-900",
      fg: "text-white"
    },
    {
      labelChain: ["chapterTitles", "Chapter10"],
      id: "chapter10",
      bg: "bg-amber-400",
      fg: "text-black"
    },
    {
      labelChain: ["chapterTitles", "Chapter11"],
      id: "chapter11",
      bg: "bg-blue-950",
      fg: "text-white"
    },
    {
      labelChain: ["tableOfOptions"],
      id: "tableOfOptions",
      bg: "bg-purple-800",
      fg: "text-white"
    }
  ];

type NestableRecord = {
  [key: string]: string | NestableRecord;
};

function getLabelText(labelChain: string[]): string {
  const langSelect = availableLanguages[currentLanguageIdx].linkSuffix;
  let text: NestableRecord = translations;
  for (const key of labelChain) {
    if (typeof text[key] === 'string')
      throw new Error(`Attempted to index into a string for label chain: ${labelChain.join(' -> ')}`);
    text = text[key];
  }

  if (text.ga === undefined || text.en === undefined)
    throw new Error(`Did not find translation for label chain: ${labelChain.join(' -> ')}`);
  else
    return text[langSelect] as string;
}

const availableLanguages = [
  { label: "Gaeilge", linkSuffix: "ga" },
  { label: "English", linkSuffix: "en" },
] as const;

let currentLanguageIdx = 0;

function addChapterSelectLinks() {
  const container = EasyDOM.querySelector<HTMLDivElement>("#chapter-select");

  if (container) {
    for (const x of availableChapters) {
      const linkContainer = EasyDOM.createElement("div")
        .addClasses(
          'flex', 'flex-row', 'items-center', 'justify-between', 'w-full',
          'font-bold'
        );

      container.append(linkContainer);

      const link = EasyDOM.createElement("a")
        .setProperties({
          href: `./entrypoints/${x.id}-${availableLanguages[currentLanguageIdx].linkSuffix}.html`,
          title: getLabelText(x.labelChain)
        }).addClasses(
          'cursor-pointer', 'hover:brightness-120', 'hover:pl-2',
          'grow',
          x.fg, x.bg,
          'p-1', 'm-1'
        ).setText(getLabelText(x.labelChain));
      linkContainer.append(link);
    }
  }
}

const languageButtons: EasyDOM<HTMLButtonElement>[] = [];

function addLanguageSelect() {
  const container = EasyDOM.querySelector("#language-select");

  if (container) {
    for (const [index, lang] of availableLanguages.entries()) {
      const langButton = EasyDOM.createElement("button")
        .addClasses(
          'cursor-pointer',
          'p-1', 'm-1',
          'bg-gray-200',
          ...(currentLanguageIdx === index
            ? ['font-bold', 'underline']
            : [])
        )
        .setText(availableLanguages[index].label);

      langButton.element.addEventListener('click', () => {
        currentLanguageIdx = index;

        for (const btn of languageButtons) {
          if (btn.element.textContent === availableLanguages[index].label)
            btn.addClasses('font-bold', 'underline');
          else
            btn.removeClasses('font-bold', 'underline');
        }

        // Update link urls
        const chapterLinks = EasyDOM.querySelectorAll<HTMLAnchorElement>('#chapter-select a');
        for (const link of chapterLinks) {
          const oldHref = link.element.href;
          link.setProperties({
            href: oldHref.replace(
              /-(\w+)\.html$/,
              `-${lang.linkSuffix}.html`
            )
          })
        };

        applyTranslations();
      });
      container.append(langButton);
      languageButtons.push(langButton);
    }
  }
}

addChapterSelectLinks();
addLanguageSelect();

function applyTranslations() {
  const langSelect = availableLanguages[currentLanguageIdx].linkSuffix;
  document.title = translations.documentTitle[langSelect];

  const bookTitle = EasyDOM.querySelector<HTMLHeadingElement>("#book-title");
  bookTitle?.setText(translations.bookTitle[langSelect]);

  const bookSubtitle = EasyDOM.querySelector<HTMLHeadingElement>("#book-subtitle");
  bookSubtitle?.setText(translations.bookSubtitle[langSelect]);

  const bookAbout = EasyDOM.querySelector<HTMLParagraphElement>("#book-about");
  bookAbout?.setText(translations.bookAbout[langSelect]);

  const publisherInfo = EasyDOM.querySelector<HTMLParagraphElement>("#publisher-info");
  publisherInfo?.setText(translations.bookPublisherInfo[langSelect]);

  const chapterSelectionLabel = EasyDOM.querySelector<HTMLElement>("#chapter-selection-label");
  chapterSelectionLabel?.setText(translations.chapterSelection[langSelect]);

  const chapterSelect = EasyDOM.querySelector<HTMLDivElement>('#chapter-select');
  if (chapterSelect)
    chapterSelect.element.innerHTML = "";

  const footer = EasyDOM.querySelector("footer");
  if (footer) {
    const disclaimerText = translations.footerDisclaimer[langSelect];
    footer.setText(disclaimerText);
  }

  addChapterSelectLinks();
}
applyTranslations();
