<template>
  <!-- 消息页面 -->
  <div class="mydetail" :style="`height:${$store.state.screenH - 51}px`">
    <h3>特产</h3>
<van-notice-bar   :scrollable="true"
  text="把特产带回家给亲爱的她，满满的爱带回家"
  left-icon="volume-o"
/>
    <!--     
    <div is-link :to="`/shopDetail/${el.id}`"> -->
    <div v-for="el in list" :key="el.id" class="productItem">
      <router-link :to="`/shopDetail/${el.id}`">
        <!-- @click="entershopdetail" -->
        <!-- <img :src="el.src" alt="" />
        <div>{{ el.price }}</div> -->
        <van-swipe-cell>
          <van-card
            num="2"
            :price="el.price"
            desc="洞鹿特产"
            :title="el.product"
            class="goods-card"
            :thumb="el.src"
          />
          <template #right>
            <van-button
              square
              text="Delete"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </router-link>
    </div>

    <!-- </div> -->
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
    entershopdetail(id) {
      // this.$router.push('/shopDetail')
      //  this.$router.push({path: '/shopDetail',query: {id: id } })
    },
    // }
  },
};
</script>
<style scoped lang='less'>
.mydetail {
  overflow: auto;
  background-color: #fff;
  .productItem {
    // width: 200px;
    // display: flex;
    height: 100px;
    background-color: rgb(168, 228, 163);
    // img {
    //   width: 200px;
    //   height: 80px;
    // }
  }
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
}
</style>