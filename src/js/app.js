import goblin from "../images/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".game-container");
  for (let i=0; i<16; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    container.append(cell);
  }

  const cells = document.querySelectorAll(".cell");
  const enemy = document.createElement("img");
  enemy.setAttribute("src", goblin);
  enemy.className = "goblin";

  let currentCell = null;

  function getCell() {
    const index = Math.floor(Math.random() * cells.length);
    return cells[index];
  }

  function movieGoblin() {
      const newCell = getCell();
      if (newCell !== currentCell) {
        currentCell = newCell;
        currentCell.appendChild(enemy);
      }
  }

  setInterval(movieGoblin, 1000);
});