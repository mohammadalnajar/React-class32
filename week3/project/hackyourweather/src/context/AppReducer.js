export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CITY':
      return {
        ...state,
        cities: [action.payload, ...state.cities],
      };
    case 'DEL_CITY':
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case 'LOADING_SET':
      return {
        ...state,
        loading: {
          status: action.payload,
        },
      };
    case 'ERROR_SET':
      return {
        ...state,
        error: { status: true, msg: action.payload },
      };
    case 'ERROR_REMOVE':
      return {
        ...state,
        error: { status: false },
      };
    default:
      return state;
  }
};
