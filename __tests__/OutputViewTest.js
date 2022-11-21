const OutputView = require('../src/OutputView');
describe('중간 결과창 맵 생성 테스트', () => {
  const MAP = 'DUUD';
  const LOCATION = 3;
  const isSuccess = [true, true, false, false];
  const whatLineMap = ['U', 'D', 'D', 'U'];
  const results = [
    '[   | O | O |   ]',
    '[ O |   |   | O ]',
    '[ O |   |   |   ]',
    '[   | O | O | X ]',
  ];
  const LOOP = 4;

  for (let i = 0; i < LOOP; i += 1) {
    test(`테스트 ${i + 1}`, () => {
      const result = OutputView.makeOneLineMap(
        MAP,
        LOCATION,
        isSuccess[i],
        whatLineMap[i]
      );
      expect(result).toEqual(results[i]); // 예상되는 결과 작성
    });
  }
});
