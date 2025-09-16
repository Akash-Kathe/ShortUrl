const add  =((a,b)=>{
    return a+b;
});
const sub  =((a,b)=>{
    return a-b;
});
const mult  =((a,b)=>{
    return a*b;
});
const div  =((a,b)=>{
    return a/b;
});


//import Mult from "./Math.js";   ES 
//const matobj = require("./math");   //this is common js (not recommended)    app.jsmdhla ahe he 

module.exports = {add,sub,mult,div}; //jewdhe fun use karyache sarv exports karyache     this is common js (not recommended)
//  export default Mult;    //ES module


//common js not recommnded to use instead of this we have to use ES module (ECMA script) import export
