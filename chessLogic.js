
const rankAndFile = [
    ['wr','wn','wb','wq','wk','wb','wn','wr'],
    ['wp','wp','wp','wp','wp','wp','wp','wp'],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    ['bp','bp','bp','bp','bp','bp','bp','bp'],
    ['br','bn','bb','bq','bk','bb','bn','br'],
];

const letters = "abcdefgh";
let idCode;
let currentPiece=0;

// console.log(`rankAndFile: ${rankAndFile[0][0]}`);

function drawBoard () {
    for (let rank = 0; rank < 8; rank++) {
        for (let fil = 0; fil < 8; fil++) {
            idCode = "#"+letters[fil]+(rank+1);
            // console.log(idCode);
            console.log(`id: ${idCode}, rank: ${rank}, file: ${fil}`);

              console.log(`rankAndFile: ${rankAndFile[fil][rank]}`);
              currentPiece = rankAndFile[rank][fil];
              board = document.querySelector(idCode);
              board.innerHTML = (currentPiece) ? currentPiece : '&nbsp';
            
        }

    }
};

drawBoard();