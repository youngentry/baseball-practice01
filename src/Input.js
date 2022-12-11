const { Console } = require("@woowacourse/mission-utils");
const Baseball = require("./Baseball");
const Generator = require("./Generator");
const MESSAGE = require("./message");
const Printer = require("./Printer");

const Input = {
    readPitch(callback) {
        Console.readLine(MESSAGE.INPUT, (userInput) => {
            callback(userInput);
        });
    },
    readCommand(callback) {
        Console.readLine(MESSAGE.INPUT, (userInput) => {
            callback(userInput);
        });
    },
};
module.exports = Input;
