<template>
<!-- 4.30 -->
  <div class="rigster">
   <mt-header title="注册" class="myhead" fixed>
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <form autocomplete="off" @submit.prevent="submit" >
      <mt-field
        label="内容"
        placeholder="请输入用户名"
        :attr="{ pattern: '\\S{6,8}' }"
        v-model="obj.content"
      >
    </mt-field>
    
    <!-- <van-uploader v-model="fileList" accept="file" :max-count="2"  :after-read="afterRead" :preview-image="false" multiple /> -->
    <van-uploader v-model="fileList" multiple :max-count="2" />
      <mt-field
        label="图片"
        placeholder="请输入手机号"
        :attr="{ pattern: '1\\d{3}' }"
        type="tel"
        v-model="obj.img"
      >
        <b>*</b>
      </mt-field>

      <div class="btn">
        <button>注册</button>
        <button type="reset">重置</button>
      </div>
    </form>
  </div>
</template>
<script>
   

import { Toast } from "mint-ui";
import Qs from "qs";
export default {
  created() {
        this.$axios.get('token')
        .then(res => {
            this.uploadToken = res
        })
    },
  
  methods: {
        onOversize(file) {
      console.log(file);
      Toast('文件大小不能超过 500kb');
    },
   afterRead(file){
      this.$axios.post("token",params).then((rs) => {
          console.log(rs,'shuj');
          this.token=rs
      })
                let url=this.domain + this.token;//获得七牛上传图片的地址和token
                let formData = new FormData();
                //如果上传的数组
                if(file instanceof  Array){
                    for(let i=0;i<file.length;i++){
                        formData.append('file'+i,file[i].file)
                    }
                }else{
                    formData.append('file',file.file);//必须是file.file，不然会报错
                }
                //添加额外的参数
                formData.append('x:type',this.$config.doc.headCover);
                formData.append('x:owner',this.userInfo.owner);
                formData.append('x:creator',this.userInfo.id);
                formData.append('x:target',this.userInfo.id);
                //添加请求头
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                this.$axios.post(url,formData,config).then(res=>{
                   if(res.data.code===0){
                       this.refreshHandle();
                       this.$toast({
                           message:'头像上传成功!'
                       })
                   }
                })
            },



    submit() {
        console.log(this.obj);
        console.log(this.fileList);
         var form = new FormData()
           form.append('img',this.fileList)
           form.append('content',this.obj.content)
         var dataImg = this.fileList[0].content
        var imgs = dataImg.replace(/^data:image\/\w+;base64,/, "");//去掉base64位头部
        this.obj.img=imgs

        console.log(this.fileList,'img');
       
        console.log(this.obj);
        const params = Qs.stringify(this.obj);
        console.log(params,'传递')
        this.$axios.post("insertDt", params).then((rs) => {

        // this.$axios.post("token",params).then((rs) => {
          console.log(rs,'shuj');

         if(rs){
          console.log(rs);
          this.$store.commit('writeDt',rs);
          Toast('发布成功')
         
          this.$router.go(-1)
         }else{
           
         }
          const config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
          // 重命名要上传的文件
      const keyname = 'bighero' + new Date() + Math.floor(Math.random() * 100) + '.' + 'jpg'
     
         this.$axios.post(this.domain, form).then(res => {
          this.imageUrl = 'http://' + this.qiniuaddr + '/' + this.keyname
        })




        });
     
      return false;
    },
    
     goback() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
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
};
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
  .myhead{
    // background-color:rgb(150, 30, 30);
    background-color: rgb(120, 230, 157);
  }
  b {
    display: inline-block;
    // color: rgb(150, 30, 30);      
    color:  rgb(120, 230, 157);
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
