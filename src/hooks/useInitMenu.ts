import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { pauseGame, reset, resumeGame } from "../redux/slices/gameSlice";
import { resetCards } from "../redux/slices/deckSlice";

export const useInitMenu = () => {
  const dispatch = useAppDispatch();
  const numberOfPairs = useAppSelector(
    (state: RootState) => state.game.numberOfPairs
  );
  const duration = useAppSelector((state: RootState) => state.game.duration);

  const [durationInput, setDurationInput] = useState(duration);
  const [numberOfPairsInput, setNumberOfPairsInput] = useState(numberOfPairs);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleRestart = () => {
    dispatch(resumeGame());
    dispatch(resetCards(numberOfPairsInput));
    dispatch(
      reset({
        duration: durationInput,
        numberOfPairs: numberOfPairsInput,
      })
    );
    setIsSettingsOpen(false);
  };

  const handleOpen = () => {
    dispatch(pauseGame());
    setIsSettingsOpen(true);
  };

  const handleClose = () => {
    dispatch(resumeGame());
    setIsSettingsOpen(false);
  };

  return {
    durationInput,
    numberOfPairsInput,
    isSettingsOpen,
    setDurationInput,
    setNumberOfPairsInput,
    handleRestart,
    handleOpen,
    handleClose,
  };
};
