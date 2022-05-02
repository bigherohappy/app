const fs = require('fs')
// const rs=fs.createReadStream('D:/Users/ASUS/Desktop/淘宝/3.jpg');
// const ws =fs.createWriteStream('happy.jpg');
// rs.pipe(ws);


// const http = require('http');
// const fs = require('fs');
// // 这个文件可以 把资料存放到file文件夹下
// http.createServer(function (request, response) {
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     // 下面的这个意思是放到这个路径下，避免放到根目录
//     console.log(request.body)
//     request.pipe(fs.createWriteStream('./file' + request.url, {
//         //    encoding:'binary' // 行
//         //    encoding:'base64' // 行
//           encoding:'utf8' // 不知道为什么，这里怎么设置都不影响，
//     }));
//     response.end(`${request.url} done!`);
// }).listen();











// const express = require('express')
// const multer  = require('multer')
// const  app = express()
// const upload = multer({ dest: 'upload1/' })

// // 单图上传
// app.post('/upload1', upload.single('avatar'), function (req, res, next) {
//     res.send({ code: 200 })
// })



// const express=require('express');
// const router=express.Router();

//引入multer模块
// const multer=require('multer')
// var storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         //指定文件路径存储地
//         cb(null,'./uploads/img/');
//     },
//     filename:function(req,file,cb){
//         //指定存储后的文件名(有两个问题)
//         //1文件名重复覆盖  时间戳
//         //2后缀名发生改变
//         console.log('---',file);
//         //获取后缀名
//         let exts=file.originalname.split('.');
//         let ext=exts[exts.length-1];
//         let tepname=(new Date()).getTime()+parseInt(Math.random()*9999);
//         //拼接名字
//         cb(null,`${tepname}.${ext}`);
//     }
// });

// var upload=multer({
//     storage:storage
// });

// router.post('/upload',upload.single('hehe'),(req,res)=>{
//     //hehe 要上传图片数据的key值 必须和前端保持统一   {   'hehe':图片数据}
//     // console.log(req.file);
//     // { fieldname: 'hehe',//接受数据库的key值
//     //     originalname: '2019-12-06_102017.jpg',//原始名字
//     //     encoding: '7bit', //转码
//     //     mimetype: 'image/jpeg', //文件类型
//     //     destination: './uploads', //存储位置
//     //     filename: 'aaa.jpg',//文件名字
//     //     path: 'uploads\\aaa.jpg',//文件地址
//     //     size: 33479 }
//     let {size,mimetype,path}=req.file;
//     console.log(mimetype)
//     let types=['jpeg','jpg','png','gif'];//允许上传的类型
//     let tmpType=mimetype.split('/')[1];

//     console.log(tmpType)
//     if(size>5000000){
//         return res.send({err:-1,msg:'上传的内容不能超过5000000'})
//     }else if(types.indexOf(tmpType)==-1){
//         return res.send({err:-2,msg:'上传的类型错误'})
//     }else{
//     // 服务器静态化目录 app.use('/filename',express.static(path.join(process.cwd(),'./uploads')));
//         let url=`/filename/img/${req.file.filename}`;
//         res.send({err:0,msg:'上传成功',img:url})
//     }
// });

// module.exports=router;
