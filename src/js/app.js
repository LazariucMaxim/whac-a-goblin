import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".game-container");
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    field.append(cell);
  }
  const game = new Game();
  console.log(game);
  console.log(game.points.textContent);
});