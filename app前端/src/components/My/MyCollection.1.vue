<template>
<!-- 消息页面 -->
  <div class="info">
      <div class="box">
        <textarea name="" id="" cols="10" rows="3" v-model='texts'></textarea>
        <!-- 用户写微博的地方 -->
        <button v-on:click='nei()'>发布</button>
        <ul>
            <li v-for='(item,i) in msg' :key="i">
                <!-- 
                    v-for把内容循环遍历出来
                 -->
                <p class="text">{{item.text}}</p>
                <p class="date">{{item.date}}</p>
              <img :src="baseImg" alt="" class="img" style="width:30px;height:30px">
            
              <!-- <img :src="imageUrl" alt="" class="img"> -->

                <span v-on:click='shanchu'>删除</span>
                <!-- 点击事件，点击之后执行shanchu（）函数 -->
            </li>
        </ul>
    </div>
   <div class="file">
      <input type="file" class="updata" accept="image/*" @change="change($event)" ref="updata">
      <img :src="imageUrl ? imageUrl : baseImg" alt="" class="img">
    </div>
  </div>
</template>
<script>
export default {
  name: "info",
  data() {
    return {
      Url: this.$store.state.Url,
      // 上传的图片
        imageUrl: '',
        // 默认的图片
        baseImg: '',
         // texts为空接收用户的内容
            texts:'',
            // 创建msg用于存放用户的数据
            msg:[
                {
                    text:'这是第一条内容',
                    date:'2020-11-5',
                    img:''
                },
                {
                    text:'这是第二条内容',
                    date:'2020-11-5',
                    img:''
                }
                ]


    };
  },
  methods: {

    
     change(e) {
      console.log(e.target.files[0].name);
      // 判断是不是规定格式
      // let name  =  e.target.files[0].name

      // 获取到第一张图片
      let file = e.target.files[0]

      // 创建文件读取对象
      var reader = new FileReader()
      var that = this 

      //  将文件读取为DataURL
      reader.readAsDataURL(file)

      // 读取成功调用方法
      reader.onload = e => {
        console.log('读取成功');

        // e.target.result 获取 读取成功后的  文件DataURL
        that.imageUrl = e.target.result
        console.log(that.imageUrl);


        // 如果要将图片上传服务器，就在这里调用后台方法
      }

     },
        // 删除当前的内容
            shanchu(index){
                this.msg.splice(index,1);
            },
            
            nei(){
                // date获取时间
                var date= new Date();
                // 做判断，如果用户输入内容为空，提醒他输入内容
                if(this.texts==''){
                    alert('请输入内容');
                    return;
                }
                // 向后追加当前用户输入的内容
                this.msg.push({

                    text:this.texts,
                    // 获取当前日期
                    date:date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
                });
                // 输入完之后又为空
                this.texts=''
            }




   },
   created() {
     // 获取默认显示的图片
     this.baseImg = require('../../assets/icon/特色.png')
   },
   mounted() {
    
   }
}

</script>
<style scoped lang='less'>
.info {
 background-color: #fff;
}
	ul{
            list-style: none;
        }
        .box{
            width: 400px;
            height: 300px;
            margin: auto;
        }
        textarea{
            width: 300px;
            height: 100px;
            /* margin: auto; */
        }
        li>p{
            margin: 10px;
            
        }
        li>span{
            cursor: pointer;
        }
        .text{
            display: inline-block;
        }
        .date{
            display: inline-block;
        }

.file {
    position: relative;
    width: 200px;
    height: 150px;
    background-color: #ccc;
  }
  .updata {
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 150px;
  }
</style>