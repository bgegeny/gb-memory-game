import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { checkMatch, flipCard } from "../redux/slices/deckSlice";

export const useInitCard = (id: number) => {
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

  return {
    card,
    hovered,
    setHovered,
    handleClick,
  };
};
