import React from "react";
import { RootState } from "../redux/store";
import Card from "./Card";
import { useAppSelector } from "../redux/hooks";

const GameTable: React.FC = () => {
  const cards = useAppSelector((state: RootState) => state.deck.cards);

  return (
    <div className="game-table">
      {cards.map((card: { id: number }) => (
        <Card key={card.id} id={card.id} />
      ))}
    </div>
  );
};

export default GameTable;
