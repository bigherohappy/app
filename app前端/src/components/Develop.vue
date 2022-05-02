<template>
  <!-- 首页中的推荐组件 -->
  <div class="recommend" :style="`height:${$store.state.screenH-101}px`">
    <h4>云阳洞鹿乡 激发“鹿”动力，提能升级助力乡村振兴</h4>
    <div class="con">
 <h4>产业发展提能升级 乡村振兴提质增效</h4>
    <p>
      洞鹿坝是目前全县保存得比较完好的一个高山坝子，这里十地肥沃，气候温和，雨量充足。近年来洞鹿乡对标东北片区绿色发展,大力发展山上经济、水中经济、林下经济,打通“绿水青山”向“金山银山”转化的通道。
      “油菜花香展娇姿，常花踏青正当时”洞鹿乡打造以五彩油菜花为颜料，大地为画布的创意景观，呈现了别样的春日景观，不仅为餐饮等服务业凝聚了人气，更为洞鹿乡的未来发展提供了新的驱动力。今年4月洞鹿乡将举办首届五彩油菜乡村旅游节，深挖油菜花旅游经济，打造
      生态旅游观光景区，全力推进生态农旅破革提质，从而实现“田园变公园、田间变车间、农区
      变景区、农房变客房、劳作变体验”洞鹿美丽乡村的建设。
      此外，洞鹿乡高标准规划了滨水休闲旅游景观，明确三大功能--农业种植、水产养殖。休闲观光，促进农旅结合:聚焦四大片--十里稻香、荷渔共生、农耕文化、果溢飘香，丰富旅游内容。同时，以河为景，打造夜景灯光秀:以田为景，打造五彩田园风光:以房为景，打诰古色古香的农房村庄;以院为景，打造农耕体验院落,全力推动乡村振兴产业融合发展提能升级。
      营商环境提能升级，招商引资起实效
    </p>
    <h4>营商环境提能升级，招商引资起实效</h4>
    <p>
      洞鹿乡不断优化营商环境，实现零障碍工程。通过建立在外成功人士信息库，每年利用春节等集中返乡时机，组织召开返乡成功人士座谈会，分享成功的喜悦、交流信息畅谈发展。天能返乡的则通过邮寄一封慰问信介绍家乡发展近况，引导成功人士对家乡建设的建言献策，鼓励成功人士返乡发展回报桑梓。同时，对已落户的重点企业，实行“一个项目、一名领导、一个联络员、一站式服务”的工作机制，定期开展企业走访活动，及时协调解决问题和困难，让企业全心抓发展，实现小企业铺天盖地，大企业顶天立地。
      依托水量稳定，水质干净，无污染的水源优势，引进尚水食品有限公司打造“仙鹿矿泉
      水”，依托天然溶洞的地理优势，引入投资签订意向协议，聘请具有资质的专业队伍对“仙鹿洞溶洞进行勘察，产业发展欣欣向荣，推动招商引资全方位提能升级。
    </p>
    
    </div>
   
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      Url: this.$store.state.Url,
      list: [],
      loading: false,
      i: 1,
      curPage: 0,
      skip: 0,
      right: id => [
        {
          content: "删除",
          style: { background: "red", color: "#fff" },
          handler: () => this.fun(id)
        }
      ],
      left: id => [
        {
          content: "不显示",
          style: { background: "red", color: "#fff" },
          handler: () => this.fun1(id)
        }
      ]
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    refrash() {
      this.skip = 0;
      this.list = [];
      this.getListData(() => {
        this.$refs.refresh.onTopLoaded();
        this.loading = false;
      });
    },
    loadMore() {
      if (this.list.length > 0) {
        this.skip = this.list.length;
        this.getListData();
      }
    },
    fun(id) {
      console.log("del");
    },
    fun1(id) {
      console.log("noshow");
    },
    getListData(fun) {
      const skip = this.skip;
      const params = { params: { start: this.skip, pageSize: 8 } };
      this.$axios.get("getProduct", params).then(rs => {
        if (rs.length === 0) {
          Toast("已经没有数据啦");
          this.loading = true;
          return;
        }
        rs = rs.map(el => {
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.src = this.$store.state.Url + el.smallSrc;
          return el;
        });
        this.list = [...this.list, ...rs];
        if (fun) fun();
      });
    }
  }
};
</script>

<style lang="less" scoped>
div.recommend {
  touch-action: none;
  overflow: auto;
  padding-left: 10px;
  .con{
    padding-bottom: 30px;
    text-indent: 2em;
    font-size: 14px;
    color: #666;
  }
}
</style>
