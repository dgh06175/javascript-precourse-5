const MissionUtils = require('@woowacourse/mission-utils');

const READ_BRIDGE_SIZE_TEXT = '\n다리의 길이를 입력해주세요.\n';
const READ_MOVING_TEXT = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const READ_GAME_COMMAND_TEXT =
  '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';

const { Console } = MissionUtils;
const InputView = {
  readBridgeSize(callback) {
    Console.readLine(READ_BRIDGE_SIZE_TEXT, (answer) => {
      callback.bind(this)(answer);
    });
  },

  readMoving(callback) {
    Console.readLine(READ_MOVING_TEXT, (answer) => {
      callback.bind(this)(answer);
    });
  },

  readGameCommand(callback) {
    Console.readLine(READ_GAME_COMMAND_TEXT, (answer) => {
      callback.bind(this)(answer);
    });
  },
};

module.exports = InputView;
