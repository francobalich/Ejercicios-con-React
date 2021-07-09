import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState("panda");

  return (
    <div className="App">
      <section className="App-content">
        <button
          onClick={() => {
            setKeyword("Mapache");
          }}
        >
          {" "}
          Cambiar Keyword
        </button>
        <ListOfGifs keyword={keyword} />
        <button>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
