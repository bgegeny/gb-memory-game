import React from "react";
import Card from "./Card";
import { useInitGameTable } from "../hooks/useInitGameTable";

const GameTable: React.FC = () => {
  const { cards } = useInitGameTable();

  return (
    <div className="game-table">
      {cards.map((card: { id: number }) => (
        <Card key={card.id} id={card.id} />
      ))}
    </div>
  );
};

export default GameTable;
