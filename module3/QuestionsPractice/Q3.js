function rainDance(arr){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        let obj = {};
        obj.name = arr[i].name;
        let sum = 0;
        let  rainfallArr= arr[i].rainfall;
        for(let j=0;j<rainfallArr.length;j++){
            sum+=rainfallArr[j];
        }
        let avg = sum/rainfallArr.length;
        obj.avg = avg;
        ans.push(obj);
    }
    return ans;
}

console.log(rainDance([
    { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
    { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
    { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
    { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
]));



// var myArray = [ { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] }, 
// { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] }, 
// { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] }, 
// { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] }, ]
// console.log(myArray);