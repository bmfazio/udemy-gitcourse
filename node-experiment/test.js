// Ex 1
console.log("Hello world!!!");
// Ex 2
var fs = require("fs");
var https = require("https");

fs.writeFile(__dirname + "/index.html","<h1>booyAh</h1>",function(error) {
	if (error){
		return console.log(error);
	} else {
		return console.log("todo gud B)");
	}});
var myPhotoLocation = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png";

https.get(myPhotoLocation, function(response){
	response.pipe(fs.createWriteStream(__dirname + "/img.png"));
});
