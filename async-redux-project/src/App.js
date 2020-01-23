import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  return (
    <div className='App'>
      <Header />
      <PokemonGrid />
      <h1>POKEMON</h1>
      <p>Testing studd</p>
      <p>more ffff</p>
    </div>
  );
}

export default App;
