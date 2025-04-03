import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  duration: number;
  countdown: number;
  numberOfPairs: number;
  matches: number;
  mistakes: number;
}

const initialState: GameState = {
  duration: 10,
  countdown: 10,
  numberOfPairs: 24,
  matches: 0,
  mistakes: 0,
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
    reset(state) {
      state.countdown = state.duration;
      state.matches = 0;
      state.mistakes = 0;
    },
  },
});

export const {
  decrementCountdown,
  incrementMatches,
  incrementMistakes,
  reset,
} = gameSlice.actions;
export default gameSlice.reducer;
