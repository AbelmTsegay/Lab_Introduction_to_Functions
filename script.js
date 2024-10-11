function greet(name = `john`){
    return (`Hello ${name}`);
}
console.log(greet());


function addNumbers(num1, num2, num3){
    return num1+num2+num3;
}
let answer = addNumbers(5,6,10);
console.log(answer);

let globalVar = "This is getting fun";
let x= 10;
function changeValue(){
    changeValue =x;
    return changeValue;
}
console.log(changeValue());
console.log(globalVar);

function outerFunction(){
    let count = 0;
    function innerFunction(){
       count ++ ; 
        console.log (count);
    }
     return innerFunction;
}
let myclosure = outerFunction();
myclosure();
