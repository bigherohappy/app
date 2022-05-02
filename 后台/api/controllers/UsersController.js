const fs = require('fs')

module.exports = {
    getUserInfo: async function(req, res) {
        let code = req.query.code;
        const url = `https://api.weixin.qq.com/sns/jscode2session`;

        const superAgent = require('superagent');
        superAgent.get(url)
            .query({
                appid: 'wx8e35808b597a7674',
                secret: '9ba50b1d3398d69a4cde8878772bfef3',
                js_code: code,
                grant_type: 'authorization_code'
            })
            .end((err, obj) => {
                res.json((JSON.parse(obj.text)).openid)
            });
    },

    uploadAvatar: function (req, res) {

      req.file('avatar').upload({
        // don't allow the total upload size to exceed ~10MB
        maxBytes: 10000000
      },function whenDone(err, uploadedFiles) {
        if (err) {
          return res.serverError(err);
        }
    
        // If no files were uploaded, respond with an error.
        if (uploadedFiles.length === 0){
          return res.badRequest('No file was uploaded');
        }
    
        // Get the base URL for our deployed application from our custom config
        // (e.g. this might be "http://foobar.example.com:1339" or "https://example.com")
        var baseUrl = sails.config.custom.baseUrl;
    
        // Save the "fd" and the url where the avatar for a user can be accessed
        User.update(req.session.userId, {
    
          // Generate a unique URL where the avatar can be downloaded.
          avatarUrl: require('util').format('%s/user/avatar/%s', baseUrl, req.session.userId),
    
          // Grab the first file and use it's `fd` (file descriptor)
          avatarFd: uploadedFiles[0].fd
        })
        .exec(function (err){
          if (err) return res.serverError(err);
          return res.ok();
        });
      });
    },
    uploadAvatar1: function(req, res) {
      req.file('file').upload({
              dirname: require('path').resolve(sails.config.appPath, 'assets/photos')
          },
          function(err, files) {
              if (err)
                  return res.serverError(err);
              if (files.length === 0)
                  return res.json(false);
              let filePath = files[0].fd.split('\\');
              filePath = filePath[filePath.length - 1];
              res.json(filePath);
          });
  },
 
    
    
    receive: function(req, res) {
        req.file('file').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/upload')
            },
            function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let filePath = files[0].fd.split('\\');
                filePath = filePath[filePath.length - 1];
                res.json(filePath);
            });
    },
    receiveImgs: function(req, res) {
      req.file('file').upload({
              dirname: require('path').resolve(sails.config.appPath, 'assets/photos')
          },
          function(err, files) {
              if (err)
                  return res.serverError(err);
              if (files.length === 0)
                  return res.json(false);
              let filePath = files[0].fd.split('\\');
              filePath = filePath[filePath.length - 1];
              res.json(filePath);
          });
  },
  login: async function(req, res) {
    const json=req.allParams();
    const obj=await Users1.findOne(json);
    if(obj){
      res.json(obj)
    }else{
      res.json(false)
    }
  // res.json(obj);

},
  addPlayRecord: async function(req, res) {
      const json=req.allParams();
      const mediaId=json.mediaId;
      const srcType=json.srcType;
      const delRecord=await Users.destroy({srcType,mediaId}).fetch();
      console.log(delRecord);
      
    const obj=await Users.create(json).fetch();
    res.json(obj);

  },
    getArt: async function(req, res) {
      let skip=req.query.start;
      let pageSize=req.query.pageSize;
      const arr=await Article.find().sort("id desc").skip(skip).limit(pageSize);
      res.json(arr);
    },
    getProduct: async function(req, res) {
      let skip=req.query.start;
      let pageSize=req.query.pageSize;
      const arr=await Product.find().sort("id desc").skip(skip).limit(pageSize);
      res.json(arr);
    },
    getProduct1: async function(req, res) {
      let skip=req.query.start;
      let pageSize=req.query.pageSize;
      const arr=await Shop.find().sort("id desc").skip(skip).limit(pageSize);
      res.json(arr);
    },
    // 得到文章数据
    getArt1: async function(req, res) {
      let skip=req.query.start;
      let pageSize=req.query.pageSize;
      const arr=await Article1.find().sort("id desc").skip(skip).limit(pageSize);
      res.json(arr);
    },
      // 得到资讯数据
      getNotice: async function(req, res) {
        let skip=req.query.start;
        let pageSize=req.query.pageSize;
        const arr=await Notice.find().sort("id desc").skip(skip).limit(pageSize);
        res.json(arr);
      },
    // 得到活动数据
    getActive: async function(req, res) {
      let skip=req.query.start;
      let pageSize=req.query.pageSize;
      const arr=await Active.find().sort("id desc").skip(skip).limit(pageSize);
      res.json(arr);
    },
    getSearchData: async function(req, res) {
      let keyword=req.query.keyword;
      const arr=await Article.find({title:{contains:keyword}}).sort("id desc");
      res.json(arr);

    },
    getDyno:async function(req, response){
      response.set( 'content-type', mimeType );//设置返回类型
      var stream = fs.createReadStream( imageFilePath );
      var responseData = [];//存储文件流
      if (stream) {//判断状态
          stream.on( 'data', function( chunk ) {
            responseData.push( chunk );
          });
          stream.on( 'end', function() {
             var finalData = Buffer.concat( responseData );
             response.write( finalData );
             response.end();
          });
      }
    },
    getSearchData1: async function(req, res) {
      let keyword=req.query.keyword;
      const arr=await Article1.find({title:{contains:keyword}}).sort("id desc");
      res.json(arr);

    },
    getArtId: async function(req, res) {
        let id=req.query.id;
        const obj=await Article.findOne({id});
        const num=await Comment.count({'artId':id})
        res.json({obj,num});
      },
      getNoticeId: async function(req, res) {
        let id=req.query.id;
        const obj=await Notice.findOne({id});
        // const num=await Comment.count({'artId':id})
        // res.json({obj});
        res.json(obj);
      },
      getArtId1: async function(req, res) {
        let id=req.query.id;
        const obj=await Article1.findOne({id});
        const num=await Comment.count({'artId':id})
        res.json({obj,num});
      },
      getProductId: async function(req, res) {
        let id=req.query.id;
        const obj=await Product.findOne({id});
        const num=await Product.count({'productId':id})
        res.json({obj,num});
      },
      getProductId1: async function(req, res) {
        let id=req.query.id;
        const obj=await Shop.findOne({id});
        const num=await Shop.count({'productId':id})
        res.json({obj,num});
      },
      getActiveId: async function(req, res) {
        let id=req.query.id;
        const obj=await Active.findOne({id});
        const num=await Active.count({'activeId':id})
        res.json({obj,num});
      },
      getAudioId: async function(req, res) {
        let id=req.query.id;
        const obj=await Audio.findOne({id});
        res.json(obj);
      },
      getRecord: async function(req, res) {
        let openId=req.query.openId;
        const arr=await Users.find({openId}).sort('id desc');
        res.json(arr);
      },
      getVideoId: async function(req, res) {
        let id=req.query.id;
        const obj=await Video.findOne({id});
        res.json(obj);
      },
      getAudioPrev: async function(req, res) {
        let id=req.query.id;
        let dataType=req.query.dataType;
        const arr=await Audio.find({ id: { '<' : id },dataType }).sort('id desc').limit(1);
       if(arr.length===0)
        res.json(false);
        else
        res.json(arr[0]);
      },
      getAudioNext: async function(req, res) {
        let id=req.query.id;
        let dataType=req.query.dataType;
        const arr=await Audio.find({ id: { '>' : id },dataType }).sort('id asc').limit(1);
        if(arr.length===0)
        res.json(false);
        else
        res.json(arr[0]);
      },
      getVideoPrev: async function(req, res) {
        let id=req.query.id;
        let dataType=req.query.dataType;
        const arr=await Video.find({ id: { '<' : id },dataType }).sort('id desc').limit(1);
       if(arr.length===0)
        res.json(false);
        else
        res.json(arr[0]);
      },
      getVideoNext: async function(req, res) {
        let id=req.query.id;
        let dataType=req.query.dataType;
        const arr=await Video.find({ id: { '>' : id },dataType }).sort('id asc').limit(1);
        if(arr.length===0)
        res.json(false);
        else
        res.json(arr[0]);
      },      
      insertAudio: async function(req, res) {
        const arr=[];
        for(let i=1;i<=20;i++){
            let json={}
            json.title="红猪";
            json.dataType='hz';
            json.url='http://192.168.1.58:1337/king/第'+i+'期.mp3';
            json.smallSrc='sourceImg/'+parseInt(Math.random()*40+1)+'.jpg';
            arr.push(json)
        }
        const temp =await Audio.createEach(arr).fetch();
        res.json(temp);
      },
      insertProduct: async function(req, res) {
        const arr=[];
        for(let i=1;i<=8;i++){
            let json={}
            json.product="商品";
            json.price=100;
            // json.smallSrc='sourceImg/'+parseInt(Math.random()*40+1)+'.jpg';
            json.smallSrc='shop/'+`${i}`+'.jpg';
            arr.push(json)
        }
        const temp =await Product.createEach(arr).fetch();
        res.json(temp);
      },
      insertVideo: async function(req, res) {
        const arr=[];
        for(let i=1;i<=20;i++){
            let json={}
            json.title="小王子";
            json.dataType='wqwz';
            json.url='2.mp4';
            json.smallSrc='images/x'+parseInt(Math.random()*20+1)+'.jpg';
            arr.push(json)
        }
        const temp =await Video.createEach(arr).fetch();
        res.json(temp);
      },
     
      insertUser: async function(req, res) {
        const json=req.allParams();
        const phone=json.phone;
        const row=await Users1.findOne({phone});
        if(row){
          res.json(false)
        }else{
          const obj =await Users1.create(json).fetch();
          delete obj.password;
          res.json(obj);
        }
       
      },
      // // 添加动态
      insertDt: async function(req, res) {
        const json=req.allParams();
        // console.log(obj,'数据')
        const obj =await Dt.create(json).fetch();

        const base64Data = obj.img;

        const dataBuffer=Buffer.from(base64Data,'base64');

        fs.writeFile(`${obj.id}.jpg`,dataBuffer,function(err){
          if(err){
              res.send(err)
          }else{
            res.send('保存成功')
          }
        })
        // console.log(obj,'动态')
        // const rs=fs.createReadStream(obj.img);
        // const ws =fs.createWriteStream(obj.id+'.jpg');
        // rs.pipe(ws);
        res.json(obj); 
      },
      token:async function(req,res){
        console.log(1111111)
        const qnconfig = require('../../photo.js')
        res.status(200).send(qnconfig.uploadToken)
      },
      newTopic: function(req, res) {
        req.file('image').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/upload')
            },
            function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let arr = files[0].fd.split('\\');
                let fileName = arr[arr.length - 1];
                res.json(fileName);
            });
    },
      


