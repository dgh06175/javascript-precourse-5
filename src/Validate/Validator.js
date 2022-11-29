const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

const STRING = require('../Constant/Constant');

const MIN_BRIDGE_LEN = 3;
const MAX_BRIDGE_LEN = 20;

const Validator = {
  isInt: (input) => Number.isInteger(+input),
  isValidSize: (input) => +input >= MIN_BRIDGE_LEN && +input <= MAX_BRIDGE_LEN,
  isValidMove: (input) => input === STRING.DOWN || input === STRING.UP,
  isValidGameCommand: (input) =>
    input === STRING.RETRY || input === STRING.QUIT,

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
