/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

function nextPrimeFactorValue(actualFactorValue = 0){

    while(true){

        actualFactorValue++;
        let flag = 0;

        for(let i = 1; i <= actualFactorValue; i++){

            if(actualFactorValue % i === 0)
                flag++;
        }

        if(flag === 2)
            return actualFactorValue
    }
    
}

function largestPrimeFactor(number) {

    let primeFactor = 2;

    while(true){

        if(number % primeFactor === 0){
            number = number / primeFactor;

            if(number === 1)
                return primeFactor;
        }
        else
            primeFactor = nextPrimeFactorValue(primeFactor);
        

    }
    
}
  
console.log(largestPrimeFactor(13195));