const availableChapters = [
  { label: "Front Matter", id: "front-matter" },
  { label: "Chapter 1 - The Article", id: "1", done: true },
  { label: "Chapter 2 - The Noun", id: "2", done: true },
  { label: "Chapter 3 - Definite and Indefinite Nouns, Abbreviations and the Form of the Nominative in the Place of the Genitive", id: "3", done: true },
  { label: "Chapter 4 - The Adjective", id: "4", done: true },
  { label: "Chapter 5 - The Verb", id: "5", done: true },
  { label: "Chapter 6 - The Adverb", id: "6", done: true },
  { label: "Chapter 7 - The Copula", id: "7", done: true },
  { label: "Chapter 8 - The Pronominal", id: "8", done: true },
  { label: "Chapter 9 - The Number", id: "9" },
  { label: "Chapter 10 - The Initial Changes", id: "10" },
  { label: "Chapter 11 - The Relative Clause", id: "11" },
];

function ChapterSelect() {
  return <>
    <b>Chapter Selection:</b><br />
    <sub>Line through = under construction</sub>
    <div className="flex flex-col flex-wrap border-1 border-dashed border-black mb-1">
      {
        availableChapters.map((x) =>
          <a
            key={x.label}
            href={`./entrypoints/chapter${x.id}.html`}
            title={x.label}
            className={`text-nowrap cursor-pointer text-left
              max-w-full
              text-white bg-amber-700
              p-1 m-1
              ${!x.done ? "line-through" : ""}`
            }>{
              x.label
            }</a>
        )
      }
    </div>
  </>;
}

function HomeMenu() {
  return <>
    <div className="max-w-[900px] pl-1 pt-1">
      <header className="border-b-1 border-black text-center bg-green-100 select-none">
        <h1 className="text-2xl font-bold">Irish Grammar</h1>
        <h2 className="text-xl mb-1">The Official Standard</h2>
        <p>The guide to writing in Irish</p>
        <p>As published by the Houses of the Oireachtas, translated into English</p>
      </header>
      Notes:
      <ul className="list-disc list-inside text-sm">
        <li>
          This is under construction. Many translations for chapter 1 and 7 were copied from{' '}
          <a className="text-blue-400" href="https://caighdean.home.blog/">here</a>. A lot of work was
          assisted my machine translation. While these are heavily QC'd, I'm sure there will be mistakes I
          go along as Irish isn't anywhere near my first language.
        </li>
        <li>
          In terms of work focus, currently priority is being given to the parts of the book that pertain specifically to
          grammar and the language. This means the front matter will likely be the last thing to be translated.
        </li>
        <li>
          The project is tracked at <a className="text-blue-400" href="https://github.com/calculuswhiz/caighdean-bearla">GitHub</a>.
        </li>
      </ul>
      <ChapterSelect />
      <footer className="fixed bottom-0 w-[100%] p-2 border-y-1 border-black bg-white">
        This is an unofficial translation.
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        className="fixed bottom-12 right-2 border-1 border-black p-2 bg-white cursor-pointer"
        title="Scroll to top">
        ⌃
      </button>
    </div>
  </>;
}

export default HomeMenu;
