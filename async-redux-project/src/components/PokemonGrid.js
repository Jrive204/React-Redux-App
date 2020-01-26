import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchPokemon } from "./actions/fetchPokemon";
import PokemonCard from "./PokemonCard";
import { Button } from "@material-ui/core";

const PokemonGrid = () => {
  const state = useSelector(state => state);
  let dispatch = useDispatch();
  return (
    <div
      className='POKEMON'
      style={{
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `column`
      }}>
      <Button
        style={{ margin: "0 auto", width: "10%" }}
        onClick={() => dispatch(fetchPokemon())}
        variant='outlined'
        color='secondary'>
        Get Pokemon
      </Button>
      &nbsp;
      <br />
      {!state.pokemon && !state.isloading && (
        <h2>Go ahead and fetch Random Pokemon!</h2>
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
        <div data-testid='PlayerGrid' className='PlayerGrid'>
          {state.pokemon.results.map(pokemons => (
            <PokemonCard
              dispatch={dispatch}
              key={pokemons.id}
              pokemons={pokemons}
            />
          ))}
        </div>
      )}
    </div>
    //
  );
};

export default PokemonGrid;
