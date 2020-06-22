import React from 'react';
export default function PieceCustomization({ onChangeColor, onChangeShape }) {
  return (
    <div>
      <h1>{"Piece Customization"}</h1>
      <div className="piece-customizer">
        <div
          style={{
            backgroundColor: "green !important",
            height: null,
            width: null,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <p>Please select your Piece color:</p>
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Female</label>
          <br />
          <input type="radio" id="other" name="gender" value="other" />
          <label for="other">Other</label>
        </div>
        <div style={{ backgroundColor: "green" }}>
          <p>Please select your Piece shape:</p>
        </div>
      </div>
      <style jsx>{`
        .main {
          font: 15px Helvetica, Arial;
          border: 1px solid #eee;
          padding: 0 10px;
        }
        .piece-customizer {
          display: "flex";
          flex-direction: "row";
        }
        .pc-block {
          background-color: "transparent !important";
        }
        h1 {
          font-size: 20px;
          font-weight: bold;
          margin: 10px 0;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}
