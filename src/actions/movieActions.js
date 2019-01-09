const url = "https://rest-api-broot.glitch.me/api/Andrey";

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(`${url}/products`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export function fetchProduct(id) {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(`${url}/products/${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export function fetchEditProduct(id, item) {
  return dispatch => {
    dispatch(editFetchProductBegin());
    return fetch(`${url}/products/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify(item)
    })
      .then(handleErrors)
      .catch(error => dispatch(editFetchProductsFailure(error)))
      .then(dispatch(fetchProduct(id)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function searchText(text) {
  return dispatch => {
    dispatch(changeText(text));
  };
}

export function maxMovieLength(value) {
  return dispatch => {
    dispatch(changeMovielengthMax(value));
  };
}
export function minMovieLength(value) {
  return dispatch => {
    dispatch(changeMovielengthMin(value));
  };
}

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_EDIT_PRODUCT_BEGIN = "FETCH_EDIT_PRODUCT_BEGIN";
export const FETCH_EDIT_PRODUCT_FAILURE = "FETCH_EDIT_PRODUCT_FAILURE";
export const CHANGE_SEARCHTEXT = "CHANGE_SEARCHTEXT";
export const CHANGE_MOVIELENGTHMAX = "CHANGE_MOVIELENGTHMAX";
export const CHANGE_MOVIELENGTHMIN = "CHANGE_MOVIELENGTHMIN";

export const changeMovielengthMin = value => ({
  type: CHANGE_MOVIELENGTHMIN,
  payload: value
});

export const changeMovielengthMax = value => ({
  type: CHANGE_MOVIELENGTHMAX,
  payload: value
});

export const changeText = text => ({
  type: CHANGE_SEARCHTEXT,
  payload: text
});

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductSuccess = products => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const editFetchProductBegin = () => ({
  type: FETCH_EDIT_PRODUCT_BEGIN
});

export const editFetchProductsFailure = error => ({
  type: FETCH_EDIT_PRODUCT_FAILURE,
  payload: { error }
});
