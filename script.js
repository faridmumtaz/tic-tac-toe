const GameBoard = (() => {
    let Table = [['O','O','X'],['O','O','O'],['O','O','O']];
    const getValue = (x,y) => {
        return Table[x][y];
    }
    return { getValue };
})();

const squares = [];
squares.push(Array.from(document.querySelectorAll('.sq0')));
squares.push(Array.from(document.querySelectorAll('.sq1')));
squares.push(Array.from(document.querySelectorAll('.sq2')));
const DisplayController = (() => {
    const render = () => {
        squares[0][0].innerText = GameBoard.getValue(0,0);
        squares[0][1].innerText = GameBoard.getValue(0,1);
        squares[0][2].innerText = GameBoard.getValue(0,2);
        squares[1][0].innerText = GameBoard.getValue(1,0);
        squares[1][1].innerText = GameBoard.getValue(1,1);
        squares[1][2].innerText = GameBoard.getValue(1,2);
        squares[2][0].innerText = GameBoard.getValue(2,0);
        squares[2][1].innerText = GameBoard.getValue(2,1);
        squares[2][2].innerText = GameBoard.getValue(2,2);
    }
    return { render };
})();

const Player1 = {
    name : "Player 1",
    mark() {
        DisplayController.render();
    },
};