const judgePitch = {
    matchStrike(userNumber, computerNumber) {
        let strikeCount = 0;
        computerNumber.forEach((eachComputerNumber, index) => {
            if (eachComputerNumber === parseInt(userNumber.split("")[index])) {
                strikeCount++;
            }
        });
        return strikeCount;
    },

    matchBall(userNumber, computerNumber, strikeCount) {
        let ballCount = 0;
        userNumber.split("").forEach((eachUserNumber) => {
            if (computerNumber.includes(parseInt(eachUserNumber))) {
                ballCount++;
            }
        });
        return ballCount - strikeCount;
    },
};

module.exports = { judgePitch };
