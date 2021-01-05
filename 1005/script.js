var input = require('fs').readFileSync("stdin1005", "utf8");
var lines = input.split('\n');
console.log(lines);
var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());

parseFloat(a).toFixed(2);
parseFloat(b).toFixed(2);

var media = (a * 3.5 + b * 7.5)/11.0;
parseFloat(media).toFixed(5);
console.log("MEDIA = " + media.toFixed(5));


