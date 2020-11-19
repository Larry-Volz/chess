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

//GAME SET UP

const wr = {utfCode: '\u265C',
            color: 'white',
            name: 'rook',
            points: 5.1}
const wn = {utfCode: '\u265E',
            color: 'white',
            name: 'knight',
            points: 3.2 }
const wb = {utfCode: '\u265D',
            color: 'white',
            name: 'bishop',
            points: 3.33 }
const wq = {utfCode: '\u265B',
            color: 'white',
            name: 'queen',
            points: 8.8}
const wk = {utfCode: '\u265A',
            color: 'white',
            name: 'king',
            points: 4}
const wp = {utfCode: '\u265F',
            color: 'white',
            name: 'pawn',
            points: 1}

const br = { utfCode: '\u265C',
            color: 'black',
            name: 'rook',
            points: 5.1}
const bn = {utfCode: '\u265E',
            color: 'black',
            name: 'knight',
            points: 3.2 }
const bb = {utfCode: '\u265D',
            color: 'black',
            name: 'bishop',
            points: 3.33 }
const bq = {utfCode: '\u265B',
            color: 'black',
            name: 'queen',
            points: 8.8 }
const bk = {utfCode: '\u265A',
            color: 'black',
            name: 'king',
            points: 4}
const bp = {utfCode: '\u265F',
            color: 'black',
            name: 'pawn',
            points: 1}  
            
            
const rankAndFile = [
    [wr,wn,wb,wq,wk,wb,wn,wr], //0,0 - 0,7
    [wp,wp,wp,wp,wp,wp,wp,wp],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [bp,bp,bp,bp,bp,bp,bp,bp],
    [br,bn,bb,bq,bk,bb,bn,br], //7,0 - 7,7
];

const letters = "abcdefgh";
let idCode;
let currentPiece=0;
const table = document.querySelector("table");
let allVisable = true;
const movingFrom = [9, 9]; //9 means not being used - 0-7 are legitimate positions
const movingTo = [9, 9];
let lastClickedFR = [9,9];
let pieceObj = 0;
let touchedPiece = "";
let position = "";

// console.log(`rankAndFile: ${rankAndFile[0][0]}`);

function drawBoard () {
    for (let rank = 0; rank < 8; rank++) {
        for (let fil = 0; fil < 8; fil++) {
            idCode = "#"+letters[fil]+(rank+1);
            // console.log(idCode);
            // console.log(`id: ${idCode}, rank: ${rank}, file: ${fil}`);

              currentPiece = rankAndFile[rank][fil];

              board = document.querySelector(idCode);
              board.innerHTML = (currentPiece) ? currentPiece.utfCode : '&nbsp';
            board.style.color = currentPiece.color;

            // console.log(`currentPiece.color: ${currentPiece.color}`)

            
            
            
        }

    }
};

drawBoard();


//----------------------------------------------------------------- GAME LOOP ----------------------------------
table.addEventListener('click', function(event) {

 

    position = event.target.id;

    lastClickedFR = convertIdToRF(position); //returns an array with 2 variables, file and rank
    pieceObj = getPiece (lastClickedFR); //gets the object of the piece at that position in array
    console.log("piece is:", pieceObj);

    //show position on screen
    displayPosition(pieceObj);
   
    //highlight piece

    // movePiece(event);
});

//----------------------------------------------------------------- GAME LOOP ----------------------------------


// function movePiece(event){
    
//     let space = event.target.id.innerText;

//     if (allVisable && space != '&nbsp'){
        
//         //it means a piec was just clicked to move
//         //eventually do an animation to make it stick to the curser here
//         //in the meantime turn it into a ? waiting to see where they are moving it to
//         // space = "To?";

//         console.log('piece here');
//     } else {
//         //stuff
//     }

//     drawBoard();
// }

//convert the div id returned to the rank and file number for the position array
 convertIdToRF = (eId) =>  [letters.indexOf(eId.substr(0,1)), (eId.slice(1)-1)];

// takes array with fil and rank values returns piece object
 getPiece = (fAndR) => rankAndFile[fAndR[1]][fAndR[0]];

 function displayPosition(pieceObj){
    const outPut = document.querySelector('#position');
   

    outPut.innerText = (pieceObj) ? `${pieceObj.color} ${pieceObj.name} at ${position} to? ` : "\u00a0";
}

