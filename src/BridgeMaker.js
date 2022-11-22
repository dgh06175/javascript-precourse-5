const DOWN_CHAR = 'D';
const UP_CHAR = 'U';

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      const randomNumber = generateRandomNumber();
      if (randomNumber === 0) bridge.push(DOWN_CHAR);
      if (randomNumber === 1) bridge.push(UP_CHAR);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
