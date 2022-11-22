const Validator = require('../src/Validate/Validator');
const ERROR = '[ERROR] ';
const BRIGE_SIZE_ERROR = '다리 길이는 3부터 20 사이의 숫자여야 합니다.';
const MOVE_ERROR = '이동할 칸은 U또는 D여야 합니다.';
const GAME_COMMAND_ERROR = '재시작 여부는 R또는 Q여야 합니다.';

describe('사용자 입력 유효성 검사 테스트', () => {
  test.each([['-1'], ['2'], ['21'], ['a']])(
    '다리 길이 유효성 검사 - 예외',
    (input) => {
      expect(() => {
        Validator.validateBridgeSizeInput(input);
      }).toThrow(BRIGE_SIZE_ERROR);
    }
  );

  test('다리 길이 유효성 검사 - 성공', () => {
    expect(() => {
      Validator.validateBridgeSizeInput('20');
    });
  });

  test.each([['DE'], ['2'], [' '], ['a']])(
    '이동 유효성 검사 - 예외',
    (input) => {
      expect(() => {
        Validator.validateMoving(input);
      }).toThrow(MOVE_ERROR);
    }
  );

  test('이동 유효성 검사 - 성공', () => {
    expect(() => {
      Validator.validateMoving('U');
    });
  });

  test.each([['QQ'], ['D'], ['32'], ['a']])(
    '게임 커맨드 유효성 검사 - 예외',
    (input) => {
      expect(() => {
        Validator.validateGameCommand(input);
      }).toThrow(GAME_COMMAND_ERROR);
    }
  );

  test('게임 커맨드 유효성 검사 - 성공', () => {
    expect(() => {
      Validator.validateGameCommand('Q');
    });
  });
});
