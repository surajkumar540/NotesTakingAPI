//empty array
let arr = [];
console.log(arr);

//array with elements
let elesArr = [1,2,3,4,5, "Hello I am String", false,'x',4,4]
console.log(elesArr);

console.log(elesArr[0]);

elesArr[3] = "Nothing";

console.log(elesArr);

//Array method

//1. push

console.log("Array before push: ",elesArr);
elesArr.push("new item");
console.log("Array After pop: ",elesArr);

//2. pop

console.log("Array befire pop :",elesArr);
elesArr.pop();
console.log("Array after pop :",elesArr);

//3. shift

console.log("Array before shift");
elesArr.shift();
console.log("Array after shift: ",elesArr);

//4 unshift
console.log("Array before unshift");
elesArr.unshift();
console.log("Array after unshift: ",elesArr);

//5 length 
let len = elesArr.length;
console.log(len);