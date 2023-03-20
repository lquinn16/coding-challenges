import * as React from "react";
import "./styles.scss";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GameOptions from "./components/GameOptions";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <GameGrid/>
      <GameOptions/>
    </div>
  );
}
