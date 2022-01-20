import React, { useState} from "react";

// the App component should render out the GifListContainer component

function GifSearch({setSearch, search}) {
  
  const [value, setValue] = useState(search)

  function handleSubmit(e){
    e.preventDefault()
    setSearch(value)
  }  

  return (
    <div className="search-form">
        <form  onSubmit={e => handleSubmit(e)}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button>Search Now!</button>
        </form>
    </div>
  );
}

// e => 

export default GifSearch;