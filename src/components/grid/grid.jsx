import React, { useState } from "react";
import { Empty } from "../empty/empty";
import { Tic } from "../tic/tic";
import { Toe } from "../toe/toe";
import styles from "./grid.module.css";

export const Grid = (props) => {
  const [state, setState] = useState(() => {
    return {
      turn: false,
      hasFinished: false,
      values: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    };
  });
  const checkWin = () => {
    let hasWinResult = false;

    if (
      state.values[0][0] !== null &&
      state.values[0][0] === state.values[0][1] &&
      state.values[0][0] === state.values[0][2]
    ) {
      hasWinResult = true;
    }

    if (
      state.values[1][0] !== null &&
      state.values[1][0] === state.values[1][1] &&
      state.values[1][0] === state.values[1][2]
    ) {
      hasWinResult = true;
    }

    if (
      state.values[2][0] !== null &&
      state.values[2][0] === state.values[2][1] &&
      state.values[2][0] === state.values[2][2]
    ) {
      hasWinResult = true;
    }

    ////доделать, возможно вынести

    if (hasWinResult === true) state.hasFinished = true;
  };
  const checkGameOver = () => {
    let hasEmptyValues = false;
    for (let x = 0; x < state.values.length; x++) {
      for (let y = 0; y < state.values[x].length; y++) {
        if (state.values[x][y] == null) hasEmptyValues = true;
      }
    }
    if (hasEmptyValues === false) state.hasFinished = true;
  };
  const onClick = (y, x) => {
    //check
    if (state.hasFinished) return;
    if (state.values[x][y] == null) {
      if (state.turn === true) {
        state.values[x][y] = 1;
        state.turn = !state.turn;
      } else if (state.turn === false) {
        state.values[x][y] = 0;
        state.turn = !state.turn;
      }
    }
    checkGameOver();
    checkWin();
    setState(state);
  };

  return (
    <div>
      {state.values.map((row, y) => {
        return (
          <div>
            {row.map((value, x) => {
              if (value === 1) return <Tic x={x} y={y} onClick={onClick} />;
              if (value === 0) return <Toe x={x} y={y} onClick={onClick} />;
              return <Empty x={x} y={y} onClick={onClick} />;
            })}
          </div>
        );
      })}
    </div>
  ); // сделать с redux
}; // css
