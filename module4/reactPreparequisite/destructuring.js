let obj = {
    name:"suraj kumar",
    roll_no:1864444808,
    city:"delhi"
}

let {name:var1,...all} = obj;
console.log(var1);
console.log(all);