import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movies from "./reducers/movieReducer";
import watchLater from "./reducers/watchLaterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("watchLater");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("watchLater", serializedState);
  } catch {}
};

const store = createStore(
  combineReducers({ movies, watchLater }),
  loadState(),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    watchLater: store.getState().watchLater
  });
});

window.store = store;

export default store;
