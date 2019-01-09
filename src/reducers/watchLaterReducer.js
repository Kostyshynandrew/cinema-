import { ADD_MOVIE, REMOVE_MOVIE } from "../actions/watchLaterAction";

const initialState = {
  items: [],
  loading: false,
  error: null,
  edit: false
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      const movie = state.items.find(movie => movie.id === action.payload.id);
      if (!movie) {
        return { ...state, items: [...state.items, action.payload] };
      }
      if (movie) {
        return {
          ...state,
          items: state.items.filter(movie => movie.id !== action.payload.id)
        };
      } else {
        return state;
      }

    // case REMOVE_MOVIE:
    //   return { ...state, items: state.items.push(action.payload.products) };

    default:
      return state;
  }
}
