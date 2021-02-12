import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  blogDetailsReducer,
  blogListReducer,
} from "./reducers/blogReducers.js";
import { bookmarkReducer } from "./reducers/bookmarkReducers.js";

const reducer = combineReducers({
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  bookmark: bookmarkReducer,
});

const bookmarkItemsFromStorage = localStorage.getItem("bookmarkItems")
  ? JSON.parse(localStorage.getItem("bookmarkItems"))
  : [];

const initialState = {
  bookmark: { bookmarkItems: bookmarkItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
