const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const Validator = require('./Validator');

const SUCCESS = true;
const FAIL = false;

class Game {
  #bridge;

  #bridgeLength;

  #location;

  #attempts;

  constructor() {
    this.#attempts = 1;
    this.#location = 0;
    this.initGame();
  }

  initGame() {
    OutputView.startOutput();
    InputView.readBridgeSize.bind(this)(this.getBridge);
  }

  getBridge(input) {
    try {
      Validator.validateBridgeSizeInput(input);
    } catch {
      InputView.readBridgeSize.bind(this)(this.getBridge);
    }
    this.#bridgeLength = +input;
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.getMove();
  }

  getMove() {
    InputView.readMoving.bind(this)(this.moveOneStep);
  }

  tryCatchforMove(callback) {
    try {
      callback();
    } catch {
      InputView.readMoving.bind(this)(this.moveOneStep);
    }
  }

  moveOneStep(input) {
    this.tryCatchforMove(() => {
      Validator.validateMoving(input);
      const bridgeGame = new BridgeGame(this.#bridge, this.#location);
      const moveSuccess = bridgeGame.move(input);
      OutputView.printMap(this.#bridge, this.#location, moveSuccess);
      this.#location += 1;
      this.whatNext(moveSuccess);
    });
  }

  whatNext(moveSuccess) {
    if (moveSuccess) {
      if (this.#location === this.#bridgeLength) {
        this.gameClear();
      } else {
        this.continueMove();
      }
    } else {
      InputView.readGameCommand.bind(this)(this.moveFail);
    }
  }

  gameClear() {
    OutputView.printResult(
      this.#bridge,
      this.#location - 1,
      SUCCESS,
      this.#attempts
    );
  }

  continueMove() {
    this.getMove();
  }

  moveFail(input) {
    try {
      Validator.validateGameCommand(input);
    } catch {
      InputView.readGameCommand.bind(this)(this.moveFail);
    }
    if (input === 'R') {
      this.gameRetry();
    }
    if (input === 'Q') {
      this.gameFailiure();
    }
  }

  gameRetry() {
    this.#location = 0;
    this.#attempts += 1;
    this.getMove();
  }

  gameFailiure() {
    OutputView.printResult(
      this.#bridge,
      this.#location - 1,
      FAIL,
      this.#attempts
    );
  }
}

module.exports = Game;
