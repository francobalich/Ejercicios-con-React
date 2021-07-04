import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [gifs, setGifs]=useState([]);

  const apiURL='https://api.giphy.com/v1/gifs/search?api_key=VBFqqszK3iB5zlGkAm0iooJjHWSu9rhb&q=panda&limit=25&offset=0&rating=g&lang=en';
  useEffect(()=>{
    console.log("Actualizando los gif");
    fetch(apiURL)
      .then(res=> res.json())
      .then(response=>{
        const {data}=response;
        const gifs = data.map(image=>image.images.downsized_medium.url);
        setGifs(gifs);
        console.log(gifs);
      })
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
