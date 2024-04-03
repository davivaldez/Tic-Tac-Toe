const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const btnGame = document.querySelectorAll(".btn-game");

const player1 = localStorage.getItem("player1");
const player2 = localStorage.getItem("player2");

let player = player1;

let currentPlayer = document.getElementById("current-player");
currentPlayer.innerText = "Vez do jogador: " + player1;

let contPlayer1Wins = 0;
let contPlayer2Wins = 0;

let resultTie = 0;

let player1Wins = document.getElementById("player1-wins");
let player2Wins = document.getElementById("player2-wins");
player1Wins.innerText = `Vitórias de ${player1}: ${contPlayer1Wins}`;
player2Wins.innerText = `Vitórias de ${player2}: ${contPlayer2Wins}`;

function cleanButtons() {
  btnGame.forEach((function (btn) {
    btn.innerText = "";
    btn.classList.remove("wins");
    btn.disabled = false;
  }))
}

function checkWins(player, wins) {
  if (player === player1) {
    player1Wins.innerText = `Vitórias de ${player}: ${wins}`;
    contPlayer1Wins = wins;
  } else {
    player2Wins.innerText = `Vitórias de ${player}: ${wins}`;
    contPlayer2Wins = wins;
  }
}

function checkBtn1To3(player, wins) {
  if ((btn1.textContent === "X" && btn2.textContent === "X" && btn3.textContent === "X") || (btn1.textContent === "O" && btn2.textContent === "O" && btn3.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn1.classList.add("wins");
    btn2.classList.add("wins");
    btn3.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function checkBtn4To6(player, wins) {
  if ((btn4.textContent === "X" && btn5.textContent === "X" && btn6.textContent === "X") || (btn4.textContent === "O" && btn5.textContent === "O" && btn6.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn4.classList.add("wins");
    btn5.classList.add("wins");
    btn6.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function checkBtn7To9(player, wins) {
  if ((btn7.textContent === "X" && btn8.textContent === "X" && btn9.textContent === "X") || (btn7.textContent === "O" && btn8.textContent === "O" && btn9.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn7.classList.add("wins");
    btn8.classList.add("wins");
    btn9.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function checkBtn1To7(player, wins) {
  if ((btn1.textContent === "X" && btn4.textContent === "X" && btn7.textContent === "X") || (btn1.textContent === "O" && btn4.textContent === "O" && btn7.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn1.classList.add("wins");
    btn4.classList.add("wins");
    btn7.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function checkBtn2To8(player, wins) {
  if ((btn2.textContent === "X" && btn5.textContent === "X" && btn8.textContent === "X") || (btn2.textContent === "O" && btn5.textContent === "O" && btn8.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn2.classList.add("wins");
    btn5.classList.add("wins");
    btn8.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function checkBtn3To9(player, wins) {
  if ((btn3.textContent === "X" && btn6.textContent === "X" && btn9.textContent === "X") || (btn3.textContent === "O" && btn6.textContent === "O" && btn9.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn3.classList.add("wins");
    btn6.classList.add("wins");
    btn9.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function checkBtn1To9(player, wins) {
  if ((btn1.textContent === "X" && btn5.textContent === "X" && btn9.textContent === "X") || (btn1.textContent === "O" && btn5.textContent === "O" && btn9.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn1.classList.add("wins");
    btn5.classList.add("wins");
    btn9.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function checkBtn3To7(player, wins) {
  if ((btn3.textContent === "X" && btn5.textContent === "X" && btn7.textContent === "X") || (btn3.textContent === "O" && btn5.textContent === "O" && btn7.textContent === "O")) {
    alert(`${player} venceu!`);
    wins++;

    checkWins(player, wins);

    btn3.classList.add("wins");
    btn5.classList.add("wins");
    btn7.classList.add("wins");

    setTimeout(function () {
      cleanButtons();
    }, 1500);

    resultTie = 0;

    return true;
  }
}

function gameTie() {
  console.log(resultTie);

  if (resultTie === 9) {
    alert("Empate! Nenhum jogador venceu.");
    cleanButtons();

    resultTie = 0;
  }
}

function gameOver(player, wins) {
  if (checkBtn1To3(player, wins)) {
    return;
  } else if (checkBtn4To6(player, wins)) {
    return;
  } else if (checkBtn7To9(player, wins)) {
    return;
  } else if (checkBtn1To7(player, wins)) {
    return;
  } else if (checkBtn2To8(player, wins)) {
    return;
  } else if (checkBtn3To9(player, wins)) {
    return;
  } else if (checkBtn1To9(player, wins)) {
    return;
  } else if (checkBtn3To7(player, wins)) {
    return;
  } else {
    resultTie += 1;
    gameTie();
  }
}

btnGame.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (player === player1) {
      btn.textContent = "X";
      btn.disabled = true;

      setTimeout(function () {
        gameOver(player1, contPlayer1Wins);
      }, 50);

      player = player2;
      currentPlayer.innerText = "Vez do jogador: " + player2;
    } else {
      btn.textContent = "O";
      btn.disabled = true;

      setTimeout(function () {
        gameOver(player2, contPlayer2Wins);
      }, 50);

      player = player1;
      currentPlayer.innerText = "Vez do jogador: " + player1;
    }
  });
});

function restartGame() {
  let restart = confirm("Você tem certeza que deseja reiniciar o jogo ?");

  if (restart) {
    contPlayer1Wins = 0;
    contPlayer2Wins = 0;
    resultTie = 0;

    cleanButtons();
    player1Wins.innerText = `Vitórias de ${player1}: ${contPlayer1Wins}`;
    player2Wins.innerText = `Vitórias de ${player2}: ${contPlayer2Wins}`;
  }
}
