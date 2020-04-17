import React from "react";
import "./App.css";
import Card from "./Components/Card.js"
import Header from "./Components/Header.js"
import NavigationBar from "./Components/Navigation"


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
     <Card />
    </div>
  );
}

export default App;
