import P from "./components/paragraph";
import Post from "./components/post";
import Board from "./components/board";
import React, { useState } from "react";
import PieceCustomization from "./components/piece-customization";

export default function Home() {
  const [boardSize, setBoardSize] = useState(8);
  const [pieceColor, setPieceColor] = useState("");
  const [pieceShape, setPieceShape] = useState("");
  return (
    <div className="main">
      <input
        placeholder="Enter board size"
        onChange={(e) => {
          setBoardSize(e.target.value);
        }}
      ></input>
      <Board size={boardSize} pieceShape={pieceShape} pieceColor={pieceColor} />
      <div className="piece-customizer">
        <div>
          <p>Please select your Piece color:</p>
          <input
            type="radio"
            id="white"
            name="color"
            onChange={(e) => {
              setPieceColor(e.target.value);
            }}
            value="white"
          />
          <label for="color">White</label>
          <br />
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            onChange={(e) => {
              setPieceColor(e.target.value);
            }}
          />
          <label for="color">Black</label>
        </div>
        <div>
          <p>Please select your Piece shape:</p>
          <input
            type="radio"
            id="square"
            name="square"
            value="square"
            onChange={(e) => {
              setPieceShape(e.target.value);
            }}
          />
          <label for="square">Square</label>
          <br />
          <input
            type="radio"
            id="circle"
            name="circle"
            value="circle"
            onChange={(e) => {
              setPieceShape(e.target.value);
            }}
          />
          <label for="circle">Circle</label>
        </div>
      </div>
      <style jsx>{`
        input {
          font-size: 16px;
          padding: 8px;
          margin-bottom: 10px;
        }
        .main {
          margin: auto;
          padding: 15px;
          width: fit-content;
          text-align: center;
          background-color: #d9d9d9;
        }
        .piece-customizer {
          display: "flex";
          flex-direction: "row";
          align-items:'center;
        }
        hr {
          width: 100px;
          border-width: 0;
          margin: 20px auto;
          text-align: center;
        }

        hr::before {
          content: "***";
          color: #ccc;
        }
      `}</style>
    </div>
  );
}
