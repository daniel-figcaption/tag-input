import React from "react";
import "./App.css";
import TagInput from "./components/TagInput";

function App() {
  return (
    <div className="absolute inset-0 bg-white flex flex-col">
      {document.location.search && (
        <div className="bg-gray-100 py-4 px-4 sm:px-6 md:px-8 lg:px-10 flex-0">
          <output className="block font-mono text-gray-700 max-w-xl mx-auto text-xs sm:text-sm md:text-base break-all">
            {`${document.location.origin}${document.location.pathname}`}
            <span className="bg-blue-200 text-blue-950">
              {decodeURIComponent(document.location.search)}
            </span>
          </output>
        </div>
      )}

      <form className="p-4 sm:p-6 md:p-8 lg:p-10 flex-1" action="" method="GET">
        <div className="max-w-xl mx-auto">
          <div className="mb-5">
            <label
              className="inline-block mb-1 sm:text-lg font-bold"
              htmlFor="name"
            >
              First name
            </label>
            <input
              className={`
              block w-full relative rounded overflow-hidden px-3 h-10 sm:h-12
              text-sm sm:text-base
              border border-gray-500 outline outline-0 
              focus:border-blue-950 focus:outline-blue-200 focus:outline-2
            `}
              type="text"
              id="name"
              name="name"
              spellCheck={false}
            />
          </div>
          <div className="mb-7">
            <label className="inline-block sm:text-lg font-bold" htmlFor="tags">
              Tags
            </label>
            <p className="mb-1 text-gray-600 text-sm sm:text-base">
              Separate using commas.
            </p>
            <TagInput id="tags" name="tags" autoFocus={true} />
          </div>
          <button
            className="bg-blue-600 outline outline-0 transition-colors hover:bg-blue-700 active:bg-blue-800 focus:outline-4 focus:outline-blue-500/30 text-white rounded flex items-center justify-center px-6 h-10"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
