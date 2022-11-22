const STRING = {
  DOWN_CHAR: 'D',
  UP_CHAR: 'U',
};

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      const randomNumber = generateRandomNumber();
      if (randomNumber === 0) bridge.push(STRING.DOWN_CHAR);
      if (randomNumber === 1) bridge.push(STRING.UP_CHAR);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
