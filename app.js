const matobj = require("./math");   //this is common js (not recommended)
const eventsobj = require("./EventsinNode/eventtask")
console.log(matobj.add(4,7));
console.log(matobj.sub(4,7));
console.log(matobj.mult(4,7));
console.log(matobj.div(4,7));


// or
console.log("----------other way-------------");
const {add,sub,mult,div}=require("./math");

console.log(add(4,7));
console.log(sub(4,7));
console.log(mult(4,7));
console.log(div(4,7));




