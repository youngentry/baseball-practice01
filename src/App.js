const Baseball = require("./Baseball");
const Generator = require("./Generator");
const Input = require("./Input");
const Printer = require("./Printer");

class App {
    constructor() {
        this.printer = new Printer();
        this.input = new Input();
    }
    play() {
        this.printer.start();
        const computerNumber = new Generator().randomNumber();
        const baseball = new Baseball(computerNumber);
        this.input.readPitch(baseball);
    }
}

const app = new App();
app.play();

module.exports = App;
