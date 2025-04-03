import React, { useState } from "react";
import { RootState } from "../redux/store";
import { flipCard, checkMatch } from "../redux/slices/deckSlice";
import cardBack from "../assets/images/card-back.png";
import cardBackHovered from "../assets/images/card-back-hovered.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface CardProps {
  id: number;
}

const Card: React.FC<CardProps> = ({ id }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useAppDispatch();
  const card = useAppSelector((state: RootState) =>
    state.deck.cards.find((c) => c.id === id)
  );
  const counter = useAppSelector((state: RootState) => state.game.countdown);

  const handleClick = () => {
    if (counter <= 0) return;
    setHovered(false);
    if (!card?.flipped && !card?.matched) {
      dispatch(flipCard(id));
      setTimeout(() => {
        dispatch(checkMatch());
      }, 1000);
    }
  };

  return (
    <div
      className={`card ${card?.flipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      {card?.flipped || card?.matched ? (
        <div className="card-emoji">{card?.emoji}</div>
      ) : (
        <img
          src={hovered ? cardBackHovered : cardBack}
          alt={`Card ${id}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="card-back-image"
        />
      )}
    </div>
  );
};

export default Card;
