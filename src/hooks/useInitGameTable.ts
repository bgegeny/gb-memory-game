import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export const useInitGameTable = () => {
  const cards = useAppSelector((state: RootState) => state.deck.cards);

  return {
    cards,
  };
};
