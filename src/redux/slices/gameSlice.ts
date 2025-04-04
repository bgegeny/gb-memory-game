import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameState, IGameResetAction } from "../interfaces/IGameSlice";
import {
  DEFAULT_DURATION,
  DEFAULT_NUMBER_OF_PAIRS,
} from "../../constants/constants";

const initialState: GameState = {
  duration: DEFAULT_DURATION,
  countdown: DEFAULT_DURATION,
  numberOfPairs: DEFAULT_NUMBER_OF_PAIRS,
  matches: 0,
  mistakes: 0,
  isPaused: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    decrementCountdown(state) {
      if (state.countdown > 0) state.countdown -= 1;
    },
    incrementMatches(state) {
      state.matches += 1;
    },
    incrementMistakes(state) {
      state.mistakes += 1;
    },
    reset(state, action: PayloadAction<IGameResetAction>) {
      state.duration = action.payload.duration;
      state.countdown = action.payload.duration;
      state.numberOfPairs = action.payload.numberOfPairs;
      state.matches = 0;
      state.mistakes = 0;
    },
    pauseGame(state) {
      state.isPaused = true;
    },
    resumeGame(state) {
      state.isPaused = false;
    },
  },
});

export const {
  decrementCountdown,
  incrementMatches,
  incrementMistakes,
  reset,
  pauseGame,
  resumeGame,
} = gameSlice.actions;
export default gameSlice.reducer;
