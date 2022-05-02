<template>
<!-- 消息页面 -->
  <div class="info">
    
		<van-nav-bar title="" left-text="返回" left-arrow @click-left="onClickLeft"/>

  <h1>关于自然</h1>
  <div class="con">
  <img src="../../assets/na.jpg" alt="">
 

<p>洞鹿乡有句口号是“水源之乡、生态洞鹿”。2017年纳入休闲避暑胜地，这里水资源丰富，
茂密广阔的森林资源。这里地大物博，资源富庶，六十万吨的石灰石矿纳入规划开采</p>


这里地势落差较大，山水钟灵毓秀，四季风景秀丽。


  <img src="../../assets/rong.jpg" alt="">
<p>春季可到13500米的九湾寨登高远眺，领略奇峰俊岭，到神秘幽深的仙鹿溶洞一探奇观，</p>
  <img src="../../assets/cp.jpg" alt="">
<p>夏季可到1200米的草坪梁休闲纳凉，到美丽独特的洞鹿坝河道公园闲庭漫步。</p>
  <img src="../../assets/feng.jpg" alt="">
<p>秋季可环游青衫水库欣赏满山红叶，到千亩原始古朴的洞鹿田园体验丰收喜悦。</p>
  <img src="../../assets/snow.jpg" alt="">
  <img src="../../assets/xue.jpg" alt="">
<p>冬季亦可到马槽千游玩赏雪，采购绿色环保的土特产品。</p>
<p>这里是以处休闲避暑的天然氧吧，是户外登山运动的最美之地，是乡村旅游开发项目的最佳之选。高山茶场、高山优质大米、青康民宿项目、草坪梁露营基地正在稳步推进。洞鹿迎来生态绿色、休闲避暑、养心养老的飞速发展机遇。追上社会新时代，“生态洞鹿”APP，用来宣传家乡，走出洞鹿智行天下，让更多人认识洞鹿，知道洞鹿，
以脱贫攻坚引领乡村振兴建设美丽洞鹿。热情周到的洞鹿人，欢迎大家的到来。</p>



 






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