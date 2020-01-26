import axios from "axios";
import { useEffect } from "react";
import {
  FETCHING_ACTIVITY_FAILURE,
  FETCHING_ACTIVITY_START,
  FETCHING_ACTIVITY_SUCCESS
} from "../../reducers";

export const fetchPokemon = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    .then(res => {
      console.log(res, "pokemon data");
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};
