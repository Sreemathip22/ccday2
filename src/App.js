import React from "react";
import Entry from "./Pages/Day6/Entry";
import List from "./Pages/Day6/List";
import Home from "./Pages/Day9/Home";
import Singers from "./Pages/Day9/Singers";
import Albums from "./Pages/Day9/Albums";
import Day8 from "./Pages/Day8/day8";
import Day7 from "./Pages/Day7/day7";

function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
      <Albums/>
      <Singers/>
      <Home/>
      <Day7/>
      <Day8/>
    </div>
  );
}

export default App;