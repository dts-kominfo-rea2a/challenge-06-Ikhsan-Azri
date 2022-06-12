// TODO: import module bila dibutuhkan di sini
const fs  = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack)=>{
  let arrResult=[];
  fs.readFile(file1,"utf-8",(err, data1)=> {
      if(err) {
        return fnCallBack(err, null);
      }
      fs.readFile(file2,"utf-8",(err, data2)=> {
        if(err) {
          return fnCallBack(err, null);
        }
        fs.readFile(file3,"utf-8",(err, data3)=> {
          if(err) {
            return fnCallBack(err, null);
          }
          let dtFile1 = JSON.parse(data1);
          let dtFile2 = JSON.parse(data2);
          let dtFile3 = JSON.parse(data3);
          arrResult.push(dtFile1.message.split(" ")[1]);
          arrResult.push(dtFile2[0].message.split(" ")[1]);
          arrResult.push(dtFile3[0].data.message.split(" ")[1]);
          
        });
      });
    });

    
  
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
