const http = require("http");
const server =http.createServer((req,res)=>{  // server is nothing but event emmitor
if(req.url==="/"){
    res.write("my first server.......");
    res.end();
    }
    if(req.url==="/first"){
    res.write("<H1>Create a Database & View Databases...@@@@@@@.</H1>");
    res.end();
    }
}); 



const port =3000;
server.listen(port,()=>{
    console.log(`server is ruuning on port no - ${port}`);
})




