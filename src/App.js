const Baseball = require("./BaseballGame");
const BaseballController = require("./controller/BaseballController");
const BaseballModel = require("./model/BaseballModel");

class App {
    play() {
        const baseballModel = new BaseballModel();
        const baseballController = new BaseballController(baseballModel);

        const baseball = new Baseball(baseballModel, baseballController);
        baseball.buildGame();
    }
}

const app = new App();
app.play();

module.exports1 = App;
