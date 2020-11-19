

const wr = { utfCode: '\u2656',
            color: 'white'}
const wn = {utfCode: '\u2658',
            color: 'white' }
const wb = {utfCode: '\u2657',
            color: 'white' }
const wq = {utfCode: '\u2655',
            color: 'white' }
const wk = {utfCode: '\u2654',
            color: 'white'}
const wp = {utfCode: '\u2659',
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
              currentPiece = rankAndFile[rank][fil].utfCode;
              board = document.querySelector(idCode);
              board.innerHTML = (currentPiece) ? currentPiece : '&nbsp';
            
        }

    }
};


drawBoard();

table.addEventListener('click', function(event) {

    console.log(`target: ${event.target.id}`);

});