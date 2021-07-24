import React, { useState } from "react";
import { Link, useLocation } from "wouter";
const POPULAR_GIFS = ["Matrix", "Code", "Argentina", "Panda"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path,pushLocation] = useLocation()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    //nav to other rute
    pushLocation(`/search/${keyword}`)
    console.log(keyword);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
        <button>Buscar</button>
      </form>
      <h3 className="App.title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>
              Gift de 
              {" "+popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
