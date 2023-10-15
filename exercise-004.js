/*
A palindromic number reads the same both ways. The largest palindrome 
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers
*/

function isAPalindrome(n){

    const palindrome = String(n);

    for(let i = 0; i < palindrome.length / 2; i++){

        if(palindrome[i] !== palindrome[palindrome.length - i - 1])
            return false;
    }

    return true;
}

function maxValue(arr){

    let max = arr[0];

    arr.forEach(element => {
        
        if(element > max)
            max = element
    });

    return max;
}

function largestPalindromeProduct(n) {

    let base = (10 ** n) - 1;

    const palindromes = [];

    for(let i = base; i > 0; i--){

        for(let j = base; j > 0; j--){

            const result = j * i;

            if(isAPalindrome(result))
                palindromes.push(result);
            
        }
    }

    return maxValue(palindromes);
}
  
console.log(largestPalindromeProduct(2));