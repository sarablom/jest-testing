const INITAL_CHESS_BOARD = {
  A8: "black rock",
  B8: "black knight",
  C8: "black bishop",
  D8: "black king",
  E8: "black queen",
  F8: "black bishop",
  G8: "black knight",
  H8: "black rock",
  A7: "black pawn",
  B7: "black pawn",
  C7: "black pawn",
  D7: "black pawn",
  E7: "black pawn",
  F7: "black pawn",
  G7: "black pawn",
  H7: "black pawn",
  A6: "empty",
  B6: "empty",
  C6: "empty",
  D6: "empty",
  E6: "empty",
  F6: "empty",
  G6: "empty",
  H6: "empty",
  A5: "empty",
  B5: "empty",
  C5: "empty",
  D5: "empty",
  E5: "empty",
  F5: "empty",
  G5: "empty",
  H5: "empty",
  A4: "empty",
  B4: "empty",
  C4: "empty",
  D4: "empty",
  E4: "empty",
  F4: "empty",
  G4: "empty",
  H4: "empty",
  A3: "empty",
  B3: "empty",
  C3: "empty",
  D3: "empty",
  E3: "empty",
  F3: "empty",
  G3: "empty",
  H3: "empty",
  H2: "white rock",
  A2: "white pawn",
  B2: "white pawn",
  C2: "white pawn",
  D2: "white pawn",
  E2: "white pawn",
  F2: "white pawn",
  G2: "white pawn",
  H2: "white pawn",
  A1: "white rock",
  B1: "white knight",
  C1: "white bishop",
  D1: "white king",
  E1: "white queen",
  F1: "white bishop",
  G1: "white knight",
  H1: "white rock"
};

let updatedChessBoard = INITAL_CHESS_BOARD;

function moveChessPiece(from, to) {
    
}

//Bonde
function canMovePawn(from, to) {
    let moveFrom = updatedChessBoard[from];
    let moveTo =  updatedChessBoard[to];
    

    console.log(updatedChessBoard[from], moveTo);
    
    if (moveTo !== 'empty') {
        return false;
    } 
    return true;
}

//Torn
function canMoveRock(from, to) {}

//Löpare
function canMoveBishop(from, to) {}

//Drottning
function canMoveQueen(from, to) {}

//Kung
function canMoveKing(from, to) {}

//Häst
function canMoveKnight(from, to) {}

moveChessPiece();

module.exports = {moveChessPiece, canMovePawn}
