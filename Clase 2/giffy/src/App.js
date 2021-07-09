import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";
function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log("Actualizando los gif");
    getGifs({ keyword: "panda" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => 
          <Gif title={singleGif.title} id={singleGif.id} url={singleGif.url} />
        )}
        <button>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
