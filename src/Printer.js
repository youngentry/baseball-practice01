const { Console } = require("@woowacourse/mission-utils");

class Printer {
    start() {
        Console.print("숫자 야구 게임을 시작합니다.");
    }

    hint(strikeAndBall) {
        const strike = strikeAndBall[0];
        const ball = strikeAndBall[1];
        if (strike + ball === 0) Console.print("낫싱");
        if (strike && ball) Console.print(strike + "스트라이크", ball + "볼");
        if (!strike && ball) Console.print(ball + "볼");
        if (strike && !ball) Console.print(strike + "스트라이크");
    }
}

module.exports = Printer;
