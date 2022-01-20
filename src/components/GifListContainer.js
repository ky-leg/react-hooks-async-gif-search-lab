import React, {useEffect, useState} from "react";
import GifList from "./GifList"


// the App component should render out the GifListContainer component

function GifListContainer({search}) {
  
  const [gifs, setGifs] = useState([])  
  
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(r => r.json())
    .then(r => setGifs(
        r.data.slice(0,5)
    ))
  }, [search])

  

    console.log(search)

    

    return (
        <>
        
        {gifs.map(gif => {
            return (
                <GifList key={gif.title} url={gif.images.original.url} title={gif.title}/>
            )
        })}       
        </>
  );
}

export default GifListContainer;