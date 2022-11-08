/* eslint-disable quotes */
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.MAXLEN = 3;
    this.continueGame = true;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (continueGame) {
      let computerNumber = comRandomInit();
      while (playGame(computerNumber) === "continue");
      continueGame = userInputForContinue();
    }

    Console.close();
  }
}

const a = new App();
a.play();

module.exports = App;
