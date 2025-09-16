const ClassEventemmitor = require("events"); // this is class not module so we can use by makng obj of it

const eventobj = new ClassEventemmitor(); 

//above two things we have to after that for we have to make 2 steps
// 1st define event listner 
//2nd triger(emit) the event   basicalyy call karna hai

// 1st
// eventobj.on("what u have to call funct", "callback function")
// eventobj.addListener or eventobj.on both r same 
// eventobj.on("MyFunction",()=>{
//     console.log("Event fire....");
// })


// // 2nd step calling 
// eventobj.emit("MyFunction");



eventobj.on("MyFunction",(username)=>{
    console.log(`my name is ${username}`);
});

eventobj.emit("MyFunction","Kathe"); // we can also pass parameter