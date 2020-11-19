/*
THINGS TO DO
- do movement function where:
    - click 1: piece vanishes from board/curser turns into utfCode of piece
    - click 2: piece placed onto square chosen/curser turns back into arrow
- Add allowed/disallowed moves - objects, use ...spread to go through various moves
as an array to allow or disallow them
- create an undo function
- use localStorage to keep details "sticky"
- use database/login so 2 people can play long-distance
- do insult API
- do actual chess game API
*/

const wr = { utfCode: '\u265C',
            color: 'white'}
const wn = {utfCode: '\u265E',
            color: 'white' }
const wb = {utfCode: '\u265D',
            color: 'white' }
const wq = {utfCode: '\u265B',
            color: 'white' }
const wk = {utfCode: '\u265A',
            color: 'white'}
const wp = {utfCode: '\u265F',
            color: 'white'}

const br = { utfCode: '\u265C',
            color: 'black'}
const bn = {utfCode: '\u265E',
            color: 'black' }
const bb = {utfCode: '\u265D',
            color: 'black' }
const bq = {utfCode: '\u265B',
            color: 'black' }
const bk = {utfCode: '\u265A',
            color: 'black'}
const bp = {utfCode: '\u265F',
            color: 'black'}  
            
            
const rankAndFile = [
    [wr,wn,wb,wq,wk,wb,wn,wr],
    [wp,wp,wp,wp,wp,wp,wp,wp],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [bp,bp,bp,bp,bp,bp,bp,bp],
    [br,bn,bb,bq,bk,bb,bn,br],
];

const letters = "abcdefgh";
let idCode;
let currentPiece=0;
const table = document.querySelector("table");

// console.log(`rankAndFile: ${rankAndFile[0][0]}`);

function drawBoard () {
    for (let rank = 0; rank < 8; rank++) {
        for (let fil = 0; fil < 8; fil++) {
            idCode = "#"+letters[fil]+(rank+1);
            // console.log(idCode);
            // console.log(`id: ${idCode}, rank: ${rank}, file: ${fil}`);

            //   console.log(`rankAndFile: ${rankAndFile[fil][rank]}`);
              currentPiece = rankAndFile[rank][fil];
              board = document.querySelector(idCode);
              board.innerHTML = (currentPiece) ? currentPiece.utfCode : '&nbsp';
            board.style.color = currentPiece.color;

            console.log(`currentPiece.color: ${currentPiece.color}`)
            
            
        }

    }
};


drawBoard();

table.addEventListener('click', function(event) {

    console.log(`target: ${event.target.id}`);
    document.querySelector('#position').innerText = event.target.id;

});