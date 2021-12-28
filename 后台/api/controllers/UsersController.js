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
    getArt1: async function(req, res) {
      let skip=req.query.start;
      let pageSize=req.query.pageSize;
      const arr=await Article1.find().sort("id desc").skip(skip).limit(pageSize);
      res.json(arr);
    },
    getSearchData: async function(req, res) {
      let keyword=req.query.keyword;
      const arr=await Article.find({title:{contains:keyword}}).sort("id desc");
      res.json(arr);

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
        for(let i=1;i<=40;i++){
            let json={}
            json.product="商品";
            json.price=100;
            json.smallSrc='sourceImg/'+parseInt(Math.random()*40+1)+'.jpg';
            json.smallSrc='sourceImg/'+`${i}`+'.jpg';
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