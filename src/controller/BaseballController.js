const { Console } = require("@woowacourse/mission-utils");
const { utilGenerator } = require("../utilities/utilGenerator");
const { validateNumber, validateCommand } = require("../utilities/UtilValidation");
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

    //1
    printStart() {
        this.#outputView.start();
    }

    //2
    setComputerNumber() {
        const computerNumber = utilGenerator.randomNumber();
        this.#baseballModel.setComputerNumber(computerNumber);
    }

    //3
    inputUserNumber(callback) {
        this.#inputView.readPitch((userInput) => {
            this.validateUserNumber(userInput, callback);
        });
    }

    //3-1
    validateUserNumber(userInput, callback) {
        const validUserNumber = validateNumber(userInput);
        this.#baseballModel.setUserNumber(validUserNumber);
        callback();
    }

    //4 model.getUserNumber

    //5
    setPitchResult(strike, ball) {
        this.#baseballModel.setStrikeCount(strike);
        this.#baseballModel.setBallCount(ball);
    }
    printJudge(strike, ball) {
        this.#outputView.hint(strike, ball);
    }

    printSuccess() {
        this.#outputView.success();
    }

    inputUserCommand(callback) {
        this.#inputView.readCommand((userCommand) => {
            this.validateUserCommand(userCommand, callback);
        });
    }

    validateUserCommand(userCommand, callback) {
        const validUserCommand = validateCommand(userCommand);
        this.#baseballModel.setUserCommand(validUserCommand);
        callback();
    }

    end() {
        Console.close();
    }
}
module.exports = BaseballController;
