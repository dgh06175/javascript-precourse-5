const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;

class App {
  playerNumber;

  computerNumber;

  isStrike(num, i) {
    return this.computerNumber[i] === num;
  }

  isBall(num, i) {
    return this.computerNumber[i] !== num && this.computerNumber.includes(num);
  }

  isValid(answer) {
    if (answer.length === 3) {
      return true;
    }
    return false;
  }

  constructor() {
    this.playerNumber = "";
    this.computerNumber = "";
    this.result = {};
  }

  comNumberInit() {
    while (this.computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number))
        this.computerNumber += `${number}`;
    }
    this.computerNumber = [...this.computerNumber];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.comNumberInit();
    this.playerInput();
  }
}

const app = new App();
app.play();

module.exports = App;
