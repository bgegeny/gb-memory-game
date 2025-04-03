import { Middleware } from "redux";
import { RootState } from "../store";
import { checkMatch } from "../slices/deckSlice";
import { incrementMatches, incrementMistakes } from "../slices/gameSlice";

const matchWatcherMiddleware: Middleware<object, RootState> =
  (store) => (next) => (action: unknown) => {
    // @ts-expect-error - action is unknown by default
    if (action.type === checkMatch.type) {
      const state = store.getState();
      const { flippedCards, cards } = state.deck;
      if (flippedCards.length === 2) {
        const [firstId, secondId] = flippedCards;
        const firstCard = cards.find((c) => c.id === firstId);
        const secondCard = cards.find((c) => c.id === secondId);

        if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
          store.dispatch(incrementMatches());
        } else {
          store.dispatch(incrementMistakes());
        }
      }
    }

    return next(action);
  };

export default matchWatcherMiddleware;
