const { Console } = require("@woowacourse/mission-utils");

class OutputView {
    start() {
        Console.print("숫자 야구 게임을 시작합니다.");
    }

    requestInput() {
        Console.print("숫자를 입력해주세요 : ");
    }

    hint(strike, ball) {
        if (strike + ball === 0) return Console.print("낫싱");
        if (strike && ball) return Console.print(strike + "스트라이크 " + ball + "볼");
        if (!strike && ball) return Console.print(ball + "볼");
        if (strike && !ball) return Console.print(strike + "스트라이크");
    }

    success() {
        Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }
}

module.exports = OutputView;
