var fs = require("fs");
// load the fs module from the Node core library
fs.readFile(process.argv[2]), "utf-8", function callback(err, data) {// now we create a function
	if (!err) {// we also could have said: if (!err)
		var line = data.split("\n");
		console.log(line.length - 1);
	}
};