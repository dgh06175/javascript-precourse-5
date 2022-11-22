const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validator = require('./Validate/Validator');

const SUCCESS = true;
const FAIL = false;
const RETRY = 'R';
const QUIT = 'Q';
const FIRST_ATTEMPTS = 1;
const RESET_LOCATION = 0;

class BridgeGame {
  #bridge;

  #bridgeLength;

  #location;

  #attempts;

  constructor(bridge, location) {
    this.#bridge = bridge;
    this.#location = location;
    this.#attempts = FIRST_ATTEMPTS;
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
    InputView.readMoving.bind(this)(this.move);
  }

  tryCatchforMove(callback) {
    try {
      callback();
    } catch {
      InputView.readMoving.bind(this)(this.move);
    }
  }

  move(input) {
    this.tryCatchforMove(() => {
      Validator.validateMoving(input);
      const moveSuccess = this.isSuccess(input);
      OutputView.printMap(this.#bridge, this.#location, moveSuccess);
      this.#location += 1;
      this.whatNext(moveSuccess);
    });
  }

  isSuccess(input) {
    if (this.#bridge[this.#location] === input) {
      return true;
    }
    return false;
  }

  whatNext(moveSuccess) {
    if (moveSuccess) {
      if (this.#location === this.#bridgeLength) this.gameClear();
      else this.continueMove();
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
    MissionUtils.Console.close();
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
    if (input === RETRY) this.retry();
    if (input === QUIT) this.gameFailiure();
  }

  retry() {
    this.#location = RESET_LOCATION;
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
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
