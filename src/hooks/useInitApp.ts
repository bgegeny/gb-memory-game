import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { resetCards } from "../redux/slices/deckSlice";

export const useInitApp = () => {
  const dispatch = useAppDispatch();
  const numberOfPairs = useAppSelector(
    (state: RootState) => state.game.numberOfPairs
  );

  useEffect(() => {
    dispatch(resetCards(numberOfPairs));
  }, [dispatch, numberOfPairs]);
};
