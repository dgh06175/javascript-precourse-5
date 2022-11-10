/* eslint-disable quotes */
const MissionUtils = require("@woowacourse/mission-utils");

const { Console } = MissionUtils;

const LOTTOPRICE = 1000;

class Money {
  constructor() {
    this.check = {
      isDividedByLottoPrice: (answer) => answer % LOTTOPRICE === 0,
      isInt: (answer) => Number.isInteger(+answer),
    };
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      if (!this.validateForMoney(answer)) {
        throw new Error(`금액은 ${LOTTOPRICE}의 배수여야 합니다..`);
      }
      const lottoCount = Number(answer) / LOTTOPRICE;
      return lottoCount;
    });
  }

  validateForMoney(money) {
    const { isDividedByLottoPrice, isInt } = this.check;
    if (!isDividedByLottoPrice(money) || !isInt(money)) {
      return false;
    }
  }
}

module.exports = Money;
