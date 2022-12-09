const { Console } = require("@woowacourse/mission-utils");

class Printer {
    start() {
        Console.print("숫자 야구 게임을 시작합니다.");
    }

    hint(strikeAndBall) {
        if (strikeAndBall[0] + strikeAndBall[1] === 0) {
            console.log("낫싱");
        }
        if (strikeAndBall[0] && strikeAndBall[1]) {
            console.log(strikeAndBall[0] + "스트라이크", strikeAndBall[1] + "볼");
        }
        if (!strikeAndBall[0] && strikeAndBall[1]) {
            console.log(strikeAndBall[1] + "볼");
        }
        if (strikeAndBall[0] && !strikeAndBall[1]) {
            console.log(strikeAndBall[0] + "스트라이크");
        }
    }
}

module.exports = Printer;
