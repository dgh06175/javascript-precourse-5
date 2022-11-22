const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;
const UP_CHAR = 'U';
const DOWN_CHAR = 'D';
const RETRY_CHAR = 'R';
const QUIT_CHAR = 'Q';
const MIN_BRIDGE_LEN = 3;
const MAX_BRIDGE_LEN = 20;
const ERROR = '[ERROR] ';
const BRIGE_SIZE_ERROR = '3 이상 20 이하의 정수를 입력해주세요.';
const MOVE_ERROR = 'U 또는 D를 입력해주세요.';
const GAME_COMMAND_ERROR = 'R 또는 Q를 입력해주세요.';

const Validator = {
  isInt: (input) => Number.isInteger(+input),
  isValidSize: (input) => +input >= MIN_BRIDGE_LEN && +input <= MAX_BRIDGE_LEN,

  validateBridgeSizeInput(input) {
    if (!this.isInt(input) || !this.isValidSize(input)) {
      Console.print(ERROR + BRIGE_SIZE_ERROR);
      throw new Error(BRIGE_SIZE_ERROR);
    }
  },

  isValidMove: (input) => input === DOWN_CHAR || input === UP_CHAR,

  validateMoving(input) {
    if (!this.isValidMove(input)) {
      Console.print(ERROR + MOVE_ERROR);
      throw new Error(MOVE_ERROR);
    }
  },

  isValidGameCommand: (input) => input === RETRY_CHAR || input === QUIT_CHAR,

  validateGameCommand(input) {
    if (!this.isValidGameCommand(input)) {
      Console.print(ERROR + GAME_COMMAND_ERROR);
      throw new Error(GAME_COMMAND_ERROR);
    }
  },
};

module.exports = Validator;
