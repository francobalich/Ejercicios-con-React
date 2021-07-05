import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log("Actualizando los gif");
    getGifs({ keyword: "panda" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => {
          return (
            <div>
              <h4>{singleGif.title}</h4>
              <p>{singleGif.id}</p>
              <img src={singleGif.url} alt={singleGif.title} />
            </div>
          );
        })}
        <button>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
