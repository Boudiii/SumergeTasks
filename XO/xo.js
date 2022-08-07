const allCells = document.querySelectorAll("[data]");
const XClass = 'cross'
const CircleClass = 'c'
const button = document.getElementById("restart")
const cont = document.getElementById("cont");
let circleTurn = false;
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
allCells.forEach(cell => {
  cell.addEventListener('click', handleClick)
})
button.addEventListener('click',handleRestart)
console.log(allCells)
function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CircleClass : XClass;
  const clickedCellIndex = parseInt(
    cell.getAttribute('data-cell-index')
  );
  playTurn(cell,currentClass);
  if (gameState[clickedCellIndex] !== "" ) {
    return;
  }
  gameState[clickedCellIndex] = currentClass == CircleClass ? "C" : "X";
  console.log(gameState);
  handleResult();
  switchTurns(cell);

}
function playTurn(cell,move) {
  cell.classList.add(move)
  cell.classList.toggle("hide");
  
}
function switchTurns(cell) {
  allCells.forEach(c => {
    if (c == cell) {
      c.removeAttribute("[data]");
    }else if(!c.classList.contains("cross") && !c.classList.contains("c")){
      c.children[0].classList.toggle("hide");
      c.children[1].classList.toggle("hide");
    }
  })
  circleTurn = !circleTurn;
}
function handleResult() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];
      if (a === '' || b === '' || c === '') {
          continue;
      }
      if (a === b && b === c) {
          roundWon = true;
          break
      }
  }
if (roundWon) {
  document.getElementById("won").style.display = "flex";
  cont.style.display = "none";
  startConfetti();
      return;
}
let roundDraw = !gameState.includes("");
if (roundDraw) {
  console.log("draw");
    return;
}
}
function handleRestart() {
  location.reload();
}