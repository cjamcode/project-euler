/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.

What is the nth prime number?
*/

function isPrime(n){

    if(n === 1 || n === 0)
        return false;

    for(let i = 2; i < n; i++){

        if(n % i === 0){
            return false;
        }
    }

    return true; 
}

function nthPrime(n) {

    let counter = 0;

    for(let i = 1; ; i++){

        if(isPrime(i)){
            counter++;

            if(counter === n){
                return i;
            }
        }
    }

}


console.log(nthPrime(10001));