//GAME OF LIVE

//listeners
const gameBoard = document.querySelector(".game-board");

const generateBoard = () => {
  for (let i = 0; i < 12; i++) {
    const row = document.createElement("div");
    gameBoard.appendChild(row);
    row.classList.add("row", `row-${i}`);

    for (let j = 0; j < 12; j++) {
      const col = document.createElement("div");
      row.appendChild(col);
      col.classList.add("col", `${i}-${j}`);
    }
  }
};
generateBoard();

//1r crear tablero.
let board = [];
function createBoard(cells) {
  for (let i = 0; i < cells; i++) {
    board.push([]);
    for (let j = 0; j < cells; j++) {
      board[i].push(0);
    }
  }
  return board;
}

board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
let newBoard = [];
let liveNeighbors = 0;
let cellState = 0;

//2-Analizar en que posicion esta cada elemento
function boardPosition(currentBoard) {
  newBoard = [];
  for (let i = 0; i < currentBoard.length; i++) {
    newBoard.push([]);
    for (let j = 0; j < currentBoard[i].length; j++) {
      if (i === 0 && j === 0) {
        liveNeighborsLeftTopCorner(currentBoard, i, j);

        //newBoard[i].push(1);
      } else if (i === 0 && j === currentBoard[i].length - 1) {
        liveNeighborsRightTopCorner(currentBoard, i, j);
        // newBoard[i].push(2);
      } else if (
        i === currentBoard.length - 1 &&
        j === currentBoard[i].length - 1
      ) {
        liveNeighborsRightBottomCorner(currentBoard, i, j);
        // newBoard[i].push(3);
      } else if (i === currentBoard.length - 1 && j === 0) {
        liveNeighborsLeftBottomCorner(currentBoard, i, j);
        // newBoard[i].push(4);
      } else if (i > 0 && i < currentBoard[i].length - 1 && j === 0) {
        liveNeighborsLeft(currentBoard, i, j);
        //newBoard[i].push(5);
      } else if (i === 0 && j > 0 && j < currentBoard[i].length - 1) {
        liveNeighborsTop(currentBoard, i, j);

        //newBoard[i].push(6);
      } else if (
        i > 0 &&
        i < currentBoard[i].length - 1 &&
        j === currentBoard.length - 1
      ) {
        liveNeighborsRight(currentBoard, i, j);
        //newBoard[i].push(7);
      } else if (
        i === currentBoard.length - 1 &&
        j > 0 &&
        j < currentBoard[i].length - 1
      ) {
        liveNeighborsBottom(currentBoard, i, j);
        //newBoard[i].push(8);
      } else {
        liveNeighborsCenter(currentBoard, i, j);
        // newBoard[i].push(9);
      }
      cellsState(liveNeighbors, cellState);
      newBoard[i].push(newCellState);
    }
  }
  board = newBoard;
  return board;
}

//3-Aplicar la funcion segun su posicionamiento i encontrar todos los vecinos vivos

//3.1 -Esquina 0-0

//console.log(liveNeighborsLeftTopCorner(board, 0, 0));
function liveNeighborsLeftTopCorner(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i][j + 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}

//3.2 - ESquina 0-y.length
function liveNeighborsRightTopCorner(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j],
    currentCell[i][j - 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}
//3.3 - ESquina x.length-0
function liveNeighborsLeftBottomCorner(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j + 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}
//3.4 - Esquina x.length-y.length
function liveNeighborsRightBottomCorner(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i - 1][j],
    currentCell[i - 1][j - 1],
    currentCell[i][j - 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}
//3.5 - lado superior

function liveNeighborsTop(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i][j - 1],
    currentCell[i][j + 1],
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}
//3.6 - lado inferior
function liveNeighborsBottom(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i - 1][j - 1],
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j - 1],
    currentCell[i][j + 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}
//3.7 - lado derecho
function liveNeighborsRight(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i - 1][j - 1],
    currentCell[i - 1][j],
    currentCell[i][j - 1],
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}
//3.8 - lado izquierdo
function liveNeighborsLeft(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j + 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}

//3.9 - centro
function liveNeighborsCenter(currentCell, i, j) {
  let neighbors = [];
  neighbors.push(
    currentCell[i - 1][j - 1],
    currentCell[i - 1][j],
    currentCell[i - 1][j + 1],
    currentCell[i][j - 1],
    currentCell[i][j + 1],
    currentCell[i + 1][j - 1],
    currentCell[i + 1][j],
    currentCell[i + 1][j + 1]
  );

  cellState = currentCell[i][j];
  liveNeighbors = 0;
  liveNeighbors = neighbors.reduce(
    (accumulator, neighbor) => accumulator + neighbor,
    0
  );
  return liveNeighbors, cellState;
}

//4-Analizar segun los vecinos vivos que tienen que les passa.
function cellsState(neighbors, state) {
  if (state === 1) {
    if (neighbors >= 2 && neighbors < 4) {
      newCellState = 1;
    } else if (neighbors < 2 || neighbors >= 4) {
      newCellState = 0;
    }
  } else {
    if (neighbors === 3) {
      newCellState = 1;
    } else {
      newCellState = 0;
    }
  }
  return newCellState;
}

//timer;
/* setInterval(() => {
  console.log(boardPosition(board));
  //return newBoardLoop
}, 1000); */

module.exports = {
  cellsState,
  boardPosition,
  liveNeighborsBottom,
  liveNeighborsCenter,
  liveNeighborsLeft,
  liveNeighborsLeftBottomCorner,
  liveNeighborsLeftTopCorner,
  liveNeighborsRight,
  liveNeighborsRightBottomCorner,
  liveNeighborsRightTopCorner,
  liveNeighborsTop,
  createBoard,
};
