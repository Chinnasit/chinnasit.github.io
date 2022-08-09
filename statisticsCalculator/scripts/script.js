let arrayInteger = [];
list = readInput();
displayStats(list)

function readInput() {
    do {
        let user_input = prompt('Enter an integer (a negative to quit):');
        let number = Number(user_input);

        if (Number.isInteger(number) && number > 0) {   //ถ้าเป็นจำนวนเต็มบวก
            arrayInteger.push(number);                  //เก็บลง array
            continue;                                   //ด
        } else if (!Number.isInteger(number)) {         //ถ้าไม่ใช่ตัวเลข
            continue;                                   
        } else if (number < 0) {                        //ถ้า < 0 
            break;                                      //ออกจากโปรแกรม
        }
    } while (true);
}

function displayStats() {
    arrayInteger.length === 0 ? alert(`For the list 0, the average is 0, the minimum is 0, and the maximun is 0`)
    : alert(`For the list ${arrayInteger}, the average is ${getAvg()}, the minimum is ${getMin()}, and the maximun is ${getMax()}`);
}

function getMin() {
    let min = Math.min(...arrayInteger);
    return min;
}

function getMax() {
    let max = Math.max(...arrayInteger);
    return max;
}

function getAvg() {
    let avg = arrayInteger.reduce((sum, crr) => sum + crr, 0) / arrayInteger.length;
    return avg.toFixed(2);
}