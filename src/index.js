module.exports = function toReadable(number) {
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
    };
    const count = String(number).length;
    if (numbers.hasOwnProperty(number)) {
        return numbers[number];
    }
    let result = [];
    let divisor = +"1".padEnd(count, "0");
    while (divisor >= 1) {
        if (divisor === 100) {
            result.push(
                numbers[Math.floor(number / divisor)].concat(" hundred")
            );
        }
        if (divisor === 10 && number !== 0) {
            if (numbers[number]) {
                result.push(numbers[number]);
                break;
            }
            result.push(numbers[Math.floor(number / divisor) * divisor]);
        }
        if (divisor === 1 && number !== 0) {
            result.push(numbers[number]);
        }

        number %= divisor;
        divisor /= 10;
    }
    return result.join(" ");
};
