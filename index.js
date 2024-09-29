FizzBuzz

for ( let a = 1; a <= 100; a++ ){
    if (a %3 === 0 && a %5 === 0 ) {
        console.log("Fizz Buzz")
    } else if ( a %5 === 0 ){
        console.log("Buzz")
    } else if ( a %3 === 0 ) {
        console.log("Fizz")
    } else {
        console.log(a)
    }
} 

Prime Time

let n = 0;
while (n <= 20) {
    if (n < 2) {
        n++;
        continue;
    }
    let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n);
    }
    n++;
}
