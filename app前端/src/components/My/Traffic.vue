<template>
<!-- 消息页面 -->
  <div class="info">
    
		<van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft"/>

  <h1>关于交通</h1>
  <div class="con">
  <img src="../../assets/car.jpg" alt="">
  <p>洞鹿--是一个小乡村，去各个地方距离都不是很远。</p>
  <p>我们有小动车租车服务---骑着小电动车在乡间小路上超酷的好吗？</p>

<ul>
  <li>租车服务：</li>
  <li>每天上午八点-晚上十点</li>
  <li>费用：五十/一天</li>
  <li>欢迎大家的到来</li>
</ul>

<p>

</p>
  <img src="../../assets/tra.jpg" alt="">

<p>
让你在去看远离城市的风景时，带着毛孩子，在安静的小村庄里
骑着光阳i-Like享受正午时的暖阳累了就让它在田野间疯跑
你在旁边喝一杯咖啡一晒晒太阳简直就是一个绝绝子的午后呀!
</p>
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