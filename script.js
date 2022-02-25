const GameBoard = (() => {
    let Table = ['','','','','','','','',''];
    const getValue = (x) => {
        return Table[x];
    }
    const setValue = (x,v) => {
        if(Table[x] == ''){
            Table[x] = v; 
            console.log(Table[x]);
            return true;  
        }
    }
    return { getValue,setValue };
})();

const squares = Array.from(document.querySelectorAll('.square'));
const player_1 = document.querySelector('.player1');
const player_2 = document.querySelector('.player2');
const DisplayController = (() => {
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
    const marking = () => {
        let i = 1;
        squares.forEach((square) => {
            square.addEventListener('click',(e) => {
                if((i%9)%2 != 0){
                    Player1.mark(square.id);
                }
                else{
                    Player2.mark(square.id);
                }
                console.log(i);
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