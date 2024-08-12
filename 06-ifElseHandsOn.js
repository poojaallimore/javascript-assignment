
console.log(`====== 1.WAFE to check passed argument num value is odd or even================`);

var evenOrOdd=function(number) {
     
    if (number%2==0){
        
        return "Even";

    }  else {
        
        return "Odd";
    }
    

}
var value=evenOrOdd(45);

console.log(`1.Given number value 45 is:${value}`)

var value=evenOrOdd(70);

console.log(`2.Given number value 70 is:${value}`);

var value=evenOrOdd(67);

console.log(`2.Given number value 67 is:${value}`);

var value=evenOrOdd(98);

console.log(`2.Given number value 98 is:${value}`);

console.log(`==== 2. WAP to check if person is eligible for vote or not====================`);

var eligibilityCheck=function(age) {

    if (age>=18) {
        
        console.log(`you are ${age} year old and you are eligible for vote `);
        
    } else {
       
        console.log(`you are ${age} year old and you are not eligible for vote`);
        
    }
    
}
eligibilityCheck(18);

eligibilityCheck(20);

eligibilityCheck(17);

eligibilityCheck(98);


console.log(`=== 3.WAFE to person eligible for vote using nested if-else statement=============== `);

var voteEligibility=function(age) {
    
    if (age==0 || age>= 130 || age<=0 || age=="null") {
        
        console.log(`Invalid data:${age}`);
        
    } else {
       
        if (age>=18) {

             console.log(`Congratulation!you are ${age} years old and you are eligible for vote`);
             
        } else {

             console.log(`Sorry you are ${age} old and you are not eligible for vote`);
             
        }
    }
}
voteEligibility(18);

voteEligibility(20);

voteEligibility(17);

voteEligibility(40);

console.log(`==== 4.WAP to check given string contains more than 10 character==========================`);

var stringLength=function(strng) {
    
    if (strng.length >= 10) {
        
        console.log(`4.Given string is:${strng}`);

        console.log(`4.1 Given string contains more than 10 character`);
        
        
    } else {
        
        console.log(`4.Given string is:${strng}`);

        console.log(`4.1 Given string does not more than 10 character`);
        
         
    }
}
stringLength("JavaScript-ES6");

stringLength("React-js");

stringLength("Angular Developer");

stringLength("Google Chrome");

console.log(`==== 5.WAFE to check given string start with word "Java"==================`);

var wordCheck=function (word) {
     if (word.includes("Java")) {
         
        console.log(`5.Given string is:${word}`);

        console.log(`5.1 Given string includes word "Java"`);
        
        
     } else {
        
        console.log(`5.Given string is:${word}`);

        console.log(`5.1 Given string  does not includes word "Java"`);

     }
}

wordCheck("JavaScript Language")