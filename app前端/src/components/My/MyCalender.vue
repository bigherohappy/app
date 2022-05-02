<template>
<!-- 消息页面 -->
  <div class="info">
		<van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft"/>

     <van-calendar title="日历" :poppable="false" color="#78e69d"
  :show-confirm="false" :style="{ height: '500px' }"
/>
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
	onClickLeft  () {
				history.back();
			},
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
 	 /deep/ .van-ellipsis {
    color: #78e69d;
  }

/deep/  .van-nav-bar .van-icon {
    color: #78e69d;
  }

 /deep/ .van-nav-bar__text {
    color: #78e69d;
  }
}

</style>