const validateNumber = (number) => {
    // 에러 발생시키기
    const [isNotValidRange, isDuplicate, isNotValidNumber] = [validateRange(number), validateDuplication(number), validateNaturalNumber(number)];
    return true;
};

const validateRange = (number) => {
    const isNotValidRange = parseInt(number) > 987 || parseInt(number) < 123;
    if (isNotValidRange) {
        throw new Error("[범위 벗어남]1에서 9사이의 숫자로만 이루어진 세자리의 중복되지 않은 자연수를 입력해주세요.");
    }
};

const validateDuplication = (number) => {
    const set = new Set([...number.split("")]);
    const isDuplicate = set.size !== 3;
    if (isDuplicate) {
        throw new Error("[중복 문자]1에서 9사이의 숫자로만 이루어진 세자리의 중복되지 않은 자연수를 입력해주세요.");
    }
};

const validateNaturalNumber = (number) => {
    const isNotValidNumber = /[^1-9]/g.test(number);
    if (isNotValidNumber) {
        throw new Error("[자연수 이외의 숫자]1에서 9사이의 숫자로만 이루어진 세자리의 중복되지 않은 자연수를 입력해주세요.");
    }
};

module.exports = { validateNumber };
