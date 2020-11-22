import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetails = id => async dispatch => {
  const details = axios.get(gameDetailsURL(id));
  const screenshots = axios.get(gameScreenshotsURL(id));
  const [detailsRes, screenshotsRes] = await Promise.all([
    details,
    screenshots,
  ]);

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailsRes.data,
      screen: screenshotsRes.data.results,
    },
  });
};
