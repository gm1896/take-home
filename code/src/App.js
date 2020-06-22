import P from "./components/paragraph";
import Post from "./components/post";
import Board from "./components/board";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
export default function Home() {
  const [boardSize, setBoardSize] = useState(8);
  return (
    <div className="main">
      <input
        placeholder="Enter board size"
        onChange={(e) => {
          setBoardSize(e.target.value);
        }}
      ></input>
      <Board size={boardSize} />
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