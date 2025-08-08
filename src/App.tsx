import React from "react";
import Chapter1 from "./Components/Chapters/Chapter1";
import Chapter7 from "./Components/Chapters/Chapter7";
import { TableOfContents } from "./Components/TableOfContents";
import { FrontMatter } from "./Components/Chapters/FrontMatter";
import Chapter2 from "./Components/Chapters/Chapter2";

const availableChapters = [
  { label: "Front Matter", id: "front-matter", element: <FrontMatter /> },
  { label: "Chapter 1 - The Article", id: "section-1", element: <Chapter1 /> },
  { label: "Chapter 2 - The Noun", id: "section-2", element: <Chapter2 /> },
  { label: "Chapter 7 - The Copula", id: "section-7", element: <Chapter7 /> }
];

const chapterMap = new Map<string, number>(availableChapters.map(({ id }, idx) => [id, idx]));

function ChapterSelect(props: {
  currentChapter: number;
  onSelect: (x: number) => void;
}) {
  return <>
    <b>Chapter Selection:</b>
    <div className="flex flex-row border-1 border-dashed border-black mb-1">
      {
        availableChapters.map((x, i) =>
          <button
            key={x.label}
            onClick={() => props.onSelect(i)}
            className={`cursor-pointer text-white p-1 m-1 ${i === props.currentChapter ? "bg-amber-500 font-bold" : "bg-amber-700"}`}>{
              x.label
            }</button>
        )
      }
    </div>
  </>;
}

function getChapterHash() {
  const postHash = location.hash.slice(1);
  const hashParts = postHash.split('-');
  const chapterId = hashParts.slice(0, 2).join('-');
  const chapterIdx = chapterMap.get(chapterId);
  return chapterIdx ?? -1;
}

function App() {
  const [currentChapter, setCurrentChapter] = React.useState(getChapterHash());

  /** Syntax is secion-{chapter}-{section} */
  const setCurrentChapterBasedOnHash = () => {
    setCurrentChapter(getChapterHash());
  };

  React.useEffect(() => {
    window.addEventListener('hashchange', () => {
      setCurrentChapterBasedOnHash();
    });

    setCurrentChapterBasedOnHash();
  }, []);

  React.useEffect(() => {
    if (location.hash)
      document.querySelector(location.hash)?.scrollIntoView();
  }, [currentChapter])

  return <>
    <div className="max-w-[900px] mb-[50vh] pl-1 pt-1">
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
          grammar and the language. This means the font matter will likely be the last thing to be translated.
        </li>
        <li>
          The project is tracked at <a className="text-blue-400" href="https://github.com/calculuswhiz/caighdean-bearla">GitHub</a>.
        </li>
      </ul>
      <ChapterSelect currentChapter={currentChapter} onSelect={(x) => {
        // Let this be navigable
        location.href = `#${availableChapters[x].id}`;
      }} />
      <hr />
      {
        currentChapter !== -1 && <TableOfContents currentChapter={currentChapter} />
      }
      {
        currentChapter !== -1 && availableChapters[currentChapter].element
      }
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

export default App;
