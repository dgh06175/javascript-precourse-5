const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

const START_OUTPUT = '다리 건너기 게임을 시작합니다.';
const UP_CHAR = 'U';
const DOWN_CHAR = 'D';
const O_CHAR = 'O';
const X_CHAR = 'X';
const EMPTY_STRING = '';
const BLANK = ' ';
const LEFT_WALL = '[';
const RIGHT_WALL = ']';
const MIDDLE_WALL = '|';
const UP_INDEX = 0;
const DOWN_INDEX = 1;
const FINAL_GAME_RESULT = '\n최종 게임 결과';
const GAME_SUCCESS = '\n게임 성공 여부: 성공';
const GAME_FAILURE = '\n게임 성공 여부: 실패';
const TOTAL_ATTEMPTS = '총 시도한 횟수: ';

const OutputView = {
  startOutput() {
    Console.print(START_OUTPUT);
  },

  printMap(bridge, location, moveSuccess) {
    const map = [EMPTY_STRING, EMPTY_STRING];
    map[UP_INDEX] += this.makeOneLineMap(
      bridge,
      location,
      moveSuccess,
      UP_CHAR
    );
    map[DOWN_INDEX] += this.makeOneLineMap(
      bridge,
      location,
      moveSuccess,
      DOWN_CHAR
    );
    Console.print(map[UP_INDEX]);
    Console.print(map[DOWN_INDEX]);
  },

  makeOneLineMap(bridge, location, moveSuccess, upOrDown) {
    let oneLineMap = LEFT_WALL + BLANK;
    for (let index = 0; index < location; index += 1) {
      if (bridge[index] === upOrDown) oneLineMap += O_CHAR;
      else oneLineMap += BLANK;
      oneLineMap += BLANK + MIDDLE_WALL + BLANK;
    }
    oneLineMap += this.addLastMap(bridge, location, moveSuccess, upOrDown);
    oneLineMap += BLANK + RIGHT_WALL;
    return oneLineMap;
  },

  addLastMap(bridge, location, moveSuccess, upOrDown) {
    if (moveSuccess) {
      if (bridge[location] === upOrDown) return O_CHAR;
      return BLANK;
    }
    if (bridge[location] === upOrDown) return BLANK;
    return X_CHAR;
  },

  printResult(bridge, location, isSuccess, attempts) {
    Console.print(FINAL_GAME_RESULT);
    this.printMap(bridge, location, isSuccess);
    if (isSuccess) Console.print(GAME_SUCCESS);
    else Console.print(GAME_FAILURE);
    Console.print(`${TOTAL_ATTEMPTS}${attempts}`);
  },
};

module.exports = OutputView;
