//Задача 1
function isPalindrom(word:string):string {
    let reverseWord:string = word.split("").reverse().join("")
    if (reverseWord === word) {
        return true
    } else {
        return false
    }
}

console.log (isPalindrom('asfadaf'))
console.log(isPalindrom('asdffdsa'));

//Задача 2
function getFibonachiArray(num:number):Array {
    let resultArray:array = [];
    if (num > 0) {
        resultArray.push(1)
    }
    if (num > 1) {
        resultArray.push(1)
    }
    if (num > 2) {
        for (let i:number = 2; i < num; i++) {
            let newNum:number = resultArray[i-1] + resultArray[i-2]
            if (newNum <= num){
                resultArray.push(newNum)
            }
        }
    }
    return resultArray
}

console.log(getFibonachiArray(0));
console.log(getFibonachiArray(1));
console.log(getFibonachiArray(2));
console.log(getFibonachiArray(10));
