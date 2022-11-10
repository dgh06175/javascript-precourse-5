/* eslint-disable quotes */
const MissionUtils = require("@woowacourse/mission-utils");

const { Console } = MissionUtils;

class Money {
  #money;

  constructor(money) {
    this.#money = money;
    this.check = {
      isThousand: (answer) => answer % 1000 === 0,
      isInt: (answer) => Number.isInteger(+answer),
    };
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      if (!this.validateForMoney(answer)) {
        throw new Error("잘못된 입력입니다..");
      }
    });
  }

  validateForMoney(money) {
    const { isThousand, isInt } = this.check;
    if (!isThousand(money) || !isInt(money)) {
      return false;
    }
  }
}
