
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = []
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {



let i =0;
for(i=0;i<userInput.length;i++)
{
    console.log (typeof(userInput[i]));
}
let intvar = parseFloat(userInput[0]);
let str = (userInput[1]);
let boo = (userInput[2] == 'true');
let naa=userInput[3].split(",");

console.log (typeof(intvar));
console.log(typeof(str));
console.log(typeof(boo));
console.log(naa);
console.log(typeof(naa));
/*


var strvar ="15";
var arrvar =[10,20,"arun","nk",10 ]
var bvar = true;
var objvar={"name":"nk","age":20,"city": "chennai"}
for(i=0;i<arrvar.length;i++)
{
    console.log(typeof(arrvar[i]));
}
console.log(intvar);
console.log(strvar);
console.log(arrvar);
console.log(bvar);
console.log(objvar);
*/
});