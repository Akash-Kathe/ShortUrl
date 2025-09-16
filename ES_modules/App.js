// "type": "module",   need to be added in package.json if we have to use import export 


// import Mult from "./Math.js";   // instead of mult we can use anything and use below ...only for default exports

// console.log(Mult(2,5));

// import Multiplyy from "./Math.js";   //both valid

// console.log(Multiplyy(2,5));

import { Add,Div,Sub,Mult } from "./Math.js"; //je je function Export kelay te lihayche with same name otherwise Dyntax error 
// import * as Mathfunct from "./Math.js";   aise bhi kar skte hai
console.log(Add(2,5));
console.log(Div(2,5));
console.log(Sub(2,5));
console.log(Mult(2,5));

