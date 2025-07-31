import React from "react";
import Chapter1 from "./Components/Chapters/Chapter1";
import Chapter7 from "./Components/Chapters/Chapter7";

const availableChapters = [
  { label: "Chapter 1 - The Article", element: <Chapter1 /> },
  { label: "Chapter 7 - The Copula", element: <Chapter7 /> }
];

function App() {
  const [currentChapter, setCurrentChapter] = React.useState(-1 as number);

  return <div className="max-w-[900px] mb-[50vh]">
    <div>
      Note: This is under construction. Translations largely copied from ones hosted <a className="text-blue-300" href="https://caighdean.home.blog/">here</a>.
    </div>
    <div>Select a chapter:</div>
    <select defaultValue={currentChapter} 
      className="border-1 border-black rounded-sm" 
      onChange={(e) => setCurrentChapter(+e.currentTarget.value)}>
      <option value={-1}></option>
      {
        availableChapters.map((x, i) => <option key={i} value={i}>{x.label}</option>)
      }
    </select>
    <hr />
    {
      currentChapter !== -1 && availableChapters[currentChapter].element
    }
  </div>;
}

export default App;
