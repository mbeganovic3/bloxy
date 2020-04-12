import Board from './board.js';
import Block from './block.js';
import * as THREE from '/node_modules/three/src/Three.js';


const $root = $('#root');
let direction = "Right";
$root.append(`<button id="top" class="row choice">Toggle Direction: ${direction}</button>`);

export const SIDE_LENGTH = 150;

const Level = (startPosition, cameraPosition, lightPosition, board) => ({
    startPosition: startPosition,
    cameraPosition: cameraPosition,
    lightPosition: lightPosition,
    board: board
});

const Position3D = (x, y, z) => ({
    x: x,
    y: y,
    z: z
});

const LEVEL_ZERO = Level(
    [2, 2],
    Position3D(700, 1100, 1600),
    Position3D(600, 800, 800), [
        ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty"],
        ["empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty"]
    ]
);

const LEVEL_ONE = Level(
    [2, 5],
    Position3D(900, 1100, 1600),
    Position3D(1000, 800, 700), [
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", { type: "activator", bridgeCoords: [[5, 11], [5, 12]] }, "normal", "empty", "empty", "normal", "goal", "normal"],
        ["normal", "normal", { type: "activator", bridgeCoords: [[5, 5], [5, 6]] }, "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]
    ]
);

const LEVEL_TWO = Level(
    [2, 4],
    Position3D(1000, 1100, 1600),
    Position3D(1100, 800, 800), [
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"]
    ]
);

const LEVEL_THREE = Level(
    [2, 6],
    Position3D(1000, 1100, 2000),
    Position3D(800, 800, 800), [
        ["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "fragile", "empty", "empty", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"],
        ["normal", "normal", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "fragile", "fragile", "fragile", "fragile", "fragile"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "goal", "normal", "empty", "empty", "fragile", "fragile", "normal", "fragile"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "fragile", "fragile", "fragile", "fragile"]
    ]
);

const LEVEL_FOUR = Level(
    [14, 2],
    Position3D(1000, 1400, 2500),
    Position3D(900, 800, 800), [
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
        ["empty", "normal", "normal", "normal", "normal", "bridge", "bridge", "normal", { type: "activator", bridgeCoords: [[2, 6], [2, 7]] }, "normal", "normal", "normal", "normal", "normal", "normal"],
        ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"],
        ["empty", "normal", "normal", { type: "activator", bridgeCoords: [[9, 6], [9, 7]] }, "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "normal", "normal", "normal", { type: "activator", bridgeCoords: [[9, 6], [9, 7]] }, "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", { type: "activator", bridgeCoords: [[9, 6], [9, 7]] }],
        ["normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal"],
        ["normal", "goal", "normal", "normal", "normal", "bridge", "bridge", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
    ]
);

const LEVEL_FIVE = Level(
    [1, 4],
    Position3D(1000, 1400, 2500),
    Position3D(900, 800, 800), [
        ["empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty"],
        ["normal", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "normal", "normal", "goal", "normal"],
        ["empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "empty", "empty", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "normal", "normal", "empty", "empty", "empty", "empty"],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "normal", "normal", "normal", "empty", "empty", "empty", "empty", "empty"]
    ]
);



const LEVELS = [
  LEVEL_ZERO,
  LEVEL_ONE,
  LEVEL_TWO,
  LEVEL_THREE,
  LEVEL_FOUR,
  LEVEL_FIVE 
];

const KEYDOWN_EVENTS = [
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "Enter",
  " "
];

class Game {

  
  constructor() {
    // 3D rendering

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.rotation.x = -Math.PI/5;
    this.light = new THREE.PointLight(0xffffff, 1.5);
    this.scene.add(this.light);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(1000, 500);
    document.body.appendChild(this.renderer.domElement);

    // Game statistics
    this.level = 0;
    this.moves = 0;
    this.movesThisLevel = 0;
    this.scoreboard = document.querySelector(".scoreboard");
    this.modal = document.querySelector(".reset-modal-container");

    // if one coord of the block has already won/lost the level, the other coord
    // will not be checked
    this.checkNextCoord = true;

    // Game components
    this.board = new Board(this.scene, LEVELS[this.level].board);
    this.block = new Block(this.scene, LEVELS[this.level].startPosition);

    // store hit activators so their bridges can be reset on a level reset
    this.activators = [];

    this.handleKeydown = this.handleKeydown.bind(this);
    this.toggleDirection = this.toggleDirection.bind(this);
    this.chooseDirection = this.chooseDirection.bind(this);
    document.getElementById("top").addEventListener("click", this.toggleDirection);
    document.getElementById("bottom").addEventListener("click", this.chooseDirection);

    const modalBtn = document.querySelector(".modal-btn");
    modalBtn.addEventListener('click', () => this.reset());

    // the about modal
    const aboutModal = document.querySelector(".about-modal-container");
    const aboutModalClose = document.querySelector(".about-modal-btn");
    const aboutModalOpen = document.querySelector(".open-about-btn");
    aboutModalOpen.addEventListener('click', () => aboutModal.style.display = "flex");
    aboutModalClose.addEventListener('click', () => aboutModal.style.display = "none");

    this.renderLevel();
  }

  renderLevel() {
    this.board.addBoardToScene();

    const { cameraPosition } = LEVELS[this.level];
    this.camera.position.x = cameraPosition.x;
    this.camera.position.y = cameraPosition.y;
    this.camera.position.z = cameraPosition.z;

    const { x, y, z } = LEVELS[this.level].lightPosition;
    this.light.position.set(x, y, z)

    this.renderer.render(this.scene, this.camera);

    this.dropBlock(140);
  }

  dropBlock(targetHeight) {
    if (this.block.height() > targetHeight) {
      requestAnimationFrame(() => this.dropBlock(targetHeight));
      this.block.drop();
      this.block.addBlockToScene();
      this.renderer.render(this.scene, this.camera);
    } else {
      this.listenKeydown(); // event listeners
    }
  }

  updateScore(newScore) {
    this.movesThisLevel = typeof newScore === "number" ? newScore : this.movesThisLevel + 1;
    this.scoreboard.innerHTML = this.moves + this.movesThisLevel;

    if (typeof newScore === "undefined") {
        this.block.coords.forEach(coord => this.receiveMove(...coord));
    }
  }

  unlistenKeydown() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('keydown', this.toggleDirection);
    document.removeEventListener('keydown', this.chooseDirection);
  }

  listenKeydown() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keydown', this.toggleDirection);
    document.addEventListener('keydown', this.chooseDirection);
  }

  handleKeydown(e) {
    switch(e.key) {
      case "ArrowLeft":
        this.block.rotate(0, 0, Math.PI/2);
        this.block.move(-1, 0, 0);
        this.updateScore();
        this.block.addBlockToScene();
        this.renderer.render(this.scene, this.camera);
        break;
      case "ArrowUp":
        this.block.rotate(Math.PI/2, 0, 0);
        this.block.move(0, 0, -1);
        this.updateScore();
        this.block.addBlockToScene();
        this.renderer.render(this.scene, this.camera);
        break;
      case "ArrowRight":
        this.block.rotate(0, 0, -Math.PI/2);
        this.block.move(1, 0, 0);
        this.updateScore();
        this.block.addBlockToScene();
        this.renderer.render(this.scene, this.camera);
        break;
      case "ArrowDown":
        this.block.rotate(-Math.PI/2, 0, 0);
        this.block.move(0, 0, 1);
        this.updateScore();
        this.block.addBlockToScene();
        this.renderer.render(this.scene, this.camera);
        break;
      case "Enter":
        this.chooseDirection();
        break;
      case " ":
        this.toggleDirection();
        break;
      default:
        return;
    }
  }

  toggleDirection(){
    document.getElementById("bottom").removeAttribute("style");
   
    switch(direction) {
      case "Left":
        direction = "Up";
        break;
      case "Up":
        direction = "Right";
        break;
      case "Right":
        direction = "Down";
        break;
      case "Down":
        direction = "Left";
        break;
      default:
        return;
    }
    $root.empty();
    $root.append(`<button id="top" class="row choice" style="background:palegreen">Toggle Direction: ${direction}</button>`);
    document.getElementById("top").addEventListener("click", this.toggleDirection);
  }

  chooseDirection(){
    $root.empty();
    $root.append(`<button id="top" class="row choice" >Toggle Direction: ${direction}</button>`);
    document.getElementById("top").addEventListener("click", this.toggleDirection);
    document.getElementById("bottom").setAttribute("style", "background: palegreen;");
    switch(direction) {
      case "Left":
        this.block.rotate(0, 0, Math.PI/2);
        this.block.move(-1, 0, 0);
        break;
      case "Up":
        this.block.rotate(Math.PI/2, 0, 0);
        this.block.move(0, 0, -1);
        break;
      case "Right":
        this.block.rotate(0, 0, -Math.PI/2);
        this.block.move(1, 0, 0);
        break;
      case "Down":
        this.block.rotate(-Math.PI/2, 0, 0);
        this.block.move(0, 0, 1);
        break;
      default:
        return;
    }

    this.updateScore();
    this.block.addBlockToScene();
    this.renderer.render(this.scene, this.camera);
  }

  receiveMove(x, z) {
    if (!this.checkNextCoord) {
      this.checkNextCoord = true;
      return;
    }

    const tiles = this.board.tiles;
    const tile = (tiles[z] && tiles[z][x]) ? tiles[z][x] : tiles[1][1];

    switch(tile.type) {
      case "normal":
        break;
      case "empty":
        this.lose();
        break;
      case "goal":
        if (this.block.alignment === "y") this.win();
        break;
      case "bridge":
        if (!tile.isActivated) this.lose();
        break;
      case "activator":
        this.activators.push(tile);
        tile.bridgeCoords.forEach(coord => {
          const bridgeTile = this.board.tiles[coord[0]][coord[1]];
          bridgeTile.removeTileFromScene();

          const wasActivated = bridgeTile.isActivated;
          bridgeTile.isActivated = !wasActivated;
          bridgeTile.renderTile(!wasActivated);
          bridgeTile.addTileToScene();
        });
        this.renderer.render(this.scene, this.camera);

        if (this.block.alignment === "y") this.checkNextCoord = false;
        break;
      case "fragile":
        if (this.block.alignment === "y") this.lose();
        break;
      default:
        return;
    }
  }

  win() {
    this.checkNextCoord = false;
    this.unlistenKeydown();
    this.dropBlock(-1600);
    this.moves += this.movesThisLevel;
    this.activators = [];
    this.updateScore(0);
    setTimeout(this.startNextLevel.bind(this), 1500);
  }

  startNextLevel() {
    this.checkNextCoord = true;

    // next level
    this.level += 1;

    if (this.level === 6) {
      this.modal.style.display = "flex";
    } else {
      this.block.initialPos = LEVELS[this.level].startPosition;
      this.block.startLevel();
      this.board.removeBoardFromScene();

      this.board.tiles = this.board.createTiles(this.scene, LEVELS[this.level].board);
      this.renderLevel();
    }
  }

  lose() {
    this.checkNextCoord = false;
    this.unlistenKeydown();
    this.dropBlock(-1600);
    setTimeout(() => {
      this.updateScore(0);
      this.block.reset();
      this.block.addBlockToScene();
      this.checkNextCoord = true;

      this.activators.forEach(activator => {
        activator.bridgeCoords.forEach(coord => {
          const bridgeTile = this.board.tiles[coord[0]][coord[1]];
          bridgeTile.isActivated = false;
          bridgeTile.removeTileFromScene();
        });
      });

      this.renderer.render(this.scene, this.camera);
    }, 1500);
  }

  reset() {
    this.modal.style.display = "none";
    this.level = -1;
    this.moves = 0;
    this.movesThisLevel = 0;
    this.scoreboard.innerHTML = this.moves;
    this.startNextLevel();
  }
}

export default Game;

