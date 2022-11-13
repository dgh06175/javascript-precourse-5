/* eslint-disable quotes */
const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

const LOTTO_PRICE = 1000;

class Money {
  constructor() {
    this.check = {
      isValidPrice: (answer) => answer % LOTTO_PRICE === 0,
      isInt: (answer) => Number.isInteger(+answer),
    };
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      if (!this.validateForMoney(answer)) {
        throw new Error(`금액은 ${LOTTO_PRICE}의 배수여야 합니다..`);
      }
      const lottoCount = Number(answer) / LOTTO_PRICE;
      return lottoCount;
    });
  }

  validateForMoney(money) {
    const { isValidPrice, isInt } = this.check;
    if (!isValidPrice(money) || !isInt(money)) {
      return false;
    }
    return true;
  }
}

module.exports = Money;
