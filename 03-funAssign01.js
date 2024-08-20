
console.log(`======= 1. Function with no argument and no returns====================`);

function show() {

    console.log(` 1. Hello World`);
    
    
}

show();

console.log(`===================================================================================`);

function message() {

    console.log(` 2. I am Learning Javascript`);
    
    
}

message();

console.log(`======== 2.Function with argument and no returns========================================`);


function personalDetails(firstName,lastName,collegeName) {

    console.log(`2.My First Name is:${firstName}`);

    console.log(`2.2 My Last Name is:${lastName}`);

    console.log(`2.3 My College Name is:${collegeName}`);
        
    
}

personalDetails("Pooja","Chetan","SESP");

console.log(`======= 3.WAF with three argument ==================================`);

function addThreeValue(numOne,numTwo,numThree) {

   var result=numOne+numTwo+numThree;

   console.log(`3.1 Given values are:${numOne},${numTwo},${numThree}`);

   console.log(`Addition of given values are:${result}`);
     
    
}

addThreeValue(10,23,600,40);

addThreeValue("Hello","Good","Morning");
