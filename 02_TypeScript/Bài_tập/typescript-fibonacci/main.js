function findFibonacci(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
var maxNumber = 10;
var sum = 0;
for (var i_1 = 1; i_1 <= maxNumber; i_1++) {
    sum += findFibonacci(i_1);
    console.log(findFibonacci(i_1));
}
console.log('Tong cua day so Fibonacci la: ' + sum);
var a = 0;
var b = 1;
var i = 1;
var n = 10;
var sum1 = 0;
while (i <= n) {
    var c = a + b;
    a = b;
    b = c;
    i++;
    sum1 += a;
    console.log(a);
}
console.log(sum1);
