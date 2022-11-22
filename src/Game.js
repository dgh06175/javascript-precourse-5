const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class Game {
  #bridge;

  #bridgeLength;

  #location;

  initGame() {
    OutputView.startOutput();
    InputView.readBridgeSize.bind(this)(this.getBridge);
  }

  getBridge(input) {
    this.#bridgeLength = Number(input);
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    console.log(this.#bridge);
    this.#location = 0;
    this.getMove();
  }

  getMove() {
    InputView.readMoving.bind(this)(this.moveOneStep);
  }

  moveOneStep(input) {
    const bridgeGame = new BridgeGame(this.#bridge, this.#location);
    const moveSuccess = bridgeGame.move(input);
    OutputView.printMap(this.#bridge, this.#location, moveSuccess);
    this.#location += 1;
    this.whatNext(moveSuccess);
  }

  whatNext(moveSuccess) {
    if (moveSuccess) {
      if (this.#location === this.#bridgeLength) {
        console.log('성공');
      } else {
        InputView.readMoving.bind(this)(this.moveOneStep);
      }
    } else {
      console.log('실패');
    }
  }
}

module.exports = Game;
