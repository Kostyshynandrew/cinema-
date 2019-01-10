import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_EDIT_PRODUCT_FAILURE,
  CHANGE_SEARCHTEXT,
  CHANGE_MOVIELENGTHMAX,
  CHANGE_MOVIELENGTHMIN
} from "../actions/movieActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  edit: false,
  searchText: "",
  movieLengthMax: "3000",
  movieLengthMin: "0"
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [action.payload.products]
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case FETCH_EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case CHANGE_SEARCHTEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case CHANGE_MOVIELENGTHMAX:
      return {
        ...state,
        movieLengthMax: action.payload
      };
    case CHANGE_MOVIELENGTHMIN:
      return {
        ...state,
        movieLengthMin: action.payload
      };

    default:
      return state;
  }
}
