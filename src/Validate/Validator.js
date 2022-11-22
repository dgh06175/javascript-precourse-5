const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;
const UP_CHAR = 'U';
const DOWN_CHAR = 'D';
const RETRY_CHAR = 'R';
const QUIT_CHAR = 'Q';
const MIN_BRIDGE_LEN = 3;
const MAX_BRIDGE_LEN = 20;
const ERROR = '[ERROR] ';
const BRIGE_SIZE_ERROR = '다리 길이는 3부터 20 사이의 숫자여야 합니다.';
const MOVE_ERROR = '이동할 칸은 U또는 D여야 합니다.';
const GAME_COMMAND_ERROR = '재시작 여부는 R또는 Q여야 합니다.';

const Validator = {
  isInt: (input) => Number.isInteger(+input),
  isValidSize: (input) => +input >= MIN_BRIDGE_LEN && +input <= MAX_BRIDGE_LEN,
  isValidMove: (input) => input === DOWN_CHAR || input === UP_CHAR,
  isValidGameCommand: (input) => input === RETRY_CHAR || input === QUIT_CHAR,

  validateBridgeSizeInput(input) {
    if (!this.isInt(input) || !this.isValidSize(input)) {
      Console.print(ERROR + BRIGE_SIZE_ERROR);
      throw new Error(BRIGE_SIZE_ERROR);
    }
  },

  validateMoving(input) {
    if (!this.isValidMove(input)) {
      Console.print(ERROR + MOVE_ERROR);
      throw new Error(MOVE_ERROR);
    }
  },

  validateGameCommand(input) {
    if (!this.isValidGameCommand(input)) {
      Console.print(ERROR + GAME_COMMAND_ERROR);
      throw new Error(GAME_COMMAND_ERROR);
    }
  },
};

module.exports = Validator;
