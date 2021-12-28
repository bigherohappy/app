
<template>
  <div class="care" :style="`height:${$store.state.screenH-51}px`">
    <div class="h" >
      <h3>活动</h3>
    </div>
    <div class="con" >
      <mt-loadmore ref="refresh" :top-method="refrash" :topDistance="30">
        <ul 
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
          <li v-for="el in 9" :key="el">
            <div class="active">
              <h4>云阳县2021年“全县十佳农民”网络投票活动</h4>
              <img :src="`${$store.state.Url}images/Activity.jpg`" alt />
            </div>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8],
      loading: false,
      i: 1
    };
  },
  mounted() {},
  methods: {
    refrash() {
      this.list = [1, 2, 3, 4, 5, 6, 7, 8];
      this.loading = false;
      this.i = 1;
      setTimeout(_ => {
        this.$refs.refresh.onTopLoaded();
      }, 2000);
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
        "88" + i
      ];
      if (i === 5) {
        this.loading = true;
        Toast("我是有底线的哟");
      }
    }
  }
};
</script>

<style lang="less" scoped>
div.care {
 
  touch-action: none;
  overflow: auto;
  .h{
    position: fixed;
    top: 0px;
   width:100%;
    height: 51px;;
    background-color: red;
      h3 {
    margin: 0 5px;
    color: white;
    // align-items: center;
    line-height: 51px;
    
  }

  }
  .con{
 padding-top:40px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
    //   line-height: 10px;
    padding: 5px 0;
      .active {
        margin-top: 40px;
        h4 {
          margin: 0;
        }
        box-sizing: border-box;
        height: 150px;
        width: 100%;
        // border: 1px solid rgb(255, 4, 4);
        margin: 5px;
        img {
            padding: 5px 0;
          width: 100%;
          height: 100px;
        }
      }
    }
  }
}
</style>
