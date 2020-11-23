import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

export const loadGames = () => async dispatch => {
  const popular = axios.get(popularGamesURL());
  const upcoming = axios.get(upcomingGamesURL());
  const news = axios.get(newGamesURL());
  const [popularRes, upcomingRes, newRes] = await Promise.all([
    popular,
    upcoming,
    news,
  ]);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      populars: popularRes.data.results,
      upcomings: upcomingRes.data.results,
      news: newRes.data.results,
    },
  });
};

export const searchGames = game_name => async dispatch => {
  const searchedRes = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "SEARCH_GAMES",
    payload: searchedRes.data.results,
  });
};
