<template>
<!-- 首页中的推荐组件 -->
  <div class="recommend" :style="`height:${$store.state.screenH-101}px`">
    <h4>民俗文化</h4>
  <div class="con">
<p>春节在我们这里是最重视的节日，我们会早早的准备着年货，等着爸爸妈妈回家过年</p>
  <img src="../assets/f.jpg" alt="">
  <p>到了春节那天早早的起床，放鞭炮、贴春联</p>
  <img src="../assets/ty.jpg" alt="">

  <p>一家人在一起吃团圆饭、包汤圆</p>
    <img src="../assets/yh.jpg" alt="">
    <p>大年三十的晚上，我们会一起聊天，守夜，等待新的一年的到来，长辈们会包压岁钱，代表着好运气</p>


  <img src="../assets/xn.jpg" alt="">
<p>小盆友们一起玩仙女棒、摔炮、小金鱼等等</p>
  


  </div>
  <!-- <img src="../../assets/car.jpg" alt=""> -->

    
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      Url:this.$store.state.Url,
      list: [],
      loading: false,
      i: 1,
      curPage: 0,
      skip: 0,
     
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
  padding: 5px;
  touch-action: none;
  overflow: auto;
  h4{
    padding-left: 10px;
  }
  .con{
    padding-left: 10px;
 margin: 0 auto;
  }
  img{
   border-radius: 5px;
    width: 97%;
    
  }
}
</style>
