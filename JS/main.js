const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('data-board[]');
const winningmessageTextElement = document.querySelector(
    '[data-winning-message-text]'
    );
const winningmessage = document.querySelector('[data-winning-message]')   
const RestartButtonElement = document.querySelector('[data-Restart-button]')
 
let isCircleturn;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const startGame = () => {
    for (const cell of cellElements) {
        cell.classList.remove('circle')
        cell.classList.remove('x')
        cell.addEventListener('click' . handleClick);
        cell .addEventListener('click', handleClick, {once: true});
    }

    isCircleturn = false;

    board.classList.add('x');
    winningmessage.classList.remove('show-winning-message')
};

const endGame = (isdraw) => {
     if (isdraw) {
        winningmessageTextElement.InnerText = 'Empate!' 
     } else {
        winningmessageTextElement.InnerText = isCircleturn 
        ? 'circulo Venceu' 
        : 'x Venceu'

        winningmessage.classList.add('show-winning-message');
}

const checkForwin = (currentPlayer) => {
    return winningCombinations.some(conbination =>{
        return winningCombinations.every(index =>{
            return cellElements [index].classList.contains(currentPlayer);
        });
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const setBoardhoverclass = () => {
    board.classList.remove('circle')
    board.classList.remove('x')

    if (isCircleturn) {
    board.classList.add('circle')
    } else {
    board.classList.add('x')        
    }
}

const swapTurns = () =>{
    isCircleturn = !isCircleturn

    board.classList.remove('circle')
    board.classList.remove('x')

    if (isCircleturn) {
    board.classList.add('circle')
    } else {
    board.classList.add('x')        
    }
};

const handleClick = (e) => {
    //colocar a marca (x ou circulo)
    const cell = e.target;
    const classToAdd = isCircleturn ? 'circle' : 'x';

    placeMark(cell, classToAdd);

    //verificar por vitoria
    const isWin = checkForwin(classToAdd);
    if (isWin) {
       endGame(true);
    }

    //verificar por empate

    //mudar o simbolo

    swapTurns();
};  

   startGame();

   RestartButton.addEventListener('click', startGame);