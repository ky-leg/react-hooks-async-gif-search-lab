import React, {useEffect, useState} from "react";

// the App component should render out the GifListContainer component

function GifList({url, title}) {
  
//     const [gifs, setGifs] = useState([])



  return (
    <div className="gif-box">
        <h2>{title}</h2>
        <img src={url} alt={title}/>
    </div>
  );
}

export default GifList;