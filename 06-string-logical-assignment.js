
console.log(`==== 1. WAP to find the length or total number of characters of the strings=========`);

function lengthOfString(string) {

   console.log(`Given string is:${string}`);
   
   let lengthOne = string.length;

   console.log(`Length of given string is:${lengthOne}`);
     
}

lengthOfString("Hello, World!");

lengthOfString("JavaScript is the language of Internet");


console.log(`==== 2. WAP to print or log the last character of the given strings========================`);

function lastChar(strng) {
    
    console.log(`Given string is:${strng}`);
    
    let lastCharr = strng.charAt((strng.length)-1);

    return lastCharr;

    
}

let result1 = lastChar("Hey, my friend, Programming Language");

console.log(`Last char of given string is:${result1}`);

let result2 = lastChar("I am learning logical programs");

console.log(`Last char of given string is:${result2}`);

let result3 =lastChar("Angular");

console.log(`Last char of given string is:${result3}`);




console.log(`====3. WAP to print or log the first character of the given strings========================`);

function firstChar(stringOne) {
   
    console.log(`Given string is:${stringOne}`);

    let firstCharr = stringOne.charAt(0);

    return firstCharr;
      
}
let resultOne = firstChar("React");

console.log(`first char of given string is:${resultOne}`);

let resultTwo = firstChar("Elon Musk");

console.log(`first char of given string is:${ resultTwo}`);

let resultThree = firstChar("Apple founder is Stew Job");

console.log(`first char of given string is:${ resultThree}`);


console.log(`===== 4. WAP to check whether given strings contains word "UI" or not?
===========`);

function containsUI(stringTwo) {

    console.log(`Given string is:${stringTwo}`);
    
    let containssUI = stringTwo.includes("UI");

    return containssUI;
   
}
let reslt = containsUI("React - UI Developer");

console.log(`Does the string contains "UI"?:${reslt}`);

let reslt1 = containsUI("UI Developer");

console.log(`Does the string contains "UI"?:${reslt1}`);

let reslt2 = containsUI("Front end and backend technologies");

console.log(`Does the string contains "UI"?:${reslt2}`);


console.log(`=== 5. WAP to How do you split a string into an array of substrings?
=========== `);
  
function splitString(stringThree) {
    
    console.log(`Given String is:${stringThree}`);
    
    let splitStrng = stringThree.split(",");

    return splitStrng;
}

let resltOne = splitString("apple,orange,banana");

console.log("The array of substring from string is:", resltOne);

console.log("Total number of word in array of substring from string is:", resltOne.length);

let resltTwo = splitString("Stew,Bill,Jenny,Elon");

console.log("The array of substring from string is:", resltTwo);

console.log("Total number of word in array of substring from string is:", resltTwo.length);


console.log(`==== 6. Reverse String: Recommended to use define the functions===== `);

console.log(`==== using predefined method========================`);

function reverseStringUsingMethod(sentance) {
    
    console.log(`Given string is:${sentance}`);
    
    let reversee = sentance.split("").reverse().join("");

    return reversee;

}

let returnResult = reverseStringUsingMethod("Software");

console.log(`The reverse of the string:${returnResult}`);

let returnResult1 = reverseStringUsingMethod("UI Developer");

console.log(`The reverse of the string:${returnResult1}`);

console.log(`==== Without using predefined method==============`);

function reverseString(stng) {

    console.log(`Given string is:${stng}`);

    let resultt = "";

    for (let index = stng.length ; index >= 0 ; index--) {
        
        let char = stng.charAt(index);

        resultt = resultt + char;
        
    }
    return resultt;

}

let stng1 = reverseString("Web Developer");

console.log(`The reverse of the string is:${stng1}`);

let stng2 = reverseString("Billion Dollar");

console.log(`The reverse of the string is:${stng2}`);

let stng3 = reverseString("Java");

console.log(`The reverse of the string is:${stng3}`);

console.log(`==== 7. Program to count character  a ======================`);
 
function charCount(argOne) {
    
    let count = 0;

    console.log(`Given string is:${argOne}`);
    

    for (let index = 0; index < argOne.length; index++) {

       let char = argOne.charAt(index);

       let lowerCase = char.toLowerCase();

       if (lowerCase == "a") {
         
        count++;
         
       }
      
    }
  return count;
 }

let returnReslt = charCount("JavaScript");

console.log(`Count of "a" in given string is:${returnReslt}`);

let returnReslt1 = charCount("Do or Die");

console.log(`Count of "a" in given string is:${returnReslt1}`);

let returnReslt2 = charCount("Learn with us, Job with us");

console.log(`Count of "a" in given string is:${returnReslt2}`);

