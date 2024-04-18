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
}

let ttt;


let fields = document.querySelectorAll(".field");

const nextGame = () =>{
    fields.forEach(field=>{
        field.classList.remove("checked")
        field.textContent = ""
        field.removeEventListener('click',gameField.getPosition)
        ttt.resetTurn();
        ttt.resetArray()
    })
    gameField()
}

const gameField = () => {
    fields.forEach(field => {
        const getPosition = () => {
            let position = field.getAttribute("data-arr-num");
            field.classList.add("checked");
    
            let sign = ttt.getTurns() % 2 ?"X" :"O"
            ttt.nextTurn();

            field.textContent = sign;
            ttt.fieldArray.splice(position,1,sign)
            // console.log(ttt.fieldArray)
            gameLogic(ttt.fieldArray,position)
            // console.log(ttt.fieldArray)
            // field.hasAttributes()
            console.log(ttt.getTurns(),sign)
            console.log(ttt.fieldArray)
    
        }
        field.addEventListener('click', getPosition, {once:true})
        return getPosition
    });
      
}




let winner = document.querySelector("#end")

const dialog = document.querySelector("dialog")
const nextGameButton = document.querySelector(".nextGame")
nextGameButton.addEventListener('click',nextGame)

function gameLogic (array,position) {
    const firstRow = () => {
        if(array[0]===array[1] && array[0]===array[2]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()


        } 
    }
    const secRow = () => {
        if(array[3]===array[4] && array[3]===array[5]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()

        } 
    }
    const thirdRow = () => {
        if(array[6]===array[7] && array[6]===array[8]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()

        } 
    }
    const firstCol = () => {
        if(array[0]===array[3] && array[0]===array[6]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()

        } 
    }
    const secCol = () => {
        if(array[1]===array[4] && array[1]===array[7]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()

        } 
    }    
    const thirdCol = () => {
        if(array[2]===array[5] && array[2]===array[8]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()

        } 
    }
    const firstDg = () => {
        if(array[0]===array[4] && array[0]===array[8]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()

        } 
    }
    const secDg = () => {
        if(array[2]===array[4] && array[2]===array[6]){

            array[position]==="X"
            ?winner.textContent = `Winner is ${ttt.player1.getName()}`
            :winner.textContent = `Winner is ${ttt.player2.getName()}`
            dialog.showModal()

        } 
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