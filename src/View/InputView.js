const MissionUtils = require('@woowacourse/mission-utils');

const STRING = require('../Constant/Constant');

const { Console } = MissionUtils;
const InputView = {
  readBridgeSize(callback) {
    Console.readLine(STRING.READ_BRIDGE_SIZE_TEXT, (answer) => {
      callback.bind(this)(answer);
    });
  },

  readMoving(callback) {
    Console.readLine(STRING.READ_MOVING_TEXT, (answer) => {
      callback.bind(this)(answer);
    });
  },

  readGameCommand(callback) {
    Console.readLine(STRING.READ_GAME_COMMAND_TEXT, (answer) => {
      callback.bind(this)(answer);
    });
  },
};

module.exports = InputView;
