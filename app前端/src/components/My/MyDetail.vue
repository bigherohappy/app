<template>
  <!-- 消息页面 -->
  <div class="mydetail" :style="`height:${$store.state.screenH-51}px`">
    <mt-header fixed title="详情" style="background-color:rgb(120, 230, 157)">
  <router-link to="/tabbar" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <h3>mydetail</h3>
    <div v-for="el in list" :key="el.id" >
      <h3>海绵宝爸</h3>
      <img :src="el.src" alt="" />
      <div>{{el.price}}</div>
    </div>
  </div>

</template>
<script>
export default {
  name: "mydetail",
  data() {
    return {
      Url: this.$store.state.Url,
      list: [],
      skip: 0,
    };
  },
    mounted() {
    this.getListData();
  },
  methods: {
    getListData(fun) {
      const skip = this.skip;
      const params = { params: { start: this.skip, pageSize: 8 } };
      this.$axios.get("getProduct", params).then((rs) => {
        if (rs.length === 0) {
          Toast("已经没有数据啦");
          this.loading = true;
          return;
        }
        rs = rs.map((el) => {
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.src = this.$store.state.Url + el.smallSrc;

          return el;
        });
        this.list = [...this.list, ...rs];
        // console.log(list);
        if (fun) fun();
      });
    },
  },
};
</script>
<style scoped lang='less'>
.mydetail {
  background-color: #fff;
  img{
    width: 200px;
  }
}
</style>