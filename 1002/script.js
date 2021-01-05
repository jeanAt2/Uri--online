var input = require('fs').readFileSync("stdin1002", "utf8");
var lines = input.split('\n');
console.log(lines);
var  n = 3.14159;

var r = parseFloat(lines.shift());
parseFloat(r);
var area = n*(Math.pow(r,2));
parseFloat(area);
console.log("A="+area.toFixed(4));







