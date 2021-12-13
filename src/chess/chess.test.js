const { moveChessPiece, canMovePawn } = require('./chess.js');

describe('chess function', () => {
    // it('en pjäs får flyttas till en tom ruta, förutsatt att mellanliggande rutor är tomma', () => {

    // })

    // it('en pjäs får flyttas till en ruta där det står en annan pjäs av motsatt färg', () => {

    // })

    it('bonden går ett steg framåt, eller ett steg diagonalt framåt, om den kan slå en pjäs', () => {
        const startPosition = 'E7';
        const destination = 'E6';
        
        const chessMove = canMovePawn(startPosition, destination);

        expect(chessMove).toBe(true);
    })

    // it('tornet går så många steg det vill, antingen vertikalt eller horisontellt', () => {

    // })

    // it('löparen går så många steg den vill, diagonalt', () => {

    // })

    // it('drottningen går antingen som tornet eller löparen', () => {

    // })

    // it('kungen går ett steg i vilken riktning som helst', () => {

    // })

    // it('hästen går två steg fram, och ett åt sidan; den hoppar över mellanliggande rutor', () => {

    // })
})

// let lowerLeft = { x: 0, y: 0 }, upperRight = { x: 7, y: 7 };
// Exempel: funktion för att flytta löparen
// function canMoveBishop(from, to) { .. }
// let isAllowed = canMoveBishop({ x: 2, y: 3 }, { x: 3, y: 4 })  // true


