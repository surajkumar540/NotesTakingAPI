async function increment(x)
{
     x = x + 1
      return x;
    }

inc(1).then(function(x)
{ 
    console.log(increment(x)) 
})