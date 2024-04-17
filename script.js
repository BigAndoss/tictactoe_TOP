function createPlayer (playerNumber, name){
    
    let score = 0

    const player = `${playerNumber}: ${name}`;
    // const setName = () => { player = name}
    const getName = () => {return player}
    const getScore = () => {return score}
    const won = () => {score++}
    const resetScore = () => {score = 0}

    return {getName, getScore, won, resetScore}
}

function createGame (){

    let gameNumber = 0;
    let turns = 1;
    const fieldArray = new Array(9)

    const getGameNumber = () => {return gameNumber}
    const nextGame = () => {gameNumber++}
    const resetGame = () => {gameNumber = 0}
    const nextTurn = () => {turns++}
    const getTurns = () => {return turns};

    const player1 = createPlayer(1,"Andoss")
    const player2 = createPlayer(2,"Landi")

    return{getGameNumber,nextGame,player1,player2, resetGame, getTurns, nextTurn, fieldArray}
}

const gameBox = document.querySelector(".game")
const startGame = document.querySelector(".start");
startGame.addEventListener('click',() => {
  startGame.classList.add("hidden")
  gameBox.classList.remove("hidden")

})

const ttt = createGame()

function switchSign (){
    let turns;
    ttt.getTurns() % 2 ? turns = "X" :turns ="O"
    ttt.nextTurn();
    return turns;
}

let fields = document.querySelectorAll(".field");
fields.forEach(field => {
    function getPosition () {
        let position = field.getAttribute("data-arr-num");
        field.classList.add("checked");
        let sign = switchSign()
        field.textContent = sign;
        ttt.fieldArray.splice(position,1,sign)
        console.log(ttt.fieldArray)
    }
    field.addEventListener('click', getPosition, {once:true})
});