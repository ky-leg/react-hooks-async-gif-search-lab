import React, { useState} from "react";
import GifListContainer from "./GifListContainer"
import NavBar from "./NavBar";
import GifSearch from "./GifSearch"

// the App component should render out the GifListContainer component

function App() {
  
  const [search, setSearch] = useState("")

  console.log(search)

  const gifList = <GifListContainer search={search} />
  const loading = <h2>Search Something!</h2>

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifSearch search={search} setSearch={setSearch}/>
      {search? gifList:loading}
    </div>
  );
}

export default App;
