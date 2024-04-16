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

    const getGameNumber = () => {return gameNumber}
    const nextGame = () => {gameNumber++}
    const resetGame = () => {gameNumber = 0}

    const player1 = createPlayer(1,"Andoss")
    const player2 = createPlayer(2,"Landi")

    return{getGameNumber,nextGame,player1,player2, resetGame}
}