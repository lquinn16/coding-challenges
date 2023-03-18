import * as React from "react";
import "./styles.scss";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";

export default function App() {
  return (
    <div className="App">
      <Header />
      Easygo Mines
      <GameGrid/>
    </div>
  );
}
