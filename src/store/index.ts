import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import weatherReducer from "./reducers/WeatherReducer";
import alertReducer from "./reducers/AlertReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof rootReducer>;
export default store;
