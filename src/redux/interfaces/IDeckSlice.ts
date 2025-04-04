export interface Card {
  id: number;
  emoji: string; // Emoji for the card front
  flipped: boolean;
  matched: boolean;
}

export interface CardState {
  cards: Card[];
  flippedCards: number[]; // IDs of currently flipped cards
}
