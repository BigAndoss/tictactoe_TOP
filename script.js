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
        // console.log(ttt.fieldArray)
        gameLogic(ttt.fieldArray,position)
        // console.log(ttt.fieldArray)
        // field.hasAttributes()

    }
    field.addEventListener('click', getPosition, {once:true})
});


function gameLogic (array,position) {
    const firstRow = () => {
        if(array[0]===array[1] && array[0]===array[2]) console.log("1Row")
    }
    const secRow = () => {
        if(array[3]===array[4] && array[3]===array[5]) console.log("2Row")
    }
    const thirdRow = () => {
        if(array[6]===array[7] && array[6]===array[8]) console.log("3Row")
    }
    const firstCol = () => {
        if(array[0]===array[3] && array[0]===array[6]) console.log("1Col")
    }
    const secCol = () => {
        if(array[1]===array[4] && array[1]===array[7]) console.log("2Col")
    }    
    const thirdCol = () => {
        if(array[2]===array[5] && array[2]===array[8]) console.log("3Col")
    }
    const firstDg = () => {
        if(array[0]===array[4] && array[0]===array[8]) console.log("1Dg")
    }
    const secDg = () => {
        if(array[2]===array[4] && array[2]===array[6]) console.log("2Dg")
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

    // if(position == 0 || position == 1 || position ==2){
    //     firstRow()
    // }
    // if(position == 3 || position == 4 || position ==5){
    //     secRow()
    // }
    // if(position == 6 || position == 7 || position ==8){
    //     thirdRow()
    // }
    // if(position == 0 || position == 3 || position ==6){
    //     firstCol()
    // }
    // if(position == 1 || position == 4 || position ==7){
    //     secCol()
    // }
    // if(position == 2 || position == 5 || position ==8){
    //     thirdCol()
    // }
    // if(position == 0 || position == 4 || position ==8){
    //     firstDg()
    // }
    // if(position == 2 || position == 4 || position ==6){
    //     secDg()
    // }
}