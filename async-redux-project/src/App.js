import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  return (
    <div className='App'>
      <Header />
      <h1 style={{ textAlign: "center" }}> POKEMON Cards </h1>
      <PokemonGrid />
    </div>
  );
}

export default App;
