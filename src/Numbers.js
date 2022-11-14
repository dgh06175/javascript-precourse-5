const MissionUtils = require('@woowacourse/mission-utils');

const { Console, Random } = MissionUtils;

const LOTTO_PRICE = 1000;

class Numbers {
  constructor() {
    this.check = {
      isValidPrice: (answer) => answer % LOTTO_PRICE === 0,
      isInt: (answer) => Number.isInteger(+answer),
    };
  }

  inputLottoWinNumber() {
    Console.readLine('당첨 번호를 입력해주세요. ', (numbers) => {
      console.log(`닉네임: ${numbers}`);
    });
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (answer) => {
      if (!this.validateForMoney(answer)) {
        throw new Error(`금액은 ${LOTTO_PRICE}의 배수여야 합니다..`);
      }
      const buyLottoCount = Number(answer) / LOTTO_PRICE;
      return buyLottoCount;
    });
  }

  validateForMoney(money) {
    const { isValidPrice, isInt } = this.check;
    if (!isValidPrice(money) || !isInt(money)) {
      return false;
    }
    return true;
  }

  createRandomLottoNumbers(buyLottoCount) {
    const lottoAry = [];
    for (let i = 0; i < buyLottoCount; i += 1) {
      const tmpAry = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoAry.push(tmpAry.sort((a, b) => a - b));
    }
    return lottoAry;
  }
}
