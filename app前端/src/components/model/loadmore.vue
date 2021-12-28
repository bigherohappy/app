<template>
  <div class="app">
    <mt-loadmore ref="refresh" :top-method="refrash" :topDistance="30">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8],
      loading: false,
      i: 1,
    };
  },
  mounted() {},
  methods: {
    refrash() {
      this.list = [1, 2, 3, 4, 5, 6, 7, 8];
      this.loading = false;
      this.i = 1;
      setTimeout(_=>{
        this.$refs.refresh.onTopLoaded()
      },2000)
    },
    loadMore() {
      console.log("ok");
      let i = this.i++;
      this.list = [
        ...this.list,
        "12" + i,
        "23" + i,
        "56" + i,
        "87" + i,
        "67" + i,
        "76" + i,
        "88" + i,
      ];
      if (i === 5) {
        this.loading = true;
        Toast("我是有底线的哟");
      }
    },
  },
};
</script>

<style lang="less">
div.app {
  touch-action: none;
  ul {
    li {
      line-height: 90px;
    }
  }
}
</style>
