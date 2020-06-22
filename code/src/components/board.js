import React from 'react';
export default function Board({ size }) {
  return (
    <p>
      <div>{renderBoard(size)}</div>
      <style jsx>{`
        p {
          font: 13px Helvetica, Arial;
          margin: 10px 0;
        }
      `}</style>
    </p>
  );

  function renderBoard(size) {
    let view = [];
    for (let i = 1; i <= size; i++) {
      let row = [];
      for (let j = 1; j <= size; j++) {
        let bgColor = "";
        if ((i + j) % 2 === 0) {
          bgColor = "black";
        } else {
          bgColor = "white";
        }
        row.push(
          <div
            style={{
              backgroundColor: bgColor,
              height: size * 10 + "px",
              width: size * 10 + "px",
            }}
          ></div>
        );
      }
      view.push(
        <div style={{ flexDirection: "row", display: "flex" }}>{row}</div>
      );
    }
    return view;
  }
}
