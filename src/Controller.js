const Input = require("./Input");
const Printer = require("./Printer");
const Generator = require("./Generator");
const Baseball = require("./Baseball");
const { validateNumber } = require("./validation");

class Controller {
    #printer;
    #input;
    #computerNumber;
    #baseball;
    constructor() {
        this.#printer = new Printer();
        this.#input = Input;
        this.#computerNumber = new Generator().randomNumber();
        this.#baseball = new Baseball(this.computerNumber);
    }

    start() {
        this.#printer.start();
        this.inputPitch();
    }

    inputPitch() {
        this.#input.readPitch2((userInput) => {
            this.validateInputNumber(userInput);
        });
    }

    validateInputNumber(userInput) {
        try {
            validateNumber(userInput);
            // 에러가 없이 지나가면 다음 실행
            console.log("다음");
        } catch {
            // 에러가 try에서 발생하면 여기 실행
            console.log("print 에러 추가하기");
            this.inputPitch();
        }
    }

    getHint(userInput) {
        this.#baseball.setStrike(pitchNumber);
        this.#baseball.setBall(pitchNumber);
        const strikeAndBall = this.#baseball.getStrikeAndBall();
        this.printer.hint(strikeAndBall);
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
module.exports = Controller;
