/* eslint-disable quotes */
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.MAXLEN = 3;
    this.continueGame = true;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    while (this.continueGame) {
      const computerNumber = this.comRandomInit();
      while (this.playGame(computerNumber) === "continue");
      this.continueGame = this.userInputForContinue();
    }

    MissionUtils.Console.close();
  }

  comRandomInit() {
    const randomArr = [];
    while (randomArr.length < this.MAXLEN) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArr.includes(number)) randomArr.push(number);
    }
    return randomArr;
    // randomArr = [ 3, 9, 7 ]
  }

  playGame(computerNumber) {
    const playerNumber = this.playerInputForGame();
    const ballStrike = this.countBallStrike(computerNumber, playerNumber);
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
    if (strike === this.MAXLEN) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return "finish";
    }
    return "continue";
  }

  countBallStrike(computerNumber, playerNumber) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < this.MAXLEN; i += 1) {
      if (computerNumber[i] === playerNumber[i]) strike += 1;
      else if (playerNumber.includes(computerNumber[i])) ball += 1;
    }
    return [ball, strike];
    // [1, 2]
  }

  playerInputForGame() {
    let inputData;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      inputData = answer;
    });
    if (!this.isInputValid(inputData)) {
      throw new Error("잘못된 입력입니다.");
    }
    const tempAry = [];
    inputData = inputData.split("");
    for (let i = 0; i < this.MAXLEN; i += 1) {
      tempAry.push(Number(inputData[i]));
    }
    return tempAry;
    // [4, 5, 6] 이런식으로 반환
  }

  isInputValid(inputData) {
    if (isNaN(Number(inputData))) return false;
    const checkValidSet = new Set();
    for (let i = 0; i < this.MAXLEN; i += 1) {
      checkValidSet.add(inputData[i]);
    }
    if (checkValidSet.length === this.MAXLEN) return true;
    return false;
  }

  userInputForContinue() {
    let inputData;
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        inputData = answer;
      }
    );
    if (!this.isInputValidForContinue(inputData)) {
      throw new Error("잘못된 입력입니다.");
    }
    if (inputData === "1") return true;
    return false;
  }

  isInputValidForContinue(inputData) {
    if (isNaN(Number(inputData))) return false;
    if (inputData === "1" || inputData === "2") return true;
    return false;
  }
}

const a = new App();
a.play();

module.exports = App;
