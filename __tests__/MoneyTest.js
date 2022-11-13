const Money = require('../src/Money');

const LOTTO_PRICE = 1000;

describe('머니 클래스 테스트', () => {
  test('1000의 배수 테스트', () => {
    const money = new Money();
    const result = money.validateForMoney('21010');
    expect(result).toEqual(false);
  });

  test('문자열 입력 테스트', () => {
    const money = new Money();
    const result = money.validateForMoney('2123a');
    expect(result).toEqual(false);
  });

  test('문자열 입력 테스트', () => {
    const money = new Money();
    const result = money.validateForMoney('21000');
    expect(result).toEqual(true);
  });
});
