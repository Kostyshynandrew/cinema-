export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

export function AddToWatchLater(product) {
  return dispatch => {
    dispatch(watchLater(product));
  };
}

const watchLater = product => ({
  type: ADD_MOVIE,
  payload: product
});