//获取七牛云的上传凭证
uploadToken:async function(req,res){
  console.log(111111)
  
  const qiniu = require("qiniu");
  const accessKey = '0JgdTAjMeXTK6qVjekB3mgpP5kvv-OH0FW94Dl8M'
  const secretKey = 'nD8_fsLPPCaX5nyVYocyaMqhPuVfM5_Uz9eGb8MH'
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let bucket = 'bighero'
    //要上传的空间
    var options = {
      scope: bucket,
      returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
    };
    
    // 构建上传凭证
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken=putPolicy.uploadToken(mac);
    if(uploadToken){
        res.json({uploadToken})
        console.log(111111)
    }
},
      //   添加商品
  //     insertDt: async function(req, res) {
  //     req.file('smallSrc').upload({
  //             dirname: require('path').resolve(sails.config.appPath, 'assets/smallSrc')
  //         },
  //         async function(err, files) {
  //             if (err)
  //                 return res.serverError(err);
  //             if (files.length === 0)
  //                 return res.json(false);
  //             let img = files[0].fd.split('\\');
  //                 img  = img[img.length - 1];
  //             let json=req.allParams();
  //             json.img=img;
  //             let row = await Dt.create(json).fetch();
  //             res.json(row);
  //         });
  // },



      getComment:async function(req, res) {
        const artId=req.query.artId;
        const skip=req.query.skip;
        const pageSize=req.query.pageSize;
        const arr=await Comment.find({artId}).sort('id desc').skip(skip).limit(pageSize);
        res.json(arr)

      },
      postComment:async function(req, res) {
        const json =req.allParams();
        const obj=await Comment.create(json).fetch();
        res.json(obj)

      },
      writeFile: async function(req, res) {
        const arr1 = await Article1.find();
        const str1 = JSON.stringify(arr1);
        fs.writeFile('Article1.js', str1, function(error) {
            if (error) {
                console.log('写入失败')
            } else {
                console.log('写入成功了')
                res.json('ok')
            }
        });
        //  const arr2 = await Users1.find();
        // const str2 = JSON.stringify(arr2);
        // fs.writeFile('Users1.js', str2, function(error) {
        //     if (error) {
        //         console.log('写入失败')
        //     } else {
        //         console.log('写入成功了')
        //     }
        // });
        
      },
      writeDb: function(req, res) {
        fs.readFile('./Article1.js', async function(error, data) {
                if (error) {
                    console.log('读取文件失败了')
                } else {
                    const str = data.toString();
                    const arr = JSON.parse(str);
                    const json = arr.map(el => {
                        delete el.id;
                        delete el.createdAt;
                        delete el.updatedAt;
                        return el
                    });
                    const arr1 = await Article1.createEach(json).fetch();
                    res.json(arr1)
                }
            })
            //  fs.readFile('./Users1.js', async function(error, data) {
            //     if (error) {
            //         console.log('读取文件失败了')
            //     } else {
            //         const str = data.toString();
            //         const arr = JSON.parse(str);
            //         const json = arr.map(el => {
            //             delete el.id;
            //             delete el.createdAt;
            //             delete el.updatedAt;
            //             return el
            //         });
            //         const arr1 = await Users1.createEach(json).fetch();
            //         res.json(arr1)
            //     }
            // })
          },

      mediaData: async function(req, res) {
        let srcType=req.query.srcType;
        let dataType=req.query.dataType;
        let records=req.query.records;
        let num=req.query.num;
        if(srcType==='audio'){
           const arr=await Audio.find({dataType}).sort('id asc').skip(records).limit(num);
           res.json(arr)
        }else {
            const arr=await Video.find({dataType}).sort('id asc').skip(records).limit(num);
            res.json(arr)
        }
      
      },

   
};