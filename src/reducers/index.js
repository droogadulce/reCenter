const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CENTER_DETAIL':
      return {
        ...state,
        detail:
          state.centers.find(item => item.id === Number(action.payload)) || {},
      };
    default:
      return state;
  }
};

export default reducer;
