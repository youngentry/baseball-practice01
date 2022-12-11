const Input = require("./Input");
const Printer = require("./Printer");
const Generator = require("./Generator");
const Baseball = require("./Baseball");
const { validateNumber } = require("./validation");
const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./message");

class Controller {
    #printer;
    #input;
    #computerNumber;
    #baseball;
    constructor() {
        this.#printer = new Printer();
        this.#input = Input;
        this.#computerNumber;
        this.#baseball;
    }

    start() {
        this.#computerNumber = new Generator().randomNumber();
        this.#baseball = new Baseball(this.#computerNumber);

        this.#printer.start();

        this.inputPitch();
    }

    inputPitch() {
        this.#input.readPitch((userInput) => {
            this.validateInputNumber(userInput);
        });
    }

    validateInputNumber(userInput) {
        try {
            validateNumber(userInput);
            // 에러가 없이 지나가면 다음 실행
            this.getHint(userInput);
        } catch {
            // 에러가 try에서 발생하면 여기 실행
            Console.print("print 에러 추가하기");
            this.inputPitch();
        }
    }

    getHint(pitchNumber) {
        this.#baseball.setStrike(pitchNumber);
        this.#baseball.setBall(pitchNumber);
        const strikeAndBall = this.#baseball.getStrikeAndBall();
        this.#printer.hint(strikeAndBall);
        if (strikeAndBall[0] === 3) {
            Console.print(MESSAGE.END);
            Console.print(MESSAGE.RESTART);
            this.inputRestart();
        } else {
            this.inputPitch();
        }
    }
    inputRestart() {
        this.#input.readCommand((userInput) => {
            if (userInput === "1") {
                this.start();
            }
            if (userInput === "2") {
                Console.close();
            }
        });
    }

    restart() {}
}
module.exports = Controller;
