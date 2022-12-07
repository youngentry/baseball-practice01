const MESSAGE = require("./message");

class Baseball {
    #computer;
    constructor(computer) {
        this.#computer = computer;
    }

    countBall(pitchNumber) {
        let ballCount = 0;
        this.#computer.forEach((computerNumber) => {
            if (pitchNumber.split("").includes(computerNumber.toString())) {
                ballCount++;
            }
        });
        console.log(ballCount + MESSAGE.BALL);
        return ballCount;
    }
}

const baseball = new Baseball([1, 6, 3]);
baseball.countBall("125");

module.exports = Baseball;
