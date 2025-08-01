import image from "../images/goblin.png";

export default class Goblin {
  constructor() {
    this.img = document.createElement("img");
    this.img.src = image;
    this.img.className = "goblin";
    this.field = document.querySelector(".game-container");
    this.cells = Array.from(document.querySelectorAll(".cell"));
  }

  getCell() {
    let generateIndex = Math.floor(
      Math.random() * this.cells.length,
    );
    this.currentCell = this.cells[generateIndex];
  }

  move() {
    this.getCell();
    this.currentCell.appendChild(this.img);
  }

  disappear() {
    this.currentCell.removeChild(this.img);
    this.currentCell = null;
  }
}