var input = require('fs').readFileSync("stdin", "utf8");
var lines = input.split('\n');
console.log(lines);

var A =  parseInt(lines.shift());
var B =  parseInt(lines.shift());
var x = A+B;
console.log("X = " + x);
  







