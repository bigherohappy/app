<template>
<!-- 消息页面 -->
  <div class="info">
    
		<van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft"/>

  <h1>关于美食</h1>
  <div class="con">
  <img src="../../assets/f2.jpg" alt="">
  <p>自己腌制腊肉纯天然无任何添加剂</p>
  <img src="../../assets/mi.jpg" alt="">

  <p>两千亩薄壳核桃、两百公顷无公害高山土豆、七十多公顷红心猕猴桃和野生猕猴桃、</p>
    <img src="../../assets/sil.jpg" alt="">
    <p>五十六公顷软籽石榴和数千桶中蜂蜜期待您的采购</p>
   <img src="../../assets/xlx.jpg" alt="">
<p>300亩小龙虾、20亩青蛙。100亩稻田生态鱼</p>

  <img src="../../assets/yu.jpg" alt="">
<p>100亩稻田生态鱼</p>
  <img src="../../assets/daxie.jpg" alt="">
  <p>60亩特色大闸蟹已经成了“蛙鱼虾蟹，样样不缺”的特色水产养殖业期盼您来品尝</p>


  </div>
  <!-- <img src="../../assets/car.jpg" alt=""> -->


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
  padding: 10px;
 background-color: #fff;
 .con{
   

   width:360px;
   img{
     width: 100%;
   }
 }
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