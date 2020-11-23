const initialState = {
  populars: [],
  news: [],
  upcomings: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, ...action.payload };
    case "SEARCH_GAMES":
      return { ...state, searched: action.payload };
    case "CLEAR_SEARCH_GAMES":
      return { ...state, searched: [] };
    default:
      return state;
  }
};

export default gamesReducer;
