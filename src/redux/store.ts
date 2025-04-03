import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import deckReducer from "./slices/deckSlice";
import matchWatcherMiddleware from "./middleware/matchWatcherMiddleware";

const rootReducer = combineReducers({
  game: gameReducer,
  deck: deckReducer,
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(matchWatcherMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
