import React from "react"
import { Link } from "wouter"
const POPULAR_GIFS=["Matrix","Code","Argentina","Panda"]

export default function Home (){
    
    return (
        <>
            <h3 className="App.title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif)=>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gift de 
                        {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}