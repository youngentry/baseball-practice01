const MESSAGE = require("./message");

class Baseball {
    #computer;
    #ball;
    #strike;
    constructor(computer) {
        this.#computer = computer;
        this.#ball;
        this.#strike;
    }

    setStrike(pitchNumber) {
        let strikeCount = 0;
        this.#computer.forEach((computerNumber, index) => {
            if (pitchNumber.split("")[index] === computerNumber.toString()) {
                strikeCount++;
            }
        });
        console.log(strikeCount + MESSAGE.STRIKE);
        this.#strike = strikeCount;
    }

    setBall(pitchNumber) {
        let ballCount = 0;
        this.#computer.forEach((computerNumber) => {
            if (pitchNumber.split("").includes(computerNumber.toString())) {
                ballCount++;
            }
        });
        console.log(ballCount - this.#strike + MESSAGE.BALL);
        this.#ball = ballCount - this.#strike;
    }
}

const baseball = new Baseball([1, 6, 3]);
baseball.setStrike("162");
baseball.setBall("162");

module.exports = Baseball;
