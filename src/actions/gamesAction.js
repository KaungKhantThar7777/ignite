import axios from "axios";
import { popularGamesURL } from "../api";

export const loadGames = () => async dispatch => {
  const res = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_POPULAR_GAMES",
    payload: { popular: res.data.results },
  });
};
