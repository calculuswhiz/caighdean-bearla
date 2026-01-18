const availableChapters = [
  { label: "The Preface", id: "preface", done: true },
  { label: "Members of the Advisory Committee", id: "advisoryCommittee", done: true },
  { label: "The Preface to the First Edition", id: "prefaceOfFirstEdition", done: true },
  { label: "Abbreviations and Grammar Explanations", id: "grammarNotes", done: true },
  { label: "Chapter 1 - The Article", id: "chapter1", done: true },
  { label: "Chapter 2 - The Noun", id: "chapter2", done: true },
  { label: "Chapter 3 - Definite and Indefinite Nouns, Abbreviations and the Form of the Nominative in the Place of the Genitive", id: "chapter3", done: true },
  { label: "Chapter 4 - The Adjective", id: "chapter4", done: true },
  { label: "Chapter 5 - The Verb", id: "chapter5", done: true },
  { label: "Chapter 6 - The Adverb", id: "chapter6", done: true },
  { label: "Chapter 7 - The Copula", id: "chapter7", done: true },
  { label: "Chapter 8 - The Pronominal", id: "chapter8", done: true },
  { label: "Chapter 9 - The Number", id: "chapter9", done: true },
  { label: "Chapter 10 - The Initial Mutations", id: "chapter10", done: true },
  { label: "Chapter 11 - The Relative Clause", id: "chapter11", done: true },
];

function addChapterSelect() {
  const container = document.getElementById("chapter-select");

  if (container) {
    for (const x of availableChapters) {
      const a = document.createElement("a");
      a.href = `./entrypoints/${x.id}.html`;
      a.title = x.label;
      a.classList = [
        'cursor-pointer', 'text-left',
        'max-w-full',
        'text-white', 'bg-amber-700',
        'p-1', 'm-1', 'font-bold',
        !x.done ? 'line-through bg-gray-400' : ''
      ].join(' ');
      a.textContent = x.label;
      container.appendChild(a);
    }
  }
}

addChapterSelect();