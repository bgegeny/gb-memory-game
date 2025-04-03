// filepath: src/components/Header/GameData.tsx
import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { decrementCountdown } from "../../redux/slices/gameSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const GameState: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countdown, matches, mistakes, isPaused } = useAppSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(
        () => !isPaused && dispatch(decrementCountdown()),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [countdown, dispatch, isPaused]);

  return (
    <div className="game-state-container">
      <div className="countdown-counter">{countdown}</div>
      <div className="matches-mistakes">
        <div>
          <strong>{matches} matches</strong>
        </div>
        <div>
          <strong>{mistakes} mistakes</strong>
        </div>
      </div>
    </div>
  );
};

export default GameState;
