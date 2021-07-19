import React, { useState } from "react";
import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import Detail from "./pages/Detail"

function App() {
  const [keyword, setKeyword] = useState("panda");

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/">
          <img className="App-logo" src="./logo.png" alt="Giffy logo"  />
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
          path="/gif/:id" 
        />
      </section>
    </div>
  );
}

export default App;

