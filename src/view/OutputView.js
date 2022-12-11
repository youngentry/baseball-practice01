const { Console } = require("@woowacourse/mission-utils");

class OutputView {
    start() {
        Console.print("숫자 야구 게임을 시작합니다.");
    }

    requestInput() {
        Console.print("숫자를 입력해주세요 : ");
    }
    hint(strikeAndBall) {
        const strike = strikeAndBall[0];
        const ball = strikeAndBall[1];
        if (strike + ball === 0) Console.print("낫싱");
        if (strike && ball) Console.print(strike + "스트라이크", ball + "볼");
        if (!strike && ball) Console.print(ball + "볼");
        if (strike && !ball) Console.print(strike + "스트라이크");
    }
    requestRestart() {
        Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료
        게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
    }
}

module.exports = OutputView;
