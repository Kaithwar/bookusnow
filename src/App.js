import "./App.css";
import React from "react";
import Show from "./component/Show";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Show/>
    </div>
  );
}

export default App;
