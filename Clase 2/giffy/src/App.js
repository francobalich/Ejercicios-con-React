import React, { useState } from "react";
import { Link, Router } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route } from "wouter";
function App() {
  const [keyword, setKeyword] = useState("panda");

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gif de pandas</Link>
        <Link to="/gif/code">Gif de codigo</Link>
        <Link to="/gif/argentina">Gif de argentina</Link>
        <Link to="/gif/motores">Gif de motores</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
