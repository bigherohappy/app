function changeTime(t){
    let d=new Date(t);
    return d.toLocaleDateString()
}
module.exports = {
    index: function(req, res) {
        res.view({ layout: false });
    },
    login: function(req, res) {
        let captcha = require('svg-captcha').create();
        req.session.captcha = captcha.text;
        res.view({ layout: false, captcha: captcha.data });
    },
    logined: async function(req, res) {
        let accout = req.body['accout'];
        let password = req.body['password'];
        let captcha = req.body['captcha'];
        if (captcha === req.session.captcha.toLowerCase()) {
            let row = await AdminUser.findOne({ accout, password });
            if (row) {
                req.session.userinfo = { id: row.id, nicheng: row.nicheng }
                res.json(1)
            } else
                res.json(2)
        } else {
            res.json(3)
        }
    },
    logout: function(req, res) {
        delete req.session.userinfo;
        res.json(true)
    },
    register: function(req, res) {
        res.view({ layout: false });
    },
    showUser: function(req, res) {
        res.json(req.session.userinfo.nicheng);
        console.log(req.session.userinfo.nicheng);
        
    },
    registed: async function(req, res) {
        let json = req.allParams();
        // console.log(json);
        try {
            let row = await AdminUser.create(json).fetch();
            req.session.userinfo = { id: row.id, nicheng: row.nicheng };
            res.json({ id: row.id, nicheng: row.nicheng })
        } catch (error) {
            res.json(false)
        }
    },
    addData: async function(req, res) {
        req.file('image').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/upload')
            },
            async function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let path = files[0].fd.split('\\');
                path = path[path.length - 1];
                let json = req.allParams();
                json.imgSrc = path;
                let row = await News.create(json).fetch();
                res.json(row);
            });
    },
    addNotice: async function(req, res) {
        let json = req.allParams();
        let row = await Notice.create(json).fetch();
        res.json(row)
    },
    addNotice1: async function(req, res) {
        let json = req.allParams();
        let row = await Notice1.create(json).fetch();
        res.json(row)
    },
    addMedia: async function(req, res) {
        let json = req.allParams();
        let row = await News1.create(json).fetch();
        res.json(row)
    },
    AudioList: async function(req, res) {
        let pageNum = req.query.pageNum;
        let dataType = req.query.dataType;
        req.session.dataType=dataType;
        let arr = await Audio.find({dataType}).sort('id asc').skip(pageNum * 5).limit(5);
        let num = await Audio.count({dataType});
        res.json({ arr, num })
    },
    select: async function(req, res) {
        let keyword = req.query.title;
        let arr = await Article.find({ where: { title: { contains: keyword } } }).sort('id desc').limit(5);
        arr = arr.map(el => {
            el.date = changeTime(el.updatedAt);
            return el
        })
        res.json(arr)
    },
    selectId: async function(req, res) {
        let id = req.query.id;
        let obj = await Article.findOne({ id });
        res.json(obj)
    },
    changeNew: async function(req, res) {
        let id = req.body.id;
        let title = req.body.title;
        let content = req.body.content;
        let obj = await Article.update({ id }, { title, content }).fetch();
        res.json(obj)
    },
    delAudio: async function(req, res) {
        let id = req.query.id;
        let dataType=req.session.dataType;
        try {
            let row = await Audio.destroy({ id }).fetch();
            let count1 = await Audio.count({dataType});
            res.json(count1)
        } catch (error) {
            res.json(false)
        }
    },
//   添加商品
    addShop: async function(req, res) {
        req.file('smallSrc').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/smallSrc')
            },
            async function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let smallImg = files[0].fd.split('\\');
                smallImg  = smallImg[smallImg.length - 1];
                let json=req.allParams();
                json.smallSrc=smallImg;
                let row = await Shop.create(json).fetch();
                res.json(row);
            });
    },
    //   话题管理
    addTopic : async function(req, res) {
        req.file('smallSrc').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/smallSrc')
            },
            async function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let smallImg = files[0].fd.split('\\');
                smallImg  = smallImg[smallImg.length - 1];
                let json=req.allParams();
                json.smallSrc=smallImg;
                let row = await Topic.create(json).fetch();
                res.json(row);
            });
    },
    addArticle: async function(req, res) {
        req.file('smallSrc').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/smallSrc')
            },
            async function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let smallImg = files[0].fd.split('\\');
                smallImg  = smallImg[smallImg.length - 1];
                let json=req.allParams();
                json.smallSrc=smallImg;
                let row = await Article.create(json).fetch();
                res.json(row);
            });
    },
    // 添加文章
    addArticle1: async function(req, res) {
        req.file('smallSrc').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/smallSrc')
            },
            async function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let smallImg = files[0].fd.split('\\');
                smallImg  = smallImg[smallImg.length - 1];
                let json=req.allParams();
                json.smallSrc=smallImg;
                let row = await Article1.create(json).fetch();
                res.json(row);
            });
    },
    newImg1: function(req, res) {
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
    // 添加活动
    addActive: async function(req, res) {
        req.file('smallSrc').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/smallSrc')
            },
            async function(err, files) {
                if (err)
                    return res.serverError(err);
                if (files.length === 0)
                    return res.json(false);
                let smallImg = files[0].fd.split('\\');
                smallImg  = smallImg[smallImg.length - 1];
                let json=req.allParams();
                json.smallSrc=smallImg;
                let row = await Active.create(json).fetch();
                res.json(row);
            });
    },
    newActive: function(req, res) {
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
    newShop: function(req, res) {
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
    newImg: function(req, res) {
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
};