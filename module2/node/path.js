"D:\C DAta\Desktop\fj6\module2\node\path.js"

let path = require("path");
// console.log(path);
let extensionName = path.extname("D:\C DAta\Desktop\fj6\module1\index.html");
console.log(extensionName);

let baseName = path.basename("D:\C DAta\Desktop\fj6\module1\index.html");
console.log(baseName);

// console.log(__dirname);
console.log(__filename);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath, "txt.js");
console.log(newFilePath);