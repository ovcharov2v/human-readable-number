const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
}

module.exports = function toReadable(number) {
    let result = [];
    let numArr = number.toString().split('').reverse();

    numArr.forEach((num, index) => {
        switch (index) {
            case 0:
                result.push(numbers[num]);
                break;
            case 1:
                if (num < 2) {
                    result.push(numbers[parseInt(num + numArr[0])]);
                    result.splice(0, 1);
                } else
                    result.push(numbers[num * 10]);
                break;
            case 2:
                result.push(numbers[num] + ' ' + numbers[100]);
        }
    });

    if (result.length > 1 && result[0] == 'zero') result.splice(0, 1);

    return result.reverse().join(' ');
}
