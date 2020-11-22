const initialState = {
  game: {},
  screen: [],
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return { ...state, ...action.payload };
    case "RESET_DETAILS":
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default detailReducer;
