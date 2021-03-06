const gameBoard = (function () {
    this.positions = document.querySelectorAll('.cell')
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]

    ];
    let winner = false;
    let turn = 0;
    let gameEnded = false;
    const restart = () => {
        document.querySelector('button').addEventListener("click", () => {
            positions.forEach(position => position.innerHTML = "");
            turn = 0;
        })
    }
    this.start = function () {
        if (turn === 9  ) {
            return;
        }
        console.log(gameEnded)
        positions.forEach(position => {
            position.addEventListener('click', () => {
                if(gameEnded){
                    return;
                }
                updateCell(position);
                checkWinner()
                turn++
                console.log(gameEnded)
            })
        })
    }
    const humanPlayer = (el) => {
        if (el.innerText.length > 0) {
            return
        }
        el.innerText = "X"
    }
    const comPlayer = (el) => {
        if (el.innerText.length > 0) {
            return
        }
        el.innerText = "0"
    }
    const updateCell = (el) => {
        if (turn % 2 === 0) {
            humanPlayer(el)
        }
        comPlayer(el);
        if(checkWinner()){
            gameEnded = true;
            let combo = checkWinner();
            combo.forEach(combo => positions[combo].classList.add('won'))
        }
        // checkWinner(); 
    }
    const checkWinner = function () {
        const combo = winningCombos.find(winningCombo => {
            let pos0innerText = positions[winningCombo[0]].innerText;
            let pos1innerText = positions[winningCombo[1]].innerText;
            let pos2innerText = positions[winningCombo[2]].innerText;
            return pos0innerText !== '' &&
            pos0innerText === pos1innerText &&
            pos1innerText === pos2innerText;
        })
        return combo;

    }

    return {
        start,
        restart
    }
})();
gameBoard.start();
gameBoard.restart();

function addListener(el, fn) {
    return el.addEventListener("click", function (el) {
        fn(el);
    })
}