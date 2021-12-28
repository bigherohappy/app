<template>
  <!-- 消息页面 -->
  <div :style="`height:${$store.state.screenH - 51}px`" class="info">
    <!-- <h3>动态</h3> -->
    <div>
      <header>
        <div class="hd">
          <h3>Discover</h3>
          <img slot="icon" src="@/assets/icon/search.png" />
        </div>
        <p>new Discover</p>
      </header>
      <main>
        <div class="imgone">
          <div>
            <img slot="icon" src="@/assets/icon/交通费.png" />
            <p style="font-size: 12px">交通</p>
          </div>
          <div>
            <img slot="icon" src="@/assets/icon/特色小菜.png" />
            <p>美食</p>
          </div>
          <div>
            <img slot="icon" src="@/assets/icon/特色.png" />
            <p>自然</p>
          </div>
          <div>
            <img slot="icon" src="@/assets/icon/日程.png" />
            <p>日程</p>
          </div>
          <!-- <img slot="icon" src="@/assets/icon/交通费.png" />
          <img slot="icon" src="@/assets/icon/特色.png" />
          <img slot="icon" src="@/assets/icon/特色小菜.png" />
          <img slot="icon" src="@/assets/icon/日程.png" /> -->
        </div>
      </main>
      <mt-progress :value="20" :bar-height="5"></mt-progress>
      <aside>
         <!-- <mt-loadmore ref="refresh" :top-method="refrash" :topDistance="30"> -->
        <div class="part1">
          <h3>Best Destination</h3>
          <span>See All</span>
        </div>
        <div class="part2"> 
        <template v-for="item in list">
              <div class="one"  v-infinite-scroll="loadMore" :key="item.name"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" >
                <div class="left" @click="godetail">
                  <img :src="item.src" alt="" />
                  <span>{{item.id}}</span>
                </div>
                
              </div>
          </template>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "info",
  // data() {
  //   return {
  //     Url: this.$store.state.Url,
  //     list: [],
  //     loading: false,
  //     src:'',
  //     // src :this.$store.state.Url + "images/donglu/dl1.jpg",
  //     i:1
  //   };
  // },
  // methods: {
  //   loadMore() {
  //     this.loading = true;
  //     setTimeout(() => {
  //       let srcArr = this.list[this.list.length - 1];
  //       for (let i = 1; i <= 5; i++) {
  //         src=`this.$store.state.Url + "images/donglu/dl"+${i}+'.jpg'`
  //       }
  //       if(i=10){
  //       this.loading = false;
  //       console.log(srcArr);
  //       }
  //       // this.loading = false;
  //     }, 100);

  //   }

  // },
  data() {
    return {
      Url: this.$store.state.Url,
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
    // refrash() {
    //   this.skip = 0;
    //   this.list = [];
    //   this.getListData(() => {
    //     this.$refs.refresh.onTopLoaded();
    //     this.loading = false;
    //   });
    // },
    loadMore() {
      if (this.list.length > 0) {
        this.skip = this.list.length;
        this.getListData();
      }
      },
      godetail(){
        this.$router.push("/myDetail");
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
      this.$axios.get("getArt1", params).then((rs) => {
        if (rs.length === 0) {
          Toast("已经没有数据啦");
          console.log(1111111);
          this.loading = true;
          return;
        }
        rs = rs.map((el,i) => {
         
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.src = this.$store.state.Url + "images/dl/" + `${i+1}`+'.jpg';
          return el;
        });
        
        this.list = [...this.list, ...rs];
     
        console.log(111);
        if (fun) fun();
      });
    },
  },
};
</script>
<style scoped lang='less'>
.info {
  overflow: auto;
  header {
    .hd {
      display: flex;
      justify-content: space-between;
      h3 {
        margin-left: 20px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-top: 18px;
        margin-right: 20px;
      }
    }
    p {
      padding-left: 20px;
      margin-top: 0;
    }
  }
  main {
    border-bottom: 1px solid rgb(224, 223, 223);
    padding-bottom: 25px;
    .imgone {
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      p {
        padding-left: 2px;
      }
    }
    .imgone img {
      // padding: 10px;
      border-radius: 20px;
    }
  }
  aside {
    .part1 {
      display: flex;
      justify-content: space-between;
      h3 {
        padding-left: 20px;
      }
      span {
        line-height: 62.23px;
        padding-right: 20px;
      }
    }
    .part2 {
      height: 400px;
       display: flex;
        flex-wrap: wrap;
      .one {
     
        .left {
         
          width: 150px;
          padding: 10px;
          background-color: rgb(172, 37, 37);
          img {
            border-radius: 10px;
            width: 70%;
           
          }
        }
        
      }
    }
  }
}
</style>