const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

class Game {
  #bridge;

  #size;

  #location;

  initGame() {
    OutputView.startOutput();
    InputView.readBridgeSize.bind(this)(this.getBridge);
  }

  getBridge(input) {
    this.#size = Number(input);
    this.#bridge = BridgeMaker.makeBridge(
      this.#size,
      BridgeRandomNumberGenerator.generate
    );
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
  }
}

module.exports = Game;
