const inputPlayer1 = document.getElementById("player1");
const inputPlayer2 = document.getElementById("player2");

function playGame() {
  if (!inputPlayer1.value || !inputPlayer2.value) {
    alert("É necessário inserir dois jogadores para jogar o jogo!");

    return;
  }

  const player1 = inputPlayer1.value;
  const player2 = inputPlayer2.value;

  localStorage.setItem("player1", player1);
  localStorage.setItem("player2", player2);

  window.location.href = "game.html";
}