// filepath: src/components/Header/GameData.tsx
import React, { useEffect } from "react";
import { RootState } from "../../redux/store";
import { decrementCountdown } from "../../redux/slices/gameSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const GameState: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countdown, matches, mistakes } = useAppSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => dispatch(decrementCountdown()), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, dispatch]);

  return (
    <div>
      <div>
        <strong>Countdown:</strong> {countdown}s
      </div>
      <div>
        <strong>Matches:</strong> {matches}
      </div>
      <div>
        <strong>Mistakes:</strong> {mistakes}
      </div>
    </div>
  );
};

export default GameState;
