const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("../message");

class InputView {
    readPitch(callback) {
        Console.readLine(MESSAGE.INPUT, callback);
    }

    readCommand(callback) {
        Console.readLine(MESSAGE.INPUT, (userInput) => {
            callback(userInput);
        });
    }
}
module.exports = InputView;
