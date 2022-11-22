const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validator = require('./Validator');

const SUCCESS = true;
const FAIL = false;
const RETRY = 'R';
const QUIT = 'Q';
/**
 * 다리 건너기 게임을 관리하는 클래스
 * 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 * BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
 * BridgeGame의 파일 경로는 변경할 수 있다.
 * BridgeGame의 메서드의 이름은 변경할 수 없고
 * 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */
class BridgeGame {
  #bridge;

  #bridgeLength;

  #location;

  #attempts;

  constructor(bridge, location) {
    this.#bridge = bridge;
    this.#location = location;
    this.#attempts = 1;
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

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
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
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
