var fs = require("fs");
// load the fs module from the Node core library
var buf = fs.readFileSync(process.argv[2]);
// this is a buffer (?)
var str = buf.toString();
// now it's a string
//console.log(process.argv[2])
var line = str.split("\n");
// we could also write: var line = buf.toString().split("\n");
console.log(line.length - 1);
// there is a line more