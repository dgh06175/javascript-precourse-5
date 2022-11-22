const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('U 다리 생성 테스트', () => {
    const result = BridgeMaker.makeBridge(3, () => 1);
    expect(result).toEqual(['U', 'U', 'U']);
  });

  test('D 다리 생성 테스트', () => {
    const result = BridgeMaker.makeBridge(6, () => 0);
    expect(result).toEqual(['D', 'D', 'D', 'D', 'D', 'D']);
  });
});
