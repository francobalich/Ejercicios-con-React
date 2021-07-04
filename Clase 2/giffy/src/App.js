import React, {useEffect, useState} from 'react';
import './App.css';

const GIFS =[
  'https://media.giphy.com/media/EPcvhM28ER9XW/giphy.gif',
  'https://media.giphy.com/media/pO1H8mAU7geAw/giphy.gif'
];
const DIFFERNTS_GIFS=[
  'https://media.giphy.com/media/ySVKduoNNFoRy/giphy.gif',
  'https://media.giphy.com/media/3eTsBTBJaFvJC/giphy.gif'
];
function App() {
  const [gifs, setGifs]=useState(GIFS);

  useEffect(()=>{
    console.log("Actualizando los gif");
    setGifs(DIFFERNTS_GIFS);
  },[]);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif=><img src={singleGif} />)
        }
        <button >Cambiar Gifs</button> 
      </section>
    </div>
  );
}

export default App;
