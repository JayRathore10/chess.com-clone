const socket = io();
const chess = new Chess();
const boardElement = document.querySelector("#chessboard");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
  const board = chess.board();
  boardElement.innerHTML = "";

  board.forEach((row, rowIndex) => {
    row.forEach((square, squareIndex) => {
      // Make the black and white square pattern on the board 

      // by the index of row and col of the square in the board 
      // if it even then light and if it odd then black

      const squareElement = document.createElement("div");
      squareElement.classList.add("square",
        (rowIndex + squareIndex) % 2 === 0 ? "light" : "dark"
      );

      squareElement.dataset.row = rowIndex;
      squareElement.dataset.col = squareIndex;

      // if square contain the piece of chess 
      // then we decided the color of the piece 

      if (square) {
        const pieceElement = document.createElement("div");
        pieceElement.classList.add("piece",
          square.color === "w" ?
            "white" :
            "black");
        pieceElement.innerText = getPieceUnicode(square);
        pieceElement.draggable = playerRole === square.color;

        pieceElement.addEventListener("dragstart", (e) => {
          if (pieceElement.draggable) {
            draggedPiece = pieceElement;
            sourceSquare = { row: rowIndex, col: squareIndex };
            e.dataTransfer.setData("text/plain", "");
          }
        });

        pieceElement.addEventListener("dragned", () => {
          draggedPiece = null;
          sourceSquare = null;
        });

        squareElement.append(pieceElement);
      };

      squareElement.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      squareElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedPiece) {
          const targetSource = {
            row: parseInt(squareElement.dataset.row),
            col: parseInt(squareElement.dataset.col)
          }
          handleMove(sourceSquare , targetSource);
        }
      })
      boardElement.appendChild(squareElement);
    });
  });

}


const handleMove = (source , target) => {
  const move = {
    from : `${String.fromCharCode(97 + source.col)}${ 8 - source.row}`, 
    to : `${String.fromCharCode(97 + target.col)}${ 8 - target.row}`, 
    promotion : 'q' , 
  } 

  socket.emit("move" , move);

}

const getPieceUnicode = (piece) => {
  const unicodePieces = {
        K: "♔",  // King
        Q: "♕",  // Queen
        R: "♖",  // Rook
        B: "♗",  // Bishop
        N: "♘",  // Knight
        p: "♙",  // Pawn
        k: "♚",  // King
        q: "♛",  // Queen
        r: "♜",  // Rook
        b: "♝",  // Bishop
        n: "♞",  // Knight
        P: "♟"   // Pawn
  }
  return unicodePieces[piece.type] || "";
}

socket.on("playerRole" , function(role){
  playerRole = role ;
  renderBoard();
})

socket.on("spectatorRole"  , function(){
  playerRole = null;
  renderBoard();
})

socket.on("boardState", function(fen){
  chess.load(fen);
  renderBoard();
})

socket.on("move" , function(move){
  chess.move(move);
  renderBoard();
});
