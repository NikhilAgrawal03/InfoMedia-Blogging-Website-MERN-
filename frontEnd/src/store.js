import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  blogDetailsReducer,
  blogListReducer,
} from "./reducers/blogReducers.js";

const reducer = combineReducers({
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
