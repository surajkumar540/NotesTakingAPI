//--------map----------
// let arr = [1,2,3,4,5,6,7,8];
// let newArr = arr.map(cb);
// console.log(newArr);
// function cb(x)
// {
//     return 5*x;
// }

//--------filter--------
let arr = [1,2,3,4,5,6,7,8];
let filterdArr = arr.filter(function(x)
{
    return x%2 == 0;
})
console.log(filterdArr);
console.log(arr);
