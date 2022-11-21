const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');

class Game {
  initGame() {
    OutputView.startOutput();
    InputView.readBridgeSize.bind(this)(this.printInput);
  }
}

module.exports = Game;
