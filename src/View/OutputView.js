const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

const STRING = {
  START_OUTPUT: '다리 건너기 게임을 시작합니다.',
  UP_CHAR: 'U',
  DOWN_CHAR: 'D',
  O_CHAR: 'O',
  X_CHAR: 'X',
  EMPTY_STRING: '',
  BLANK: ' ',
  LEFT_WALL: '[',
  RIGHT_WALL: ']',
  MIDDLE_WALL: '|',
  UP_INDEX: 0,
  DOWN_INDEX: 1,
  FINAL_GAME_RESULT: '\n최종 게임 결과',
  GAME_SUCCESS: '\n게임 성공 여부: 성공',
  GAME_FAILURE: '\n게임 성공 여부: 실패',
  TOTAL_ATTEMPTS: '총 시도한 횟수: ',
};

const OutputView = {
  startOutput() {
    Console.print(STRING.START_OUTPUT);
  },

  printMap(bridge, location, moveSuccess) {
    const map = [STRING.EMPTY_STRING, STRING.EMPTY_STRING];
    map[STRING.UP_INDEX] += this.makeOneLineMap(bridge, location, moveSuccess, STRING.UP_CHAR);
    map[STRING.DOWN_INDEX] += this.makeOneLineMap(bridge, location, moveSuccess, STRING.DOWN_CHAR);
    Console.print(map[STRING.UP_INDEX]);
    Console.print(map[STRING.DOWN_INDEX]);
  },

  makeOneLineMap(bridge, location, moveSuccess, upOrDown) {
    let oneLineMap = STRING.LEFT_WALL + STRING.BLANK;
    for (let index = 0; index < location; index += 1) {
      if (bridge[index] === upOrDown) oneLineMap += STRING.O_CHAR;
      else oneLineMap += STRING.BLANK;
      oneLineMap += STRING.BLANK + STRING.MIDDLE_WALL + STRING.BLANK;
    }
    oneLineMap += this.addLastMap(bridge, location, moveSuccess, upOrDown);
    oneLineMap += STRING.BLANK + STRING.RIGHT_WALL;
    return oneLineMap;
  },

  addLastMap(bridge, location, moveSuccess, upOrDown) {
    if (moveSuccess) {
      if (bridge[location] === upOrDown) return STRING.O_CHAR;
      return STRING.BLANK;
    }
    if (bridge[location] === upOrDown) return STRING.BLANK;
    return STRING.X_CHAR;
  },

  printResult(bridge, location, isSuccess, attempts) {
    Console.print(STRING.FINAL_GAME_RESULT);
    this.printMap(bridge, location, isSuccess);
    if (isSuccess) Console.print(STRING.GAME_SUCCESS);
    else Console.print(STRING.GAME_FAILURE);
    Console.print(`${STRING.TOTAL_ATTEMPTS}${attempts}`);
  },
};

module.exports = OutputView;
