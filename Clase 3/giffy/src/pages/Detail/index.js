import React from "react"

export default function Detail ({params}){
    console.log(params.id)
    return <h1>GIF con Id {params.id}</h1>
}