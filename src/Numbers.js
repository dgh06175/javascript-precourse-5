const MissionUtils = require('@woowacourse/mission-utils');

const Result = require('./Result');

const { Console, Random } = MissionUtils;

const LOTTO_PRICE = 1000;

class Numbers {
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
      const buyLottoCount = Number(answer) / LOTTO_PRICE;
      this.createRandomLottoNumbers(buyLottoCount);
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
    this.inputLottoWinNumber(lottoAry);
  }

  inputLottoWinNumber(lottoAry) {
    let winNumber;
    let bonusNumber;

    Console.readLine('당첨 번호를 입력해주세요.', (userInput) => {
      winNumber = userInput.split(',').map((i) => Number(i));
    });

    Console.readLine('보너스 번호를 입력해 주세요.', (userInput) => {
      bonusNumber = Number(userInput);
    });

    Result(lottoAry, winNumber, bonusNumber);
  }
}
