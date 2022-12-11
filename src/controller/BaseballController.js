const { utilGenerator } = require("../utilities/utilGenerator");
const { validateNumber } = require("../utilities/UtilValidation");
const OutputView = require("../view/OutputView");
const InputView = require("../view/InputView");

class BaseballController {
    #outputView;
    #inputView;
    #baseballModel;

    constructor(baseballModel) {
        this.#outputView = new OutputView();
        this.#inputView = new InputView();
        this.#baseballModel = baseballModel;
    }

    printStart() {
        this.#outputView.start();
        console.log(this.#inputView);
        console.log(this.#outputView);
        console.log(this.#baseballModel);
    }

    setComputerNumber() {
        const computerNumber = utilGenerator.randomNumber();
        this.#baseballModel.setComputerNumber(computerNumber);
    }

    inputUserNumber(callback) {
        this.#inputView.readPitch((userInput) => {
            this.setUserNumber(userInput, callback);
        });
    }

    setUserNumber(userInput, callback) {
        const validUserNumber = validateNumber(userInput);
        console.log(validUserNumber);
        this.#baseballModel.setUserNumber(validUserNumber);
        callback();
    }
}
module.exports = BaseballController;
