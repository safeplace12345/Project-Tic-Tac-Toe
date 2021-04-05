/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script2.js":
/*!************************!*\
  !*** ./src/script2.js ***!
  \************************/
/***/ (() => {

eval("const winningText = document.querySelector(\".winning-text\");\r\nconst restartBtn = document.querySelector(\"button\");\r\nconst gameBoard = (function () {\r\n  this.positions = document.querySelectorAll(\".cell\");\r\n  const winningCombos = [\r\n    [0, 1, 2],\r\n    [3, 4, 5],\r\n    [6, 7, 8],\r\n    [0, 4, 8],\r\n    [2, 4, 6],\r\n    [0, 3, 6],\r\n    [1, 4, 7],\r\n    [2, 5, 8],\r\n  ];\r\n  let winner = false;\r\n  let turn = 0;\r\n  let gameEnded = false;\r\n  const restart = () => {\r\n    restartBtn.addEventListener(\"click\", () => {\r\n      positions.forEach((position) => {\r\n        position.innerHTML = \"\";\r\n      });\r\n      turn = 0;\r\n      gameEnded = false;\r\n      winningText.innerHTML = \"\";\r\n    });\r\n  };\r\n  this.start = function () {\r\n    if (turn === 9) {\r\n      return;\r\n    }\r\n    positions.forEach((position) => {\r\n      position.addEventListener(\"click\", () => {\r\n        if (gameEnded) {\r\n          return;\r\n        }\r\n        updateCell(position);\r\n        checkWinner();\r\n        turn++;\r\n      });\r\n    });\r\n  };\r\n  const humanPlayer = (el) => {\r\n    if (el.innerText.length > 0) {\r\n      return;\r\n    }\r\n    el.innerText = \"X\";\r\n  };\r\n  const comPlayer = (el) => {\r\n    if (el.innerText.length > 0) {\r\n      return;\r\n    }\r\n    el.innerText = \"0\";\r\n  };\r\n  const updateCell = (el) => {\r\n    if (turn % 2 === 0) {\r\n      humanPlayer(el);\r\n    }\r\n    comPlayer(el);\r\n    if (checkWinner()) {\r\n      gameEnded = true;\r\n      let combo = checkWinner();\r\n      let winner = positions[combo[0]].innerText;\r\n      return (winningText.innerHTML = `<h4 class='text-center text-success'>${winner} wins. Game Over !!!</h4>`);\r\n    }\r\n  };\r\n  const checkWinner = function () {\r\n    const combo = winningCombos.find((winningCombo) => {\r\n      let pos0innerText = positions[winningCombo[0]].innerText;\r\n      let pos1innerText = positions[winningCombo[1]].innerText;\r\n      let pos2innerText = positions[winningCombo[2]].innerText;\r\n      return (\r\n        pos0innerText !== \"\" &&\r\n        pos0innerText === pos1innerText &&\r\n        pos1innerText === pos2innerText\r\n      );\r\n    });\r\n    return combo;\r\n  };\r\n\r\n  return {\r\n    start,\r\n    restart,\r\n  };\r\n})();\r\ngameBoard.start();\r\ngameBoard.restart();\r\n\r\nfunction addListener(el, fn) {\r\n  return el.addEventListener(\"click\", function (el) {\r\n    fn(el);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://project-tic-tac-toe/./src/script2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script2.js"]();
/******/ 	
/******/ })()
;