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

  comRandomInit() {
    const randomArr = [];
    while (randomArr.length < this.MAXLEN) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (randomArr.includes(number) === false) randomArr.push(number);
    }
    return randomArr;
    // randomArr = [ 3, 9, 7 ]
  }

  playGame(computerNumber) {
    const playerNumber = playerInputForGame();
    const ballStrike = countBallStrike(computerNumber, playerNumber);
    const ball = ballStrike[0];
    const strike = ballStrike[1];
    let ballStrikeText = "";
    if (ball === 0 && strike === 0) {
      ballStrikeText += "낫싱";
    }
    if (ball > 0) {
      ballStrikeText += `${ball}볼`;
    }
    if (strike > 0) {
      ballStrikeText += ` ${strike}스트라이크`;
    }
    MissionUtils.Console.print(ballStrikeText);
    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return "finish";
    }
    return "continue";
  }
}

const a = new App();
a.play();

module.exports = App;
