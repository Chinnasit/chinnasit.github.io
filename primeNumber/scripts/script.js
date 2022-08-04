getInput()

function getInput() {
    do {
        let user_input = prompt('Enter a positive integer');
        let num = Number(user_input);
        if (Number.isInteger(num) && num > 0) {
            showPrimes(num);
            break;
        } else {
            continue;
        }
    } while (true)
    
}

function isPrime(n) {                  
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false; 
        }
    }
    return true;
}

function showPrimes(num) {      
    let primesNumber = [];
    for (let i = 2; i < num; i++) {      //Note: continue เป็นการสั่งให้ "วนลูปถัดไป" โดยไม่ทำคำสั่งที่เหลือในลูปนั้น (ข้ามการทำงานในครั้งนั้น)
        if (!isPrime(i)) {
            continue; 
        }         
        primesNumber.push(i);
    }
    alert(`for n = ${num} prime numbers are ${primesNumber}`);
}