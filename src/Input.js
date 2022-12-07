const { Console } = require("@woowacourse/mission-utils");
const Baseball = require("./Baseball");
const Generator = require("./Generator");
const MESSAGE = require("./message");

class Input {
    readPitch(baseball) {
        Console.readLine(MESSAGE.INPUT, (pitchNumber) => {
            const ball = baseball.countBall(pitchNumber);
        });
    }
}

module.exports = Input;
