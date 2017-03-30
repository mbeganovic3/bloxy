import Board from './board';
import Block from './block';
import * as BLOXY from './constants';

import * as THREE from '../lib/three.min.js';

const KEYDOWN_EVENTS = [
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown"
];

const LEVEL_REF = [
  { boardLayout: BLOXY.LEVEL_ONE, blockPos: BLOXY.START_POS_ONE },
  { boardLayout: BLOXY.LEVEL_TWO, blockPos: BLOXY.START_POS_ONE },
  { boardLayout: BLOXY.LEVEL_THREE, blockPos: BLOXY.START_POS_ONE },
  { boardLayout: BLOXY.LEVEL_FOUR, blockPos: BLOXY.START_POS_ONE },
  { boardLayout: BLOXY.LEVEL_FIVE, blockPos: BLOXY.START_POS_ONE }
];

class Game {
  constructor() {
    // 3D rendering
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1600;
    this.camera.position.y = 1100;
    this.camera.position.x = 600;
    this.camera.rotation.x = -Math.PI/5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(1000, 500);

    // Game components
    this.board = new Board(this.scene);
    this.block = new Block(this.scene);

    // Game statistics
    this.level = 1;
    this.moves = 0;
    this.scoreboard = document.querySelector(".scoreboard");

    this.checkNextCoord = true;

    this.handleKeydown = this.handleKeydown.bind(this);

    this.renderGame();
  }

  renderGame() {
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(600, 800, 800);
    this.scene.add(light);

    this.board.addBoardToScene();

    document.body.appendChild(this.renderer.domElement);

    this.renderer.render(this.scene, this.camera);

    this.dropBlock(140);
  }

  dropBlock(height) {
    if (this.block.block.position.y > height) {
      requestAnimationFrame(() => this.dropBlock(height));
      this.block.drop();
      this.block.addBlockToScene();
      this.renderer.render(this.scene, this.camera);
    } else {
      this.listenKeydown(); // event listeners
    }
  }

  updateScore(newScore) {
    this.moves = newScore === 0 ? newScore : this.moves + 1;
    this.scoreboard.innerHTML = this.moves;

    if (typeof newScore === "undefined") {
      this.block.coords.forEach(coord => this.receiveMove(...coord));
    }
  }

  unlistenKeydown() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  listenKeydown() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  handleKeydown(e) {
    switch(e.key) {
      case "ArrowLeft":
        this.block.rotate(0, 0, Math.PI/2);
        this.block.move(-1, 0, 0);
        break;
      case "ArrowUp":
        this.block.rotate(Math.PI/2, 0, 0);
        this.block.move(0, 0, -1);
        break;
      case "ArrowRight":
        this.block.rotate(0, 0, -Math.PI/2);
        this.block.move(1, 0, 0);
        break;
      case "ArrowDown":
        this.block.rotate(-Math.PI/2, 0, 0);
        this.block.move(0, 0, 1);
        break;
      default:
        return;
    }

    if (KEYDOWN_EVENTS.includes(e.key)) {
      this.updateScore();
      this.block.addBlockToScene();
      this.renderer.render(this.scene, this.camera);
    }
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
        return false;
        break;
      case "goal":
        if (this.block.alignment === "y") {
          this.win();
          return false;
        }
        break;
      case "bridge":
        if (!tile.isActivated) {
          this.lose();
          return false;
        }
        break;
      case "bridgeActivator":
        break;
      case "fragile":
        if (this.block.alignment === "y") {
          this.lose();
          return false;
        }
        break;
      default:
        return;
    }
  }

  win() {
    this.checkNextCoord = false;
    this.unlistenKeydown();
    this.dropBlock(-1600);
    setTimeout(() => {
      console.log("new level!");
      this.level += 1;
      this.checkNextCoord = true;
    }, 1500);
  }

  lose() {
    this.checkNextCoord = false;
    this.unlistenKeydown();
    this.dropBlock(-1600);
    setTimeout(() => {
      this.updateScore(0);
      this.block.reset();
      this.block.addBlockToScene();
      this.renderer.render(this.scene, this.camera);
      this.checkNextCoord = true;
    }, 1500);
  }
}

export default Game;
