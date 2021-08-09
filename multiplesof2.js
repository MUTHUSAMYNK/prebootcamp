const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = []
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {



var a=userInput[0];

str="";
 
var sum=0;

    for(i=1 ; i<4;i++)

{

    sum= i * a;
   str=str+" "+sum; 

    
}    
 
 
 console.log(str.trim(" "));
  

    
});