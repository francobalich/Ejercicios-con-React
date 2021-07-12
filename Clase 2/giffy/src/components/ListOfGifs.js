import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([]);
  const {keyword} = params;

  useEffect(() => {
    console.log("Actualizando los gif");
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return <div>
    {gifs.map((singleGif) => (
      <Gif 
        key={singleGif.id} 
        title={singleGif.title} 
        url={singleGif.url} />
    ))}
  </div>;
}
