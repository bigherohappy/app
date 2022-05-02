<template>
<!-- 首页中的资讯组件 -->
  <div class="message" :style="`height:${$store.state.screenH-101}px`">
    <!-- <mt-swipe :auto="2000" style="height:180px">
      <mt-swipe-item>
         <img :src="`${this.Url}images/ban1.jpg`"  alt  />
      </mt-swipe-item>
      <mt-swipe-item>
          <img :src="`${this.Url}images/ban2.jpg`" alt />
      </mt-swipe-item>
      <mt-swipe-item>
          <img :src="`${this.Url}images/ban3.jpg`" alt />
      </mt-swipe-item>
    </mt-swipe> -->
    <mt-loadmore ref="refresh" :top-method="refrash" :topDistance="30">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <li class="list" v-for="el in list" :key="el.id">
        <van-cell  is-link :to="`/message/${el.id}`">
  <!-- 使用 title 插槽来自定义标题 -->
  <template #title>
    <span class="custom-title">{{el.title}}</span>
    <span style="margin-left:30px;" class="custom-title">{{el.date}}</span>
    <!-- <van-tag type="danger">标签</van-tag> -->
  </template>
</van-cell>



          <!-- <mt-cell is-link :to="`/adetil1/${el.id}`"> -->
                <!-- <h4 class="title" v-html="el.title"></h4>
              <div class="date" v-html="el.date"></div>

  -->
             <!-- <div class="word">
                <h4 class="title" v-html="el.title"></h4>
                <div class="desc" v-html="el.content"></div>
              </div>
              <div class="date" v-html="el.date"></div> -->
            <!-- </mt-cell>  -->
            <!-- <img slot="icon" :src="el.src" width="48" height="48" /> -->
       
        </li>
      </ul>
    </mt-loadmore>
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
    // fun(id) {
    //   console.log("del");
    // },
    // fun1(id) {
    //   console.log("noshow");
    // },
    getListData(fun) {
      const skip = this.skip;
      const params = { params: { start: this.skip, pageSize: 8 } };
      this.$axios.get("getNotice", params).then(rs => {
        if (rs.length === 0) {
          Toast("已经没有数据啦");
          this.loading = true;
          return;
        }
        rs = rs.map(el => {
          el.date = new Date(el.updatedAt).toLocaleDateString();
          // el.src = this.$store.state.Url + "smallSrc/" + el.smallSrc;
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
div.message {
  touch-action: none;
  overflow: auto;
//  .mint-swipe-item img{
//    width:100%;
//    height: 100%;
//  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li.list {
      line-height: 80px;
      a,
      a:visited {
        padding-bottom: 5px;
      }
      .mint-cell:last-child {
        background-image: none;
      }
      .mint-cell-wrapper {
        padding: 0 0 0 2px;
      }
      .mint-cell-swipe-button {
        line-height: 70px;
      }
      // .mint-cell-value.is-link {
      //   display: flex;
      //   div.word {
      //     flex: 7;

      //     h4.title {
      //       color: #666;
      //       margin: 10px 0 5px;
      //       display: -webkit-box;
      //       -webkit-box-orient: vertical;
      //       -webkit-line-clamp: 1;
      //       overflow: hidden;
      //       font-size: 15px;
      //     }
      //     div.desc {
      //       font-size: 14px;
      //       height: 40px;
      //       line-height: 20px;
      //       display: -webkit-box;
      //       -webkit-box-orient: vertical;
      //       -webkit-line-clamp: 2;
      //       overflow: hidden;
      //     }
      //   }
      //   div.date {
      //     flex: 4;
      //     font-size: 12px;
      //     text-align: right;
      //     margin-right: 8px;
      //   }
      // }
    }
  }
}
</style>
