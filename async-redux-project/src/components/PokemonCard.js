import React, { useEffect, useState } from "react";
import noImage from "../img/Pokeball.png";
import { fetchPokemon } from "./actions/fetchPokemon";
import axios from "axios";

const PokemonCard = props => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`${props.pokemons.url}`)
      .then(res => {
        console.log(res, "pokemon data");
        setData(res.data);
      })
      .catch(err => {
        // alert((err.message = "ERROR"));
      });
  }, []);

  let sprites = data.sprites ? data.sprites.front_default : null;

  return (
    <div>
      {console.log(sprites, "var")}
      <div key={props.pokemons.id} className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src={noImage}
              alt='Avatar'
              style={{ width: "300px", height: "350px" }}
            />
            {console.log(data, "poke")}
          </div>
          <div className='flip-card-back'>
            <h1 style={{ textTransform: "capitalize" }}>
              {props.pokemons.name}
            </h1>
            {console.log(props.pokemons.name, "test card")}
            <img style={{ width: "125px" }} src={sprites} alt='pokemon' />

            {/* <a href={props.pokemons.url}> HERE </a>
             */}
            <p>base xp: {data.base_experience}</p>
            <p>height:{data.height} </p>
            <p>weight :{data.weight} </p>
            {console.log(data.sprites, "sprites")}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default PokemonCard;
