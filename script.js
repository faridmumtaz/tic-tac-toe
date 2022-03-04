const GameBoard = (() => {
    let Table = ['','','','','','','','',''];
    const getValue = (x) => {
        return Table[x];
    }
    const setValue = (x,v) => {
        if(Table[x] == ''){
            Table[x] = v; 
            return true;  
        }
    }
    const checkCom = (com,v) => {    
        let k = com[2];
        let j = com[1];
        let i = com[0];
        if(Table[i] == v && Table[j] == v && Table[k] == v){
            return true;
        }
    }
    const resetTable = () => {
        for(let i=0;i<9;i++){
            Table[i] = '';
        }
    }
    return { getValue,setValue,checkCom,resetTable };
})();

const squares = Array.from(document.querySelectorAll('.square'));
const player_1 = document.querySelector('.player1');
const player_2 = document.querySelector('.player2');
const winnerTitle = document.querySelector('.header h1');
const restart = document.querySelector('.header .restart');
const DisplayController = (() => {
    let WinCom = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
    const render = () => {
        squares[0].innerText = GameBoard.getValue(0);
        squares[1].innerText = GameBoard.getValue(1);
        squares[2].innerText = GameBoard.getValue(2);
        squares[3].innerText = GameBoard.getValue(3);
        squares[4].innerText = GameBoard.getValue(4);
        squares[5].innerText = GameBoard.getValue(5);
        squares[6].innerText = GameBoard.getValue(6);
        squares[7].innerText = GameBoard.getValue(7);
        squares[8].innerText = GameBoard.getValue(8);
    }
    const check = (v) => {
        WinCom.forEach((com) => {
            if(GameBoard.checkCom(com,v) == true){
                if(v == 'X'){
                    winnerTitle.innerText = "Player 1 wins";
                }
                else{
                    winnerTitle.innerText = "Player 2 wins";
                }
                squares.forEach((square) => {
                    square.classList.add('unclickable');
                });
                player_2.classList.add('vanish');
            }
        });
    }
    const marking = () => {
        let i = 1;
        squares.forEach((square) => {
            square.addEventListener('click',(e) => {
                if((i%9)%2 != 0){
                    Player1.mark(square.id);
                    check('X');
                }
                else{
                    Player2.mark(square.id);
                    check('O');
                }
                i++;
            });
        });
    }
    return { render,marking };
})();

const Player1 = {
    name : "Player 1",
    mark(id) {
        if(GameBoard.setValue(id,'X') == true){
            player_1.classList.add('vanish');
            player_2.classList.remove('vanish');
            DisplayController.render();
        }
    },
};
const Player2 = {
    name : "Player 2",
    mark(id) {
        if(GameBoard.setValue(id,'O') == true){
            player_2.classList.add('vanish');
            player_1.classList.remove('vanish');
            DisplayController.render();
        }
    },
};

DisplayController.marking();
restart.addEventListener('click',() => {
    GameBoard.resetTable();
    DisplayController.render();
    squares.forEach((square) => {
        square.classList.remove('unclickable');
    });
    winnerTitle.innerText = "";
    DisplayController.marking();
});