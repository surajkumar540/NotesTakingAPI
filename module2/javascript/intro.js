// console.log("hello world");

// let num = 10;
// console.log(num);

// for(i=1; i<=5; i++)
// console.log(i);

// let count = 10;
// while(count>0)
// {
// console.log(count);
// count--;
// }
// let isPrime =true;
// let n = 17;
// for(i=2; i*i<=n; i++)
// {
//     if(n%i==0)
//     {
//         isPrime = false;
//     }
// }
// if(isPrime == true)
// {
//     console.log("is prime");
// }
// else{
//     console.log("not prime");
// }

//let isPrime =true;
let n = 18;
let count = 0;
for(i=2; i*i<=n; i++)
{
    if(n%i==0)
    {
        count++
        break;
    }
}
if(count==0)
{
    console.log("is prime");
}
else{
    console.log("not prime");
}