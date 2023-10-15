/*
2520 is the smallest number that can be divided by each of the numbers 
from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of 
the numbers from 1 to n?
*/

function smallestMult(n) {


    let counter = 0;

    for(let i = n; ; i++){

        for(let j = 1; j <= n; j++){

            if(i % j == 0){
                counter++;
            }
            else{
                counter = 0;
                break;
            }
        }

        if(counter === n){

            return i;
        }
    }

}
  
console.log(smallestMult(20));