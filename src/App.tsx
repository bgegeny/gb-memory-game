import { useEffect } from "react";
import "./assets/scss/global.scss";
import GameTable from "./components/GameTable";
import Header from "./components/Header/_Header";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { resetCards } from "./redux/slices/deckSlice";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();
  const numberOfPairs = useAppSelector(
    (state: RootState) => state.game.numberOfPairs
  );

  useEffect(() => {
    dispatch(resetCards(numberOfPairs));
  }, [dispatch, numberOfPairs]);

  return (
    <div className="container">
      <Header />
      <GameTable />
    </div>
  );
}

export default App;
