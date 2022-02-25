const GameBoard = (() => {
    let Table = ['','','','','','','','',''];
    const getValue = (x) => {
        return Table[x];
    }
    const setValue = (x,v) => {
        Table[x] = v;
    }
    return { getValue,setValue };
})();

const squares = Array.from(document.querySelectorAll('.square'));
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
    return { render };
})();

const Player1 = {
    name : "Player 1",
    mark() {
        squares.forEach((square) => {
            square.addEventListener('click',(e) => {
                GameBoard.setValue(square.id,'X');
                DisplayController.render();
            });
        });
    },
};
const Player2 = {
    name : "Player 2",
    mark() {
        squares.forEach((square) => {
            square.addEventListener('click',(e) => {
                GameBoard.setValue(square.id,'O');
                DisplayController.render();
            });
        });
    },
};


Player1.mark();
Player2.mark();