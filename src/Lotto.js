const MissionUtils = require('@woowacourse/mission-utils');

const { Console, Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.#numbers = numbers;
    this.bonusNumber = bonusNumber;
  }

  validate(numbers, bonusNumber) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const validCheckSet = new Set(numbers);
    if (validCheckSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되는 번호가 없어야 합니다.');
    }
    if (numbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호와 중복되면 안됩니다.');
    }
  }

  // TODO: 추가 기능 구현
}

// const a = new Lotto([1, 2, 3, 4, 5, 6]);
// a.createRandomLottoNumbers(8);
module.exports = Lotto;
