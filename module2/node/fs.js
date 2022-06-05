let fs = require("fs");
// console.log(fs);
let path = require("path");

//let fs = require("fs"); // fs --> file system module
// console.log(fs);
// //CRUD --> create Read Update Delete
// let path = require("path");

// let filepath = path.join(__dirname,"file.txt");
// console.log(filepath);
// fs.writeFileSync(filepath, "Hello I am a text file ");  //create a file 

// console.log("Before Update");
// let content  = fs.readFileSync(filepath,'utf-8');
// console.log(content);


// fs.appendFileSync(filepath,"Newly added content");
// console.log("After update");
// console.log(fs.readFileSync(filepath, 'utf-8'));

// fs.unlinkSync(filepath);

// create a directory
// if(!fs.existsSync("hamariDirectory"))
// fs.mkdirSync("hamariDirectory");

//Read Directory

// let folderPath = __dirname;

// let contentOfFolder = fs.readdirSync(folderPath);
// console.log(contentOfFolder);

// fs.rmdirSync("hamariDirectory");

let sourcePath = path.join(__dirname,"file.txt")
let destinationPath = path.join(__dirname,"module","file.txt")
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);