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

const newGame = createGame();
const p1 = newGame.player1; 
const p2 = newGame.player2; 

function checkScore (){ 
    if (p1.getScore() > 3){
        // const ojb = {
        //     a: newGame.nextGame(),
        //     b:newGame.getGameNumber()
        // }  
        // return ojb.b, "player 1 won"
        // return {newGame.nextGame()}
    }else if (p2.getScore() > 3){
        newGame.nextGame()
        p2.resetScore()
        let a = newGame.getGameNumber()
        return a 
    }
}
p2.won()
p2.won()
p2.won()
p2.won()
console.log(checkScore())

p2.won()
p2.won()
p2.won()
p2.won()
p2.won()
p2.won()
console.log(checkScore())

p2.won()
p2.won()
p2.won()

p2.won()
p2.won()
p2.won()
console.log(checkScore())
