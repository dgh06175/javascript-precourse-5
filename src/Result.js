/* eslint-disable comma-dangle */
const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

class Result {
  constructor(lottoAry, winNumber, bonusNumber) {
    this.winCount = {
      sameNumberis3: 0,
      sameNumberis4: 0,
      sameNumberis5: 0,
      sameNumberis5andBonus: 0,
      sameNumberis6: 0,
    };
    this.lottoAry = lottoAry;
    this.winNumber = winNumber;
    this.bonusNumber = bonusNumber;
  }

  compareLotto() {
    const SIZE = this.lottoAry.length;

    for (let index = 0; index < SIZE; index += 1) {
      this.compareAry(this.lottoAry[index]);
    }
    this.printResults();
  }

  compareAry(lotto) {
    const sameNumberCount = lotto.filter((x) =>
      this.winNumber.includes(x)
    ).length;
    switch (sameNumberCount) {
      case 3:
        this.winCount.sameNumberis3 += 1;
        break;
      case 4:
        this.winCount.sameNumberis4 += 1;
        break;
      case 5:
        if (lotto.includes(this.bonusNumber)) {
          this.winCount.sameNumberis5andBonus += 1;
        } else {
          this.winCount.sameNumberis5 += 1;
        }
        break;
      case 6:
        this.winCount.sameNumberis6 += 1;
        break;
      default:
    }
  }

  printResults() {
    Console.print('\n당첨 통계\n---\n');
    const resultText = `3개 일치 (5,000원) - ${this.winCount.sameNumberis3}개\n4개 일치 (50,000원) - ${this.winCount.sameNumberis4}개\n5개 일치 (1,500,000원) - ${this.winCount.sameNumberis5}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winCount.sameNumberis5andBonus}개\n6개 일치 (2,000,000,000원) - ${this.winCount.sameNumberis6}개`;
    Console.print(resultText);
  }
}

const a = new Result(
  [
    [1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8],
  ],
  [4, 5, 6, 7, 8, 9],
  3
);

module.exports = Result;
