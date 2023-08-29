const STRING = require('./Constant/Constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i += 1) {
      const randomNumber = generateRandomNumber();
      if (randomNumber === 0) bridge.push(STRING.DOWN);
      if (randomNumber === 1) bridge.push(STRING.UP);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
