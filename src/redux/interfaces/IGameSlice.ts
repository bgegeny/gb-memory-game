export interface GameState {
  duration: number;
  countdown: number;
  numberOfPairs: number;
  matches: number;
  mistakes: number;
  isPaused: boolean;
}

export interface IGameResetAction {
  duration: number;
  numberOfPairs: number;
}
