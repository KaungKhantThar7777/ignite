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

    default:
      return state;
  }
};

export default gamesReducer;
