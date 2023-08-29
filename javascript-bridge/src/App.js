const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const GAME = new BridgeGame('', 0);
  }
}

const app = new App();
app.play();

module.exports = App;
