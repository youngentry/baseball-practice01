const { judgePitch } = require("./utilities/utilJudgePitch");

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
        this.#controller.inputUserNumber(() => this.pitchBall());
    }

    pitchBall() {
        const userNumber = this.#model.getUserNumber();
        const computerNumber = this.#model.getComputerNumber();
        const strike = judgePitch.matchStrike(userNumber, computerNumber);
        const ball = judgePitch.matchBall(userNumber, computerNumber, strike);
        this.#controller.setPitchResult(strike, ball);
        this.judge();
    }

    judge() {
        const strike = this.#model.getStrikeCount();
        const ball = this.#model.getBallCount();
        this.#controller.printJudge(strike, ball);
        const isSuccess = strike === 3;
        if (isSuccess) {
            return this.restart();
        }
        return this.#controller.inputUserNumber(() => this.pitchBall());
    }

    restart() {
        this.#controller.printSuccess();
        this.#controller.inputUserCommand(() => {
            const userCommand = this.#model.getUserCommand();
            if (userCommand === "1") {
                this.buildGame();
            }
            if (userCommand === "2") {
                this.#controller.end();
            }
        });
    }
}

module.exports = Baseball;
