import * as React from "react";
import "./styles.scss";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Game/>
    </div>
  );
}
