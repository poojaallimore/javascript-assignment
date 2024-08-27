
console.log(`==== 1.Arrow function with no arguments and no returns====== `);

let greet = ()=> {

    console.log(`Good Morning,Today is Monday`);
    
}
greet();

console.log(`====== Arrow function with argument and no returns==============`);

let multiplication = (n1,n2,n3=1)=> {
   
    let mul = n1*n2*n3;

    console.log(`Multiplication is:${mul}`);
    

}

multiplication(5,5,2);

console.log(`====== Arrow function with argument and returns=============`);

let add = (a1,a2,a3,a4,a5)=>{

    let addition = a1+a2+a3+a4+a5;

    return addition;
    
}
let additions = add(100,100,200,349,756);

console.log(`Addition is:${additions}`);

let additions1 = add("I am"," learning"," ES6"," features"," in depth")

console.log(`Addition is:${additions1}`);
