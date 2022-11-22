const UP_CHAR = 'U';
const DOWN_CHAR = 'D';
const RETRY_CHAR = 'R';
const QUIT_CHAR = 'Q';
const MIN_BRIDGE_LEN = 3;
const MAX_BRIDGE_LEN = 20;

const Validator = {
  validateBridgeSizeInput(input) {
    if (+input < MIN_BRIDGE_LEN || +input > MAX_BRIDGE_LEN) {
      throw new Error('3 이상 20 이하의 정수를 입력해주세요.');
    }
  },

  validateMoving(input) {
    if (input !== DOWN_CHAR && input !== UP_CHAR) {
      throw new Error('U 또는 D를 입력해주세요.');
    }
  },

  validateGameCommand(input) {
    if (input !== RETRY_CHAR && input !== QUIT_CHAR) {
      throw new Error('R 또는 Q를 입력해주세요.');
    }
  },
};

module.exports = Validator;
