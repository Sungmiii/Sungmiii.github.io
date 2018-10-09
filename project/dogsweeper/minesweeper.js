document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
/* var board = {
  cells:[ 
      {row:0,col:0,isMine:false,hidden:true},
      {row:2,col:2,isMine:true,hidden:true},
      {row:0,col:1,isMine:false,hidden:true},
      {row:2,col:1,isMine:true,hidden:true},
      {row:1,col:2,isMine:false,hidden:true},
      {row:3,col:2,isMine:true,hidden:true},
      {row:2,col:3,isMine:true,hidden:true},
      {row:3,col:1,isMine:false,hidden:true},
      {row:1,col:0,isMine:true,hidden:true},
      {row:4,col:3,isMine:false,hidden:true},
      {row:2,col:4,isMine:true,hidden:true},
      {row:4,col:2,isMine:false,hidden:true},
      {row:3,col:4,isMine:true,hidden:true},
      {row:4,col:1,isMine:false,hidden:true},
      {row:1,col:4,isMine:true,hidden:true},
      {row:3,col:3,isMine:true,hidden:true}
  ]
} */

//function board create 
var board = {cells:[]};
var rowcol = 5;
function creatGame() {
  for(let r=0; r<rowcol; r++){
    for(let c=0; c<rowcol; c++){
      board.cells.push({
        row:r,
        col:c,
        isMine: !!Math.floor(Math.random()*1.4),
        isMarked:false,
        hidden:true
    })
    }
  } 
}
creatGame();




function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var i=0; i<board.cells.length; i++){
  board.cells[i].surroundingMines= countSurroundingMines(board.cells[i]);
  document.addEventListener('click',checkForWin);
  document.addEventListener('contextmenut',checkForWin);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
var music = document.getElementById('music');
var cellinside = board.cells
function checkForWin () {
  for(let w = 0; w < cellinside.length; w++){
     if(cellinside[w].isMine === true && cellinside[w].isMarked === false){
       return;
     }else if(cellinside[w].isMine === false && cellinside[w].hidden === true){
       return;
     }
   }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
 for(var x=0; x<surrounding.length; x++){
  if(surrounding[x].isMine === true) {
    count++
  }
 }return count
}

// reset button
function resetfunction() {
  document.getElementById('reset',location.reload())
}
// audio try: not working yet ... :( alright this code is not working this jsfile, working in lib.js 
/* function playMusic(){
  var music = document.getElementById('music');
  for(let bar =0; bar<board.cells.length; bar++){
    if(board.cells[bar].isMine === true){
      music.play();
    }
  }
} */
