const initialState = {
  popular: [],
  new: [],
  upcoming: [],
  search: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POPULAR_GAMES":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default gamesReducer;
