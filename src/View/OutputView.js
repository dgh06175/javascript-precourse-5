const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

const STRING = require('../Constant/Constant');

const UP_INDEX = 0;
const DOWN_INDEX = 1;

const OutputView = {
  startOutput() {
    Console.print(STRING.START_OUTPUT);
  },

  printMap(bridge, location, moveSuccess) {
    const map = [STRING.EMPTY, STRING.EMPTY];
    map[UP_INDEX] += this.makeOneLineMap(
      bridge,
      location,
      moveSuccess,
      STRING.UP
    );
    map[DOWN_INDEX] += this.makeOneLineMap(
      bridge,
      location,
      moveSuccess,
      STRING.DOWN
    );
    Console.print(map[UP_INDEX]);
    Console.print(map[DOWN_INDEX]);
  },

  makeOneLineMap(bridge, location, moveSuccess, upOrDown) {
    let oneLineMap = STRING.LEFT_WALL + STRING.BLANK;
    for (let index = 0; index < location; index += 1) {
      if (bridge[index] === upOrDown) oneLineMap += STRING.O;
      else oneLineMap += STRING.BLANK;
      oneLineMap += STRING.BLANK + STRING.MIDDLE_WALL + STRING.BLANK;
    }
    oneLineMap += this.addLastMap(bridge, location, moveSuccess, upOrDown);
    oneLineMap += STRING.BLANK + STRING.RIGHT_WALL;
    return oneLineMap;
  },

  addLastMap(bridge, location, moveSuccess, upOrDown) {
    if (moveSuccess) {
      if (bridge[location] === upOrDown) return STRING.O;
      return STRING.BLANK;
    }
    if (bridge[location] === upOrDown) return STRING.BLANK;
    return STRING.X;
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
