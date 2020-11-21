import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

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
