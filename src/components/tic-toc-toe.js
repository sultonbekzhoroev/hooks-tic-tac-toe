import { useState } from "react";
import "../App.css";
function TictacToe() {
  const [board, setBoard] = useState([
    { id: 1, field: "1" },
    { id: 2, field: "2" },
    { id: 3, field: "3" },
    { id: 4, field: "4" },
    { id: 5, field: "5" },
    { id: 6, field: "6" },
    { id: 7, field: "7" },
    { id: 8, field: "8" },
    { id: 9, field: "9" },
  ]);

  const [turn, setTurn] = useState(false);
  const handlerClick = (id) => {
    const simbol = turn ? "X" : "O";
    const newBord = [...board];
    newBord[id - 1]["field"] = simbol;

    setBoard(newBord);
    setTurn(!turn);
  };
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((square) => {
          return (
            <div
              key={"square" + square.id}
              style={{
                width: "130px",
                border: "1px solid black",
                display: "inline-block",
                height: "130px",
                fontSize: "3rem",
              }}
              onClick={() => handlerClick(square.id)}
            >
              {square.field}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TictacToe;
