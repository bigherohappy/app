<template>
  <div class="rigster">
    <input type="file" id="fileinp" accept="image/*" ref="avatarInput" @change="update" />
<br>
	<img :src="avatar" style="display:block;width:35%;margin:20px auto ;border:1px solid #ccc;padding:10px" alt="照片展示区"><br>
<button @click="uploadbtn" >上传</button>

  </div>
</template>
  
<script>
import { Toast } from "mint-ui";
import '../../assets/js/jquery-2.1.3'
import '../../assets/js/com'
import Qs from "qs";
export default {
  created() {
   
        this.$axios.get('token')
        .then(res => {
            this.uploadToken = res
        })
    },
  
   methods : {
    update:function(e){
      let that = this
      let file = e.target.files[0];
      let imgsize = file.size;
      if(imgsize > 5242880){
        alert("图片大小不能超过5M");
         return false;
      } 
    },
    uploadbtn:function(){
      let that = this
      let files = this.$refs.avatarInput.files[0];

      // console.log(files,'files')
      let param = new FormData(); //创建form对象 
       param.append('file',files);//通过append向form对象添加数据 
      // 创建一个空的axios 对象
     
      
        this.$axios.post('newTopic',param)
        .then(res => {
           console.log(res,'res')
           console.log(param ,'param ')
        })
  //    this.$axios.post({
  //       url:'/newTopic',
  //       type:'post',
  //       data:param,
  //       dataType:'json',
  //       processData: false,
  //       contentType:false,
  //       success:function(res){
  //         console.log(res)
  //         that.avatar="http://localhost"+res.src; 
  //       },
  //       error:function(err){
  //         console.log(err)
  //       }
  //     })
    }
  },
 data() {
    return {
       avatar:"",
    imgname:'',
      uploadToken:'',
        token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: 'https://upload-z2.qiniup.com',
      // 这是七牛云空间的外链默认域名
      qiniuaddr: 'rb41ymjvq.hn-bkt.clouddn.com',
        fileList: [],
      obj: {
        content: "",
         img: "",
       
      },
      repassword: ""
    };
  }
  }
 

</script>

<style lang="less">
div.rigster {
  .home-van-cell {
    background-color: #fff;
    overflow: hidden;
    padding: 1.25rem 0.6875rem 1.25rem 0.703125rem;

    .home-van-cell__title {
      float: left;
      padding-top: 1.34375rem;

      span {
        font-size: 1rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
      }
    }

    .home-van-cell__value {
      float: right;

      img {
        width: 4.0625rem;
        height: 4.0625rem;
        border-radius: 50%;
      }

      .hiddenInput {
        display: none;
      }
    }
  }
  padding-top: 100px;
  .mint-cell-wrapper {
    background-size: 100% 1px;
  }
  .myhead {
    // background-color:rgb(150, 30, 30);
    background-color: rgb(120, 230, 157);
  }
  b {
    display: inline-block;
    // color: rgb(150, 30, 30);
    color: rgb(120, 230, 157);
    padding-top: 5px;
  }
  div.btn {
    display: flex;
    justify-content: space-around;
    button {
      padding: 8px 25px;
      margin: 10px;
      border-radius: 4px;
      border: none;
      outline: none;
      // background-color: rgb(150, 30, 30);
      background-color: rgb(120, 230, 157);

      color: white;
      &:last-child {
        background-color: transparent;
        background-color: #555;
      }
    }
  }
}
</style>
