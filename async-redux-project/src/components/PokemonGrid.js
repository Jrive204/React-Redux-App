import React from "react";
import { useSelector, useDispatch } from "react-redux";
import noImage from "../img/Pokeball.png";
import Loader from "react-loader-spinner";
import { fetchPokemon } from "./actions/fetchPokemon";

const PokemonGrid = () => {
  const state = useSelector(state => state);
  let dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(fetchPokemon())}>Get Activity</button>
      {!state.pokemon && !state.isloading && (
        <h2>Go ahead a fetch a new activity!</h2>
      )}
      {state.isloading && (
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {state.pokemon && !state.isloading && (
        <h2>
          {state.pokemon.results.map(pokemons => (
            <p> {pokemons.name}</p>
          ))}
        </h2>
      )}
    </div>
    // <div>
    //   <div className='PlayerGrid'>
    //     <button onClick={dispatch(fetchPokemon)}>
    //       {console.log(fetchPokemon)}POKEMON
    //     </button>
    //     {pokemon
    //       .map(pokemons => (
    //         <div key={pokemons.id} className='flip-card'>
    //           <div className='flip-card-inner'>
    //             <div className='flip-card-front'>
    //               <img
    //                 src={noImage}
    //                 alt='Avatar'
    //                 style={{ width: "200px", height: "200px" }}
    //               />
    //             </div>
    //             <div className='flip-card-back'>
    //               <h1>{pokemons.name}</h1>
    //               <p>{pokemons.country}</p>
    //               <p>Searches: {pokemons.searches}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))
    //       .sort()}
    //   </div>
    // </div>
  );
};

export default PokemonGrid;