let returnReslt3 = charCount("Empowering Dreams, Guaranteeing Futures");

console.log(`Count of "a" in given string is:${returnReslt3}`);

let returnReslt4 = charCount("Anny, My favorite fruit is Apple");

console.log(`Count of "a" in given string is:${returnReslt4}`);

console.log(`==== 8. Program to count vowels==================================== `);

function vowelCount(stringTwo) {
     
    let count1 = 0;

    let vowels = "aeiouAEIOU"

    console.log(`Given array is:${stringTwo}`);

    for (let index = 0; index < stringTwo.length; index++) {
         
        let char = stringTwo.charAt(index);

        if (vowels.includes(char)) {
            
            count1++;
        }
        
    }

   return count1;

}

let countReturn = vowelCount("JavaScript");

console.log(`Vowel count in given string is:${countReturn}`);

let countReturn1 =vowelCount("HTML and CSS");

console.log(`Vowel count in given string is:${countReturn1}`);

let countReturn2 =vowelCount("Language Of Internet");

console.log(`Vowel count in given string is:${countReturn2}`);

let countReturn3 =vowelCount("I am UI Developer");

console.log(`Vowel count in given string is:${countReturn3}`);

let countReturn4 =vowelCount("Do or Die");

console.log(`Vowel count in given string is:${countReturn4}`);

console.log(`=== 9. Program to count words========================`);

function wordCount(para) {
    
    console.log(`Given string is:${para}`);

    let word = para.split(" ");

    return word;
    

}
let wordCnt = wordCount("JavaScript The language of Internet");

console.log("Total number of words in given string is:", wordCnt.length);

let wordCnt2 = wordCount("Enhance Your Learning Journey with Exclusive Add-ons");

console.log("Total number of words in given string is:", wordCnt2.length);

let wordCnt3 = wordCount("Beyond frameworks, Beyond Imagination");

console.log("Total number of words in given string is:", wordCnt3.length);

let wordCnt4 = wordCount("I am passionate software developer");

console.log("Total number of words in given string is:", wordCnt4.length);

console.log(`====== Count prime number===========================================`);

const array = [ 3, 9, 7, 6, 19, 29, 53 ];

console.log(`Given array is:${array}`);

var count = 0;

function isPrime(num) {

   for (let index = 2; index < num; index++) {
    
    if (num % index == 0) {
        
        return false;
    }
    
   }
   return true;
}
let numOne = isPrime(3);

console.log(`Is 3 is Prime number:${numOne}`);

let numTwo = isPrime(9);

console.log(`Is 9 is Prime number:${numTwo}`);

let numThree = isPrime(7);

console.log(`Is 7 is Prime number:${numThree}`);

let numFour = isPrime(6);

console.log(`Is 6 is Prime number:${numFour}`);

let numFive = isPrime(19);

console.log(`Is 19 is Prime number:${numFive}`);

let numSix = isPrime(29);

console.log(`Is 29 is Prime number:${numSix}`);

let numSeven = isPrime(53);

console.log(`Is 53 is Prime number:${numSeven}`);

 for (const num of array) {
      
    let result = isPrime(num);

    if (result == true) {

        count++; 
    }
   
    }

 console.log(`Prime number count is:${count}`)

 console.log(`===== WAP to count space=====================================`);
 
 function spaceCount(sentnce) {
    
    let countChar = 0;

    console.log(`Given string si:${sentnce}`);

    for (let i = 0; i < sentnce.length; i++) {
      
        let char = sentnce.charAt(i);

        if (char == " ") {
            
            countChar++;
        }
    }
    return countChar;
 }
let totalSpaceCount = spaceCount("Revision is the mother of success");

console.log(`Total space count in given string is:${totalSpaceCount}`);

let totalSpaceCount1 = spaceCount("JavaScript is the language of internet world");

console.log(`Total space count in given string is:${totalSpaceCount1}`);
 
console.log(`==== 10 WAP to find duplicate character in given string============`);

function duplicateChar(paraOne) {
    
    console.log(`Given string is:${paraOne}`);

    let finalOutput ={};

    for (let i = 0; i < paraOne.length; i++) {
        
        let element = paraOne.charAt(i);

        let count = 0;

        for (let j = 0; j < paraOne.length; j++) {
           
            let char = paraOne.charAt(j);

            if (char == element && char != " ") {
                
                count++;
            }
        }
        if (count > 1) {

            finalOutput[element] = count; 
    
           } 
    }
   
    for (const key in finalOutput) {
       
        const element = finalOutput[key];

        console.log(`${key}-${element}`);
        
    }
}
duplicateChar("Banana")