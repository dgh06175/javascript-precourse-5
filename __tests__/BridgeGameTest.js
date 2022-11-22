const BridgeGame = require('../src/BridgeGame');

describe('다리 건널때 성공 실패 여부 테스트', () => {
  const BRIDGE = 'DUUD';
  const INDEX = 2;
  const INPUT = ['U', 'D'];
  const results = [true, false];
  const LOOP = 2;
  const bridgeGame = new BridgeGame(BRIDGE, INDEX);
  for (let i = 0; i < LOOP; i += 1) {
    test(`테스트 ${i + 1}`, () => {
      const result = bridgeGame.isSuccess(INPUT[i]);
      expect(result).toEqual(results[i]);
    });
  }
});
