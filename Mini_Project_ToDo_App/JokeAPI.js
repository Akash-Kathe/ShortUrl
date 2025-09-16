 import https from 'https';

 const cratejoke = ()=>{
    const url ="https://official-joke-api.appspot.com/random_joke";
    https.get(url,(responce)=>{
        let totalresopncefromapi="";
        responce.on("data",(jokemsg)=>{   //data ,end,error  is an even for Api ....data is use to get data from api 
     totalresopncefromapi+=jokemsg;
        })
      
        responce.on("end",()=>{       //end is use to after getting all responce to do what we have to dooo
            const data= JSON.parse(totalresopncefromapi);  // responce ko parse karna padega coz it is in json formate 
            console.log(totalresopncefromapi); ///{"type":"general","setup":"How do the trees get on the internet?","punchline":"They log on.","id":120}
            console.log(data.type); //whaterve key is getting we can use here
            console.log(data.setup);
            console.log(data.punchline);
            console.log(data.id);
            
            
        })
        responce.on("error",(err)=>{
            console.log(err.message +"error msg");
        })
    });
 }


 
 cratejoke();


 /*
  responce.on("data",(jokemsg)=>{   })

 data is Event in on ... server se data lene k liye use hota hai thoda thoda data ata hai to
 jokemsg matlab yaha data so append hota jata hai ......

 jaise hi data mil jaye fir event ata hai end 

 responce.on("end",()=>{   })

        
 */