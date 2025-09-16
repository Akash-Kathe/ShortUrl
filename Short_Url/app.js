import { readFile } from 'fs/promises'; //fs/promises use because we r usinf async await for reading that files
import {createServer} from 'http';
import path from 'path';;
import crypto from 'crypto';
import { json } from 'stream/consumers';
import { writeFile } from 'fs/promises';



const PORT =3004; 

/* 


const server =createServer(async (req,res)=>{
    if(req.method==="GET"){
        if(req.url==="/"){
            try {
                console.log("inside try ");
                console.log(req.url);
                
                const data = await readFile(path.join("public","index.html"));// file read karna hai to fs ka use krna padega Readfile ko path batana padega ki kahase read karna hai
                //agr read ho gaya to firse writehead ka use krna padega \
                res.writeHead(200,{"content-type":"text/html"});
                res.end(data); 
            } catch (error) {
                console.log("inside catch block " ,error);
                res.writeHead(400,{"content-type":"text/html"}); //WriteHead is a method fro resopnce for giving MSg 
                res.end("404..... Error Page not found");  // last we have to end server with end and dutsble msg
            }
        }
    }

})

this code is adding one file that is index.html  css add naho hoga bro
but if we want to add multiple file then we can make it dynamic as below 
*/
const bindpage=async(res,path,containtype)=>{
try {
    console.log("inside try block");
     console.log(path);
     console.log(containtype);

  const data = await readFile(path);
     res.writeHead(200,containtype);
     res.end(data);

    } catch (error) {
     res.writeHead(400,containtype);
     res.end("404..... Error Page not found");
        }
}

const server =createServer(async (req,resp)=>{
    if(req.method==="GET"){
        if(req.url==="/"){
           bindpage(resp,path.join("public","index.html"),{"content-type":"text/html"})
        }
        else if(req.url==="/style.css"){
           bindpage(resp,path.join("public","style.css"),{"content-type":"text/css"})
        }
    }
    if(req.method==="POST" && req.url==="/Shorturl"){
        console.log("inside the post method with url ",req.url);
         console.log("before getllinks");
        const getalllinks =await loadlnks();  // getting all the data from file whic is objet 
        console.log("after getllinks",getalllinks);
        
        let body="";
        req.on("data",(datafromserver)=>{
             console.log("inside data evens");
          body+=datafromserver;
        });
        req.on("end",async ()=>{
            console.log(body);
            // const{longurl,shorturl}=JSON.parse(body);  // ********* destructure krtana lksyat asu dya k same name thevayche che front end kadun et ahe ethe wrong et ahe karan front end la alag nav ahe so always get below alert
            const{userlongurl,UserShortcode}=JSON.parse(body); 
            if(!userlongurl){                                                  //agr long url nahi diya to errro ki requred
                resp.writeHead(400,{"Content-Type":"text/plain"});
                return resp.end("longURl is required")
            }
           // now we will check whether that url is in ur data or not if not then we will add it or if exsits then we will say u can use another shortcode
            console.log("before finalshortcodeurl");
           const finlashortcodeurl =UserShortcode || crypto.randomBytes(4).toString("hex");
           console.log("after finalshortcodeurl",finlashortcodeurl);
           
          // so for check we have to get data from file where we r stoarnig so we get it as son as post method called 
        if(getalllinks[finlashortcodeurl]){
             resp.writeHead(400,{"Content-Type":"text/plain"});
             return resp.end("Short URL Allready exist...try Something New!!!!!");
        }else{   //agr nahi hai to save karan padega   
            getalllinks[finlashortcodeurl] =userlongurl;
            await SaveLinksInfile(getalllinks);
             resp.writeHead(200,{"Content-Type":"application/json"});
             return resp.end(JSON.stringify({success:true,shortcode:finlashortcodeurl}));   // kya responce bhejna hai

        }
 
      
    
    })
    }
})

const PATH_OF_File =path.join("data","alllinks.json")

const loadlnks=async ()=>{
try {
    const data=await readFile(PATH_OF_File, 'utf-8');   //agr file hai to 
    return JSON.parse(data)  // jo bhi data hai vo JSOn me hai islie Object me convert to karna padega

} catch (error) { //if path does not exstit or file does not exist then we have to throw error nd make that file 
    if(error.code==="ENOENT"){ //"ENOENT" stands for errr no entry .....agr file not there
    await writeFile(PATH_OF_File,JSON.stringify({}));   // agr file nahi hai to file create karke empty objet dalna padega ....
    return {}; //empty objet return kar dena pdega
    }
    throw error;
}
}

const SaveLinksInfile=async(data)=>{
 await writeFile(PATH_OF_File,JSON.stringify(data)); //json k formate me add krana hai na 
} 
server.listen(PORT,()=>{
 console.log(`server is running on http://localhost:${PORT}`);
 
});