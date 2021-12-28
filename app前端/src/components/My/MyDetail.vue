<template>
  <!-- 消息页面 -->
  <div class="mydetail">
    <mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <h3>mydetail</h3>
    <!-- <mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar> -->

<!-- tab-container -->
<!-- <mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container> -->
    <div v-for="el in list" :key="el.id" >
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
}
</style>