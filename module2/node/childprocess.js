let cp = require('child_process');
//console.log(cp);
 //cp.execSync("code"); -- cs code open
 //cp.execSync("code");

 let content = cp.execSync("node txt.js");
 console.log(""+content);