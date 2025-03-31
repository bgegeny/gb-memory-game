import React from "react";

interface GameTableProps {
  rows: number;
  columns: number;
  onCardClick: (row: number, column: number) => void;
  cards: string[][];
}

const GameTable: React.FC<GameTableProps> = ({
  rows,
  columns,
  onCardClick,
  cards,
}) => {
  return (
    <div className="game-table">
      <table>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => onCardClick(rowIndex, colIndex)}
                >
                  {cards[rowIndex] && cards[rowIndex][colIndex]
                    ? cards[rowIndex][colIndex]
                    : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameTable;
