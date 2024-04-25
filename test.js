function createPlayer (name){
    
    let score = 0

    const player = `${name}`;
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
    let fieldArray = new Array(9)

    const getGameNumber = () => {return gameNumber}
    const nextGame = () => {gameNumber++}
    const resetGame = () => {gameNumber = 0}
    const nextTurn = () => {turns++}
    const getTurns = () => {return turns};
    const resetTurn = () => {turns = 1}
    const resetArray = () => {fieldArray.fill('',0,9)}

    const player1 = createPlayer(prompt("First Player:"))
    const player2 = createPlayer(prompt("Second Player:"))

    return{getGameNumber,nextGame,player1,player2, resetGame, getTurns, nextTurn, resetTurn,resetArray,fieldArray}
}

const gameBox = document.querySelector(".game")
const start = document.querySelector(".start");
const p1score = document.querySelector('.p1Score')
const p2score = document.querySelector('.p2Score')
start.addEventListener('click',startGame)

function startGame () {
    start.classList.add("hidden")
    gameBox.classList.remove("hidden") 
    ttt = createGame()

    const p1 = document.querySelector(".player1") 
    const p2 = document.querySelector(".player2")
    p1.textContent = `${ttt.player1.getName()}`
    p2.textContent = `${ttt.player2.getName()}`
    gameField()
console.log(ttt.fieldArray[2])

}

// function checkGame (position) {
//     let fields = document.querySelectorAll(".field");
//     let j = 0
//     if(ttt.fieldArray[])
// }

let ttt;

const createFields = () => {
    for (let i = 0; i <= 9; i++) {
        let a = document.createElement('div')
        a.classList.add('field')
        a.setAttribute('data-arr-num',i)
        gameBox.appendChild(a)
    }
}

const nextGame = () =>{
    gameBox.innerHTML=''
    ttt.resetTurn();
    ttt.resetArray()
    gameField()
}
let j = 0
const gameField = () => {
    createFields()
    let fields = document.querySelectorAll(".field");

    fields.forEach(field => {
        const getPosition = () => {
            j++;
            let position = field.getAttribute("data-arr-num");
            field.classList.add("checked");
            // checkGame
            let sign = ttt.getTurns() % 2 ?"X" :"O"
            ttt.nextTurn();

            field.textContent = sign;
            ttt.fieldArray.splice(position,1,sign)
            gameLogic(ttt.fieldArray,position)  
            // console.log('f') 
        }
        field.addEventListener('click', getPosition, {once:true})
    });
      
}




let winner = document.querySelector("#end")

const dialog = document.querySelector("dialog")
const nextGameButton = document.querySelector(".nextGame")
nextGameButton.addEventListener('click',nextGame)

function gameLogic (array,position) {
    const msg = () =>{ 
        if (array[position]==="X"){
            winner.textContent = `Winner is ${ttt.player1.getName()}`
            ttt.player1.won()
            p1score.textContent = ttt.player1.getScore()
        }else{
            winner.textContent = `Winner is ${ttt.player2.getName()}`
            ttt.player2.won()
            p2score.textContent = ttt.player2.getScore()
        }
    dialog.showModal() 
    }
    

    const firstRow = () => {
    if(array[0]===array[1] && array[0]===array[2]) msg()
    else if (j === 9) draw()
    }
        
    const secRow = () => {
        if(array[3]===array[4] && array[3]===array[5])msg()
        else if (j === 9) draw()

    }
    const thirdRow = () => {
        if(array[6]===array[7] && array[6]===array[8])msg()
        else if (j === 9) draw()

    }
    const firstCol = () => {
        if(array[0]===array[3] && array[0]===array[6])msg()
        else if (j === 9) draw()

    }
    const secCol = () => {
        if(array[1]===array[4] && array[1]===array[7])msg()
        else if (j === 9) draw()

    }    
    const thirdCol = () => {
        if(array[2]===array[5] && array[2]===array[8])msg()
        else if (j === 9) draw()

    }
    const firstDg = () => {
        if(array[0]===array[4] && array[0]===array[8])msg()
        else if (j === 9) draw()

    }
    const secDg = () => {
        if(array[2]===array[4] && array[2]===array[6])msg()
        else if (j === 9) draw()

    }
    const draw = () => { 
        winner.textContent = "Draw"
        dialog.showModal()
    }


    switch (position) {
        case '0':
            firstRow()
            firstCol()
            firstDg()
            break;
        case '1':
            firstRow()
            secCol()
            break;
        case '2':
            firstRow();
            thirdCol();
            secDg();
            break;
        case '3':
            secRow();
            firstCol();
            break;
        case '4':
            secRow();
            secCol();
            firstDg()
            secDg();
            break;
        case '5':
            secRow();
            thirdCol();
            break;
        case '6':
            thirdRow();
            firstCol();
            secDg()
            break;
        case '7':
            thirdRow()
            secCol();
            break;
        case '8':
            thirdRow()
            thirdCol()
            firstDg();
        default:
            break;
    }
}