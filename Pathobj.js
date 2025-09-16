const pathobj =require("path");
console.log("hiii");
console.log(__dirname);  // d:\Kathe\NodeProject               only path
console.log(__filename); // d:\Kathe\NodeProject\Pathobj.js    filename icluding path

const createfilepath = pathobj.join("newfolder","Students","studentdata.txt");   //  use this so confusion bet /(mac use) or\(window)
console.log(createfilepath);//newfolder\Students\studentdata.txt 
const everythingforpath =pathobj.parse(createfilepath);
const onlypath =pathobj.resolve(createfilepath);
const extension =pathobj.extname(createfilepath);
const basename= pathobj.basename(createfilepath);
const directionname=pathobj.dirname(createfilepath);

console.log({everythingforpath,onlypath,extension,basename,directionname});

/*  output
{
  everythingforpath: {
    root: '',
    dir: 'newfolder\\Students',
    base: 'studentdata.txt',
    ext: '.txt',
    name: 'studentdata'
  },
  onlypath: 'D:\\Kathe\\NodeProject\\newfolder\\Students\\studentdata.txt',
  extension: '.txt',
  basename: 'studentdata.txt',
  directionname: 'newfolder\\Students'
} */
