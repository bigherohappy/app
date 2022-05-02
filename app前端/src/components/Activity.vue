<template>
<!-- 活动页 -->
  <div class="care" :style="`height:${$store.state.screenH-51}px`">
    <div class="h" >
      <h4 style="padding:0 10px;">活动</h4>
    </div>
    <div class="con" >
      <mt-loadmore ref="refresh" :top-method="refrash" :topDistance="30">
        <ul 
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
          <li v-for="el in list" :key="el.id">
              <router-link :to="`/activieDetail/${el.id}`">
            <div class="active">
             
              <h5>{{el.title}}</h5>
              <img :src="el.src" alt />
              <!-- <img :src="`${$store.state.Url}images/Activity.jpg`" alt /> -->
            </div>
              </router-link>
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
    goactive(){
      alert(1)
    },
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
   
    getListData(fun) {
      const skip = this.skip;
      const params = { params: { start: this.skip, pageSize: 8 } };
      this.$axios.get("getActive", params).then(rs => {
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
div.care {
 
  touch-action: none;
  overflow: auto;
  .h{
    position: fixed;
    top: 0px;
   width:100%;
    height: 51px;;
    background-color: rgb(120, 230, 157);
      h4 {
    margin: 0 5px;
    color: white;
    // align-items: center;
    line-height: 51px;
    
  }

  }
  .con{
 padding-top:40px;
  }
  a{
    color:#666;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
    padding: 5px 0;
      .active {
        margin-top: 10px;
        h5 {
          margin: 0;
          padding: 10px;
          // color: aquamarine;
        }
        box-sizing: border-box;
        height: 150px;
        width: 100%;
        margin: 5px;
        img {
          border-radius: 5px;
          
          width: 98%;
          height: 100px;
        }
      }
    }
  }
}
</style>
