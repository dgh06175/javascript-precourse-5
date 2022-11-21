const Game = require('./Game');

class App {
  play() {
    const GAME = new Game();
    GAME.initGame();
  }
}

const app = new App();
app.play();

module.exports = App;
