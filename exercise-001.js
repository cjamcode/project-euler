/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/



function multiplesOf3and5(number){

    const values = [];
    

    let counter = 0;

    while(counter < number){

        values.push(counter);

        counter+= 5; 
    }

    counter = 0;

    while(counter < number){

        !values.includes(counter) ? values.push(counter) : "";

        counter+= 3; 
    }

    let result = 0;

    result = values.reduce((accumulator, currentValue) => accumulator += currentValue , result)

   return result;

}


console.log(multiplesOf3and5(49));