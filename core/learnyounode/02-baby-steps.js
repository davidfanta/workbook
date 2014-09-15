//console.log(process.argv)
// lenght of the array
var l = process.argv.length;
// sum with a loop
var s = 0;
for (i = 2; i < l; i++){
	s = s + Number(process.argv[i]) // process.argv is an array and its arguments are strings
}
console.log(s);