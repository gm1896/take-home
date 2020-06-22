import React from 'react';
export default function BoardPiece({ boardSize, shape, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: boardSize * 5 + "px",
        width: boardSize * 5 + "px",
        margin: "auto",
        borderRadius: shape == "circle" ? (boardSize * 5) / 2 + "px" : 0 + "px",
      }}
    ></div>
  );
}
