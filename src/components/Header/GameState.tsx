// filepath: src/components/Header/GameData.tsx
import React from "react";
import { useGameState } from "../../hooks/useInitGameState";

const GameState: React.FC = () => {
  const { countdown, matches, mistakes } = useGameState();

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
