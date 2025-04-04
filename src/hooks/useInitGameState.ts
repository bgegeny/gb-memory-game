import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { decrementCountdown } from "../redux/slices/gameSlice";
import { COUNTDOWN_INTERVAL } from "../constants/constants";

export const useGameState = () => {
  const dispatch = useAppDispatch();
  const { countdown, matches, mistakes, isPaused } = useAppSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(
        () => !isPaused && dispatch(decrementCountdown()),
        COUNTDOWN_INTERVAL
      );
      return () => clearTimeout(timer);
    }
  }, [countdown, dispatch, isPaused]);

  return {
    countdown,
    matches,
    mistakes,
  };
};
