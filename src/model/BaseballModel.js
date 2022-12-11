class BaseballModel {
    #computerNumber;
    #userNumber;
    #ball;
    #strike;
    #userCommand;

    setComputerNumber(computerNumber) {
        this.#computerNumber = computerNumber;
    }
    getComputerNumber() {
        return this.#computerNumber;
    }

    setUserNumber(userNumber) {
        console.log(userNumber, "usernumberser");
        this.#userNumber = userNumber;
        console.log(this.#userNumber, "888");
    }
    getUserNumber() {
        return this.#userNumber;
    }

    setStrikeCount(strikeCount) {
        this.#strike = strikeCount;
    }
    getStrikeCount() {
        return this.#strike;
    }

    setBallCount(ballCount) {
        this.#ball = ballCount;
    }
    getBallCount() {
        return this.#ball;
    }

    setUserCommand(userCommand) {
        this.#userCommand = userCommand;
    }
    getUserCommand() {
        return this.#userCommand;
    }
}

module.exports = BaseballModel;
