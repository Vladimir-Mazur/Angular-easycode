//Задача 1
function isPalindrome(str: string): boolean {
    if (!str)
        return false;
    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i - 1))
            return false;
    }
    return true;
}

console.log('sasdf');
console.log(isPalindrome('afdadsf'));
console.log(isPalindrome('asdffdsa'));

//Задача 2
function fibonachiArray(fibonachiNumber: number): Array<number> {
    let fibonachi: Array<number> = [];
        if (fibonachiNumber === 1) {
            fibonachi = [1]
            return fibonachi
        } 
    if (fibonachiNumber <= 0) return fibonachi;
    for (;;) {
        let {length} = fibonachi;
        if (length < 2){
            fibonachi.push(1);
            continue;
        }
        
        let nextValue = fibonachi[length - 1] + fibonachi[length - 2];
        if (length === fibonachiNumber){
            break;
        } 
        fibonachi.push(nextValue);
    }
    return fibonachi;
}
console.log(fibonachiArray(0));
console.log(fibonachiArray(1));
console.log(fibonachiArray(2));
console.log(fibonachiArray(3));
console.log(fibonachiArray(4));
console.log(fibonachiArray(5));
console.log(fibonachiArray(6));
console.log(fibonachiArray(7));
console.log(fibonachiArray(8));
console.log(fibonachiArray(9));
console.log(fibonachiArray(10));