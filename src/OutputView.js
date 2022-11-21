const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 * 제공된 OutputView 객체를 활용해 구현해야 한다.
 * OutputView의 파일 경로는 변경할 수 있다.
 * OutputView의 메서드의 이름은 변경할 수 없고,  * 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 값 출력을 위해 필요한 메서드를 추가할 수 있다.

 */
const OutputView = {
  startOutput() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, location, moveSuccess) {
    const map = ['', ''];
    map[0] += this.makeOneLineMap(bridge, location, moveSuccess, 'U');
    map[1] += this.makeOneLineMap(bridge, location, moveSuccess, 'D');
    Console.print(map[0]);
    Console.print(map[1]);
  },

  makeOneLineMap(bridge, location, moveSuccess, upOrDown) {
    let oneLineMap = '[ ';
    for (let i = 0; i < location; i += 1) {
      if (bridge[i] === upOrDown) oneLineMap += 'O';
      else oneLineMap += ' ';
      oneLineMap += ' | ';
    }
    oneLineMap += this.addLastMap(bridge, location, moveSuccess, upOrDown);
    oneLineMap += ' ]';
    return oneLineMap;
  },

  addLastMap(bridge, location, moveSuccess, upOrDown) {
    if (moveSuccess) {
      if (bridge[location] === upOrDown) return 'O';
      return ' ';
    }
    if (bridge[location] === upOrDown) return ' ';
    return 'X';
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  // printResult() {},
};

module.exports = OutputView;
