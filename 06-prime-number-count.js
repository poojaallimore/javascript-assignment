

console.log(`==== WAP to count prime number in given array=======================`);

const array = [ 3, 9, 7, 6, 19, 29, 53 ];

console.log(`Given array is:${array}`);

let count = 0;

function isPrime(num) {
    
     for (let index = 2; index < num; index++) {
 
        if (num % index == 0) {
            
            return false;

        }

     }

     return true;

}

let result1 = isPrime(3);

console.log(`Is 3 is prime number:${result1}`);

let result2 = isPrime(9);

console.log(`Is 9 is prime number:${result2}`);

let result3 = isPrime(7);

console.log(`Is 7 is prime number:${result3}`);

let result4 = isPrime(6);

console.log(`Is 6 is prime number:${result4}`);

let result5 = isPrime(19);

console.log(`Is 19 is prime number:${result5}`);

let result6 = isPrime(29);

console.log(`Is 29 is prime number:${result6}`);

let result7 = isPrime(53);

console.log(`Is 53 is prime number:${result7}`);

for (const num of array) {

    let result7 = isPrime(num);

    if (result7 == true) {
        
        count++;
    }
    
}
console.log(`Prime number count is:${count}`);
