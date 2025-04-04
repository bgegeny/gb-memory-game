import React from "react";
import cardBack from "../assets/images/card-back.png";
import cardBackHovered from "../assets/images/card-back-hovered.png";
import { useInitCard } from "../hooks/useInitCard";

interface CardProps {
  id: number;
}

const Card: React.FC<CardProps> = ({ id }) => {
  const { card, hovered, setHovered, handleClick } = useInitCard(id);

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
