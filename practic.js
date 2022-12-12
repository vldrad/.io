'use strict';

function calculateVolumeAndArea(side) {
    let vCube = side * (side * side);
    let sCube = 6 * (side * side);
    if (typeof(side) == 'string' || typeof(side) == 'string' || Number.isInteger(side) == false || Number.isInteger(side) == false || side < 0) {
        return 'При вычислении произошла ошибка';
    } else {
        return `Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`;
    }
}



function getCoupeNumber(number) {
    const vagons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (number == 0 || number > 36) {
        return 'Таких мест в вагоне не существует';
    } else if (number < 0 || typeof(number) == 'string' || Number.isInteger(number) == false) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else {
        if (number > 0 && number <= 4) {
            return vagons[0];
        } else if (number > 4 && number <= 8) {
            return vagons[1];
        } else if (number > 8 && number <= 12) {
            return vagons[2];
        } else if (number > 12 && number <= 16) {
            return vagons[3];
        } else if (number > 16 && number <= 20) {
            return vagons[4];
        } else if (number > 20 && number <= 24) {
            return vagons[5];
        } else if (number > 24 && number <= 28) {
            return vagons[6];
        } else if (number > 28 && number <= 32) {
            return vagons[7];
        } else {
            return vagons[8];
        }
    }
}




function getTimeFromMinutes(minutes) {
    let timeHours = Math.floor(minutes / 60);
    let timeMinutes = minutes - (timeHours * 60);
    if (isNaN(minutes) === true || minutes < 0 || Number.isInteger(minutes) == false) {
        return 'Ошибка, проверьте данные';
    } else if (minutes > 600) {
        return 'Слишком большое значение (доступно вычисление до 600 минут)';
    } else {
        if (timeHours === 1) {
            return `Это ${timeHours} час и ${timeMinutes} минут`;
        } else if (timeHours === 2 || timeHours === 3 || timeHours === 4) {
            return `Это ${timeHours} часа и ${timeMinutes} минут`;
        } else {
            return `Это ${timeHours} часов и ${timeMinutes} минут`;
        }
    } 
}




function findMaxNumber(a, b, c, d) {
    function compare (a,b) {
        return a - b;
    }
    let numbers = [a, b, c, d];
    if (typeof(a) == 'string' || typeof(b) == 'string' || typeof(c) == 'string' || typeof(d) == 'string' || numbers.length < 4 || isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return 0;
    } else {
        numbers.sort(compare);
        console.log(typeof(d));
        return numbers[3];
    }
}

function fib(num) {
    let arr = [0, 1];
    for (let i = 0; i < (num - 2); i++ ) {
        arr[i + 2] = arr[i] + arr[i + 1];
    }
    if (isNaN(num) === true || num <= 0 || typeof(num) == 'string' || Number.isInteger(num) === false) {
        return 'error';
    } else if (num === 1) {
        return String(arr[0]);
    }else {
        return arr.join(' ');
    }
}

function getMathResult(a, b) {
    let result = [a];
    for (let i = 1; i < b; i++) {
        result[i] = a + result[i - 1];
    }
    if (typeof(b) !== 'number' || b <= 0) {
        return a;
    } else {
        return result.join('---');
    }
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    const availableArr = [...baseCurrencies, ...additionalCurrencies];
    let result = [];
    for (let i = 0; i < availableArr.length; i++) {
        if (availableArr[i] === missingCurr) {
            continue;
        } else {
            result.push(`${availableArr[i]}\n`);
        }
    }
    return `Доступные валюты:\n${result}`;
}
console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));