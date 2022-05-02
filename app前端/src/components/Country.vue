<template>
<!-- 首页中的村镇 -->
  <div class="country" :style="`height:${$store.state.screenH-101}px`">
    <p class="title"> 生态洞鹿</p>
  
    
    <p>洞鹿乡，隶属于重庆市云阳县，地处云阳县东北部，东依龙洞乡、奉节县红土乡，南接红狮镇，西连双土镇，北靠石门乡，距云阳县政府驻地93千米， [1]  区域总面积92.27平方千米。 [2] 
明朝时期，洞鹿乡境域属居仁乡东市里洞泸堡；1983年1月，由洞鹿公社改为洞鹿乡。 [1]  截至2018年末，洞鹿乡户籍人口为14170人。 [2]  截至2020年6月，洞鹿乡下辖1个社区、4个行政村， [3]  乡人民政府驻洞鹿社区椅子湾。 [1] 
洞鹿乡粮食作物以水稻、玉米、小麦为主；畜牧业以饲养生猪、山羊为主。 [1]  2018年，洞鹿乡有工业企业1个，有营业面积超过50平方米以上的综合商店或超市18个。 [2] </p>
    
    <!-- <mt-loadmore ref="refresh" :top-method="refrash" :topDistance="30">
     
    </mt-loadmore> -->
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      Url:this.$store.state.Url,
      list: [],
       images : [
      'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ],
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
    // fun(id) {
    //   console.log("del");
    // },
    // fun1(id) {
    //   console.log("noshow");
    // },
    getListData(fun) {
      const skip = this.skip;
      const params = { params: { start: this.skip, pageSize: 8 } };
      this.$axios.get("getArt1", params).then(rs => {
        if (rs.length === 0) {
          Toast("已经没有数据啦");
          this.loading = true;
          return;
        }
        rs = rs.map(el => {
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.src = this.$store.state.Url + "smallSrc/" + el.smallSrc;
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
div.country {
  touch-action: none;
  overflow: auto;
  .title{
     margin: 0 auto;
     font-weight: bold;
     text-align: center;
  }
  p{
    text-indent: 2em;
  }
  
 
}
</style>
