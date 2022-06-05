//functions without parameter and without returntype
function sayHello(){
    console.log("Hello to function");
}
sayHello();

//functions with parameter 

function sum(num1, num2)
{
    let add = num1 + num2;
    console.log("Addiction of given numbers: "+add)
}
sum(3,5);

//function with returntype
function multiplayer(num1 , num2)
{
    return num1*num2;
}
let ans = multiplayer(3,5);
console.log("multiplayer"+ans);

//functions are first class citizens
let a = function sub(num1, num2)
{
    return num1- num2;
}
console.log(a(10,5));

//IIFE ->> Immediadtely Invoked Function Expression
(function()
{
    console.log("Hello from IIFE")
})();

// IIFE with parameter 

(function(num1, num2){
    console.log(num1/num2);
})(10,5);