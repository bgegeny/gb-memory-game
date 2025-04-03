import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emojis } from "../../constants/constants";
import { shuffleArray } from "../../utils/cardHelpers";

interface Card {
  id: number;
  emoji: string; // Emoji for the card front
  flipped: boolean;
  matched: boolean;
}

interface CardState {
  cards: Card[];
  flippedCards: number[]; // IDs of currently flipped cards
}

const initializeCards = (numberOfPairs: number): Card[] => {
  const shuffledEmojis = shuffleArray(emojis).slice(0, numberOfPairs);
  const cards: Card[] = shuffledEmojis.flatMap((emoji, index) => [
    { id: index * 2, emoji, flipped: false, matched: false },
    { id: index * 2 + 1, emoji, flipped: false, matched: false },
  ]);
  return shuffleArray(cards);
};

const initialState: CardState = {
  cards: [],
  flippedCards: [],
};

const deckSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    flipCard(state, action: PayloadAction<number>) {
      if (state.flippedCards.length === 2) return;
      const cardId = action.payload;
      const card = state.cards.find((c) => c.id === cardId);
      if (card && !card.matched) {
        card.flipped = !card.flipped;

        if (card.flipped) {
          state.flippedCards.push(cardId);
        } else {
          state.flippedCards = state.flippedCards.filter((id) => id !== cardId);
        }
      }
    },
    checkMatch(state) {
      if (state.flippedCards.length === 2) {
        const [firstId, secondId] = state.flippedCards;
        const firstCard = state.cards.find((c) => c.id === firstId);
        const secondCard = state.cards.find((c) => c.id === secondId);

        if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
          firstCard.matched = true;
          secondCard.matched = true;
        } else {
          firstCard!.flipped = false;
          secondCard!.flipped = false;
        }

        state.flippedCards = [];
      }
    },
    resetCards(state, action: PayloadAction<number>) {
      state.cards = initializeCards(action.payload);
      state.flippedCards = [];
    },
  },
});

export const { flipCard, checkMatch, resetCards } = deckSlice.actions;
export default deckSlice.reducer;
