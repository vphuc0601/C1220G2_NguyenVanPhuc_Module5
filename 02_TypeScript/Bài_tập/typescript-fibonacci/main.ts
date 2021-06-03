function findFibonacci(n: number): number {
    if (n == 1 || n == 2) {
        return 1;
    }
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}
let maxNumber:number = 10;
let sum=0;
for (let i = 1; i<= maxNumber; i++){
    sum += findFibonacci(i)
    console.log(findFibonacci(i))
}
console.log('Tong cua day so Fibonacci la: '+ sum)

let a:number = 0;
let b:number = 1;
let i:number = 1;
let n:number =10;
let sum1:number = 0;
while (i<= n){
    let c= a + b;
    a=b;
    b=c;
    i++;
    sum1+=a;
    console.log(a)
}
console.log('Tong day so Fibonacci la: '+ sum1)

