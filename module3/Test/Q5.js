function* f(...a) 
{ 
    let s = new Set(); 
    for (x in a) 
    { 
        s.add(a[x]); 
        yield a[x]; 
    }
     yield s; 
}

let f1 = f(3, 2, 1);

while (true) 
{
     let yv = f1.next().value;
      if (typeof yv == "object") 
      {
           console.log(yv); 
           yv.add(3);
            console.log(yv); 
            break;
      }
}