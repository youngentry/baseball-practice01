const { Console } = require("@woowacourse/mission-utils");
const Baseball = require("./Baseball");
const Generator = require("./Generator");
const MESSAGE = require("./message");
const Printer = require("./Printer");

class Input {
    constructor() {
        this.printer = new Printer();
    }

    readPitch(baseball) {
        Console.readLine(MESSAGE.INPUT, (pitchNumber) => {
            baseball.setStrike(pitchNumber);
            baseball.setBall(pitchNumber);
            const strikeAndBall = baseball.getStrikeAndBall();
            this.printer.hint(strikeAndBall);
            this.readPitch(baseball);
        });
    }
}

module.exports = Input;
