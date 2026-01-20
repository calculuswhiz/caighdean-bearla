const availableChapters = [
  {
    label: "Preface",
    id: "preface",
    bg: "bg-purple-800",
    fg: "text-white"
  },
  {
    label: "Members of the Advisory Committee",
    id: "advisoryCommittee",
    bg: "bg-purple-800",
    fg: "text-white"
  },
  {
    label: "Preface to the First Edition",
    id: "prefaceOfFirstEdition",
    bg: "bg-purple-800",
    fg: "text-white"
  },
  {
    label: "Abbreviations and Grammar Explanations",
    id: "grammarNotes",
    bg: "bg-purple-800",
    fg: "text-white"
  },
  {
    label: "Chapter 1 - The Article",
    id: "chapter1",
    bg: "bg-blue-950",
    fg: "text-white"
  },
  {
    label: "Chapter 2 - The Noun",
    id: "chapter2",
    bg: "bg-orange-500",
    fg: "text-white"
  },
  {
    label: "Chapter 3 - Definite and Indefinite Nouns, Abbreviations and the Form of the Nominative in the Place of the Genitive",
    id: "chapter3",
    bg: "bg-lime-300",
    fg: "text-black"
  },
  {
    label: "Chapter 4 - The Adjective",
    id: "chapter4",
    bg: "bg-yellow-300",
    fg: "text-black"
  },
  {
    label: "Chapter 5 - The Verb",
    id: "chapter5",
    bg: "bg-red-600",
    fg: "text-white"
  },
  {
    label: "Chapter 6 - The Adverb",
    id: "chapter6",
    bg: "bg-sky-600",
    fg: "text-white"
  },
  {
    label: "Chapter 7 - The Copula",
    id: "chapter7",
    bg: "bg-pink-600",
    fg: "text-white"
  },
  {
    label: "Chapter 8 - The Pronominal",
    id: "chapter8",
    bg: "bg-gray-600",
    fg: "text-white"
  },
  {
    label: "Chapter 9 - The Number",
    id: "chapter9",
    bg: "bg-fuchsia-900",
    fg: "text-white"
  },
  {
    label: "Chapter 10 - The Initial Mutations",
    id: "chapter10",
    bg: "bg-amber-400",
    fg: "text-black"
  },
  {
    label: "Chapter 11 - The Relative Clause",
    id: "chapter11",
    bg: "bg-blue-950",
    fg: "text-white"
  },
];

function addChapterSelect() {
  const container = document.getElementById("chapter-select");

  if (container) {
    for (const x of availableChapters) {
      const linkContainer = document.createElement("div");
      linkContainer.classList = [
        'flex', 'flex-row', 'items-center', 'justify-between', 'w-full',
        'font-bold'
      ].join(' ');
      container.appendChild(linkContainer);

      const irishLink = document.createElement("a");
      irishLink.href = `./entrypoints/${x.id}-ga.html`;
      irishLink.title = `View original Irish content`;
      irishLink.classList = [
        'cursor-pointer',
        x.fg, x.bg,
        'p-1', 'm-1'
      ].join(' ');
      irishLink.textContent = `[GA]`;
      linkContainer.appendChild(irishLink);

      const englishLink = document.createElement("a");
      englishLink.href = `./entrypoints/${x.id}.html`;
      englishLink.title = x.label;
      englishLink.classList = [
        'cursor-pointer',
        'grow',
        x.fg, x.bg,
        'p-1', 'm-1'
      ].join(' ');
      englishLink.textContent = x.label;
      linkContainer.appendChild(englishLink);
    }
  }
}

addChapterSelect();