const Controller = require("./Controller");

class App {
    #controller;
    constructor() {
        this.#controller = new Controller();
    }
    play() {
        this.#controller.start();
    }
}

const app = new App();
app.play();

module.exports = App;
