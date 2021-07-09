import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log("Actualizando los gif");
    getGifs({ keyword: "robot" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs listOfGifs={gifs} />
        <button>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
