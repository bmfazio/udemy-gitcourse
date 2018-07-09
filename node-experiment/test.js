console.log("Hello world!!!");

var fs = require("fs");
fs.writeFile(__dirname + "/index.html","<h1>booyAh</h1>",function(error) {
	if (error){
		return console.log(error);
	} else {
		return console.log("todo gud B)");
	}});
