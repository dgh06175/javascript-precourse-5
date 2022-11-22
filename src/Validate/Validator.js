const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

const STRING = {
  UP_CHAR: 'U',
  DOWN_CHAR: 'D',
  RETRY_CHAR: 'R',
  QUIT_CHAR: 'Q',
  MIN_BRIDGE_LEN: 3,
  MAX_BRIDGE_LEN: 20,
  ERROR: '[ERROR] ',
  BRIGE_SIZE_ERROR: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVE_ERROR: '이동할 칸은 U또는 D여야 합니다.',
  GAME_COMMAND_ERROR: '재시작 여부는 R또는 Q여야 합니다.',
};

const Validator = {
  isInt: (input) => Number.isInteger(+input),
  isValidSize: (input) =>
    +input >= STRING.MIN_BRIDGE_LEN && +input <= STRING.MAX_BRIDGE_LEN,
  isValidMove: (input) =>
    input === STRING.DOWN_CHAR || input === STRING.UP_CHAR,
  isValidGameCommand: (input) =>
    input === STRING.RETRY_CHAR || input === STRING.QUIT_CHAR,

  validateBridgeSizeInput(input) {
    if (!this.isInt(input) || !this.isValidSize(input)) {
      Console.print(STRING.ERROR + STRING.BRIGE_SIZE_ERROR);
      throw new Error(STRING.BRIGE_SIZE_ERROR);
    }
  },

  validateMoving(input) {
    if (!this.isValidMove(input)) {
      Console.print(STRING.ERROR + STRING.MOVE_ERROR);
      throw new Error(STRING.MOVE_ERROR);
    }
  },

  validateGameCommand(input) {
    if (!this.isValidGameCommand(input)) {
      Console.print(STRING.ERROR + STRING.GAME_COMMAND_ERROR);
      throw new Error(STRING.GAME_COMMAND_ERROR);
    }
  },
};

module.exports = Validator;
