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
    this.computerNumber = "";
    while (this.computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number))
        this.computerNumber += `${number}`;
    }
    this.computerNumber = [...this.computerNumber];
  }

  playerInput() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (!this.isValid(answer)) {
        throw new Error("잘못된 입력입니다..");
      }

      this.playerNumber = [...answer];
      this.result = {};

      this.playerNumber.forEach((num, i) => {
        if (this.isStrike(num, i)) {
          this.result.strike = this.result.strike + 1 || 1;
        }
        if (this.isBall(num, i)) {
          this.result.ball = this.result.ball + 1 || 1;
        }
      });

      this.printResultText();
      this.continueGame();
    });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.comNumberInit();
    this.playerInput();
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
