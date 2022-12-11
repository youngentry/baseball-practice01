const judgePitch = {
    matchStrike(pitchNumber) {
        let strikeCount = 0;
        pitchNumber.forEach((computerNumber, index) => {
            if (pitchNumber.split("")[index] === computerNumber.toString()) {
                strikeCount++;
            }
        });
        return strikeCount;
    },

    matchBall(pitchNumber, strikeCount) {
        let ballCount = 0;
        pitchNumber.forEach((computerNumber) => {
            if (pitchNumber.split("").includes(computerNumber.toString())) {
                ballCount++;
            }
        });
        return ballCount - strikeCount;
    },
};

module.exports = { judgePitch };
