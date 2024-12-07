function closeBlurb() {
    document.getElementById("sud-section").style.display = "none";
    document.querySelector(".content-to-blur").style.filter = "none";
    document.querySelector(".content-to-blur").style.webkitFilter = "none";
};

function displayDate() {
    const now = new Date();
    const format = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const currentDayDate = now.toLocaleString('en-US', format);
    document.getElementById("date").textContent = currentDayDate;
}
displayDate();


let timerInterval;
let timeElapsed = 0;

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor(seconds % 3600 / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
};

function displayTime() {
    document.getElementById("timer").innerHTML = formatTime(timeElapsed);
};

function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++;
        displayTime()
    }, 1000);
};

function pauseTimer() {
    clearInterval(timerInterval);
};

function resetTimer() {
    pauseTimer();
    timeElapsed = 0;
    displayTime();
};


const modal = document.getElementById("howToPlay");
const icon = document.getElementById("howToPlayIcon");
const closeBtn = document.querySelector(".close");

icon.onclick = function () {
    modal.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

 
// =================================================================================================
//                              GeeksforGeeks Javascript Logic 
// =================================================================================================


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");

    // Function to generate a random Sudoku puzzle
    function generateRandomSudoku() {
        // Placeholder function for generating a random puzzle (9x9)
        const puzzle = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];
        return puzzle;
    }

    // Function to solve the Sudoku puzzle
    function solveSudoku(board) {
        // Placeholder function for solving Sudoku puzzle
        const solvedPuzzle = JSON.parse(JSON.stringify(board));
        solveHelper(solvedPuzzle);
        return solvedPuzzle;
    }

    // Helper function for solving Sudoku recursively
    function solveHelper(board) {
        const emptyCell = findEmptyCell(board);
        if (!emptyCell) {
            return true; // Puzzle solved
        }

        const [row, col] = emptyCell;
        for (let num = 1; num <= 9; num++) {
            if (isValidMove(board, row, col, num)) {
                board[row][col] = num;
                if (solveHelper(board)) {
                    return true;
                }
                board[row][col] = 0; // Backtrack
            }
        }
        return false; // No valid number found for this cell
    }

    // Function to find an empty cell in the Sudoku puzzle
    function findEmptyCell(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    return [row, col];
                }
            }
        }
        return null; // No empty cell found
    }

    // Function to check if a move is valid
    function isValidMove(board, row, col, num) {
        // Check row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) {
                return false;
            }
        }
        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) {
                return false;
            }
        }
        // Check 3x3 grid
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) {
                    return false;
                }
            }
        }
        return true; // Move is valid
    }

    // Function to create the Sudoku puzzle grid
    function createSudokuGrid(puzzle) {
        container.innerHTML = '';
        puzzle.forEach((row, rowIndex) => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
            row.forEach((cell, columnIndex) => {
                const cellElement = document.createElement('input');
                cellElement.classList.add('cell');
                cellElement.classList
                    .add((rowIndex + columnIndex) % 2 === 0 ?
                        'lightBackground' : 'darkBackground');
                cellElement.type = 'text';
                cellElement.maxLength = 1;
                cellElement.value = cell !== 0 ? cell : '';
                rowElement.appendChild(cellElement);
            });
            container.appendChild(rowElement);
        });
    }

    // Initialize puzzle
    let initialPuzzle = generateRandomSudoku();
    let puzzle = JSON.parse(JSON.stringify(initialPuzzle));
    let solvedPuzzle = [];

    // Function to solve the puzzle
    function solvePuzzle() {
        solvedPuzzle = solveSudoku(puzzle);
        createSudokuGrid(solvedPuzzle);
    }

    // Function to reset the puzzle
    function resetPuzzle() {
        initialPuzzle = generateRandomSudoku();
        puzzle = JSON.parse(JSON.stringify(initialPuzzle));
        solvedPuzzle = [];
        createSudokuGrid(puzzle);
    }

    // Initial puzzle creation
    createSudokuGrid(puzzle);

    // Attach event listeners to buttons
    document.getElementById("solveButton")
        .addEventListener("click", solvePuzzle);
    document.getElementById("resetButton")
        .addEventListener("click", resetPuzzle);
});