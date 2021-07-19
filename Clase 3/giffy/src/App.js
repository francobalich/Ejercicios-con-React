import React, { useState } from "react";
import "./App.css";
import { Link, Router } from "wouter";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState("panda");

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="/"
        </Link>
        <Route 
          component={Home} 
          path="/" 
        />
        <Route 
          component={SearchResults} 
          path="/search/:keyword" 
        />
        <Route 
          component={Detail} 
          path="/search/:id" 
        />
      </section>
    </div>
  );
}

export default App;

