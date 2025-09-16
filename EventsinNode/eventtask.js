const classevent = require("events");
const classevObj = new classevent();
const COUNTER_FILE = './Counter.json';

const fs = require('fs');

let countdata ={
    "LoginCount" :0,
    "LogOutCount" :0,
    "UpdateCount" :0,
    "PurchaseCount" :0

}

if (fs.existsSync(COUNTER_FILE)) {
    countdata = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf-8'));
}
classevObj.on("userLogin",(username)=>{
    countdata.LoginCount++;
     saveCountData();
    console.log(`${username} is log in`);
});
classevObj.on("userlogout",(username)=>{
    countdata.LogOutCount++;
     saveCountData();
    console.log(`${username} is log out`);
});
classevObj.on("userUpadte",(username)=>{
    countdata.UpdateCount++;
     saveCountData();
    console.log(`${username} is updated`);
});
classevObj.on("userPurchase",(productname,username)=>{
    countdata.PurchaseCount++
     saveCountData();
    console.log(`${productname} is Purchased  ${username}`);
});

classevObj.emit("userLogin","Kathe");
classevObj.emit("userlogout","akash");
classevObj.emit("userUpadte","Email");
classevObj.emit("userPurchase","Akash Kathe","Mobile");
classevObj.emit("Eventcounter");
countdata = JSON.parse(fs.readFileSync(COUNTER_FILE));
console.log(countdata);

function saveCountData() {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify(countdata, null, 2));
}


module.exports=classevObj;