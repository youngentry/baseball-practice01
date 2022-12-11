const { judgePitch } = require("./utilities/judgePitch");
const { utilGenerator } = require("./utilities/utilGenerator");

class Baseball {
    #model;
    #controller;

    constructor(model, controller) {
        this.#model = model;
        this.#controller = controller;
    }

    buildGame() {
        this.#controller.printStart();
        this.#controller.setComputerNumber();
        this.#controller.inputUserNumber(() => this.match());
    }
    match() {
        console.log("asd");
        const userNumber = this.#model.getUserNumber();
        console.log(userNumber);
    }
}

module.exports = Baseball;
