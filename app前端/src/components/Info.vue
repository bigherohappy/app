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
       <div @click="gosend">
          <p >new Discover</p>
         </div>
      </header>
      <main>
        <div class="imgone">
          <div @click="enterTraffic">
            <img slot="icon" src="@/assets/icon/交通费.png" />
            <p style="font-size: 12px">交通</p>
          </div>
          <div @click="enterFood">
            <img slot="icon" src="@/assets/icon/特色小菜.png" />
            <p>美食</p>
          </div>
          <div  @click="enterNatural">
            <img slot="icon" src="@/assets/icon/特色.png" />
            <p>自然</p>
          </div>
          <div @click="entermyCalender">
            <img slot="icon" src="@/assets/icon/日程.png" />
            <p>日程</p>
          </div>
         
        </div>
      </main>
      <!-- <mt-progress :value="20" :bar-height="5"></mt-progress> -->
      <aside>
     
        <div class="part1">
          <h3>Best Destination</h3>
          <span>See All</span>
        </div>
        <div class="part2">
          <template v-for="item in list">
            <div
              class="one"
              v-infinite-scroll="loadMore"
              :key="item.name"
              infinite-scroll-disabled="loading"
              infinite-scroll-distance="10"
            >
              <router-link :to="`/MyDetail/${item.id}`">
              <div class="left" @click="godetail">
                <img :src="item.src" alt />
                <!-- <p>{{item.id}}</p> -->
                <p>洞鹿美景</p>
                <!-- <p>欢迎您</p> -->
              </div>
                </router-link>
            </div>
          </template>
        </div>
         <!-- <customFlow ref="waterfallsFlowRef" :value="list"></customFlow> -->
      </aside>
    </div>
  </div>
</template>
<script>
import customFlow from '../components/pubo'
import { Toast } from "mint-ui";
export default {
  name: "info",
components:{
customFlow
},
  data() {
    return {
      Url: this.$store.state.Url,
      list: [],
       list1:['洞鹿风光','美景','美食','洞鹿风光','美景','美食','洞鹿风光','美景','美食'],
      loading: false,
      i: 1,
      curPage: 0,
      skip: 0
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    gosend(){
      this.$router.push("/myDynamic");

      console.log(1111111111,'发布');
      
    },
     entermyCalender() {
      this.$router.push("/myCalender");
    },
    enterTraffic() {
      this.$router.push("/traffic");
    },
    enterFood() {
      this.$router.push("/food");
    },
    enterNatural() {
      this.$router.push("/natural");
    },
    loadMore() {
      if (this.list.length > 0) {
        this.skip = this.list.length;
        this.getListData();
      }
    },
    godetail() {
      this.$router.push("/myDetail");
    },
   
    getListData(fun) {
      const skip = this.skip;

      const params = { params: { start: this.skip, pageSize: 8 } };
      this.$axios.get("getArt1", params).then(rs => {
        if (rs.length === 0) {
          Toast("已经没有数据啦");
          console.log(1111111);
          this.loading = true;
          return;
        }
        rs = rs.map((el, i) => {
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.src = this.$store.state.Url + "images/dl/" + `${i + 1}` + ".jpg";
          return el;
        });

        this.list = [...this.list, ...rs];

        console.log(111);
        if (fun) fun();
      });
    }
  }
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
          a{
            color: black;
          }
        .left {
          border-radius: 10px;
          height: 140px;
          width: 150px;
          padding: 10px;
          margin-left: 10px;
          margin-top: 10px;
          background-color: #fff;
          border: 1px solid #eee;
          img {
            border-radius: 10px;
            width: 100%;
          }
          p{
            padding-left: 10px;
          
          }
        
        
        }
      }
    }
  }
}
</style>