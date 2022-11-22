const Validator = require('../src/Validator');

describe('사용자 입력 유효성 검사 테스트', () => {
  test.each([['-1'], ['2'], ['21']])(
    '다리 길이 유효성 검사 - 예외',
    (input) => {
      expect(() => {
        Validator.validateBridgeSizeInput(input);
      }).toThrow('3 이상 20 이하의 정수를 입력해주세요.');
    }
  );

  test('다리 길이 유효성 검사 - 성공', () => {
    expect(() => {
      Validator.validateBridgeSizeInput('20');
    });
  });

  test.each([['DE'], ['2'], [' ']])('이동 유효성 검사 - 예외', (input) => {
    expect(() => {
      Validator.validateMoving(input);
    }).toThrow('U 또는 D를 입력해주세요.');
  });

  test('이동 유효성 검사 - 성공', () => {
    expect(() => {
      Validator.validateMoving('U');
    });
  });
  c;

  test.each([['QQ'], ['D'], ['32']])(
    '게임 커맨드 유효성 검사 - 예외',
    (input) => {
      expect(() => {
        Validator.validateGameCommand(input);
      }).toThrow('R 또는 Q를 입력해주세요.');
    }
  );

  test('게임 커맨드 유효성 검사 - 성공', () => {
    expect(() => {
      Validator.validateGameCommand('Q');
    });
  });
});
