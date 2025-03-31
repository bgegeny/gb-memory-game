import React from "react";

interface CardProps {
  id: number;
  image: string;
  isFlipped: boolean;
  onClick: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, image, isFlipped, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      {isFlipped ? (
        <img src={image} alt="Card" className="card-image" />
      ) : (
        <div className="card-back"></div>
      )}
    </div>
  );
};

export default Card;
