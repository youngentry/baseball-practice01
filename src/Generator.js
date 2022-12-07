const MissionUtils = require("@woowacourse/mission-utils");

class Generator {
    randomNumber() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        console.log(computer);
        return computer;
    }
}
module.exports = Generator;
