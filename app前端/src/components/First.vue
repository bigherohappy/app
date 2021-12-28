<template>
<!-- 首页 -->
  <div class="first" :style="`height:${$store.state.screenH-51}px`">
    <div class="headerb">
      
      <h4>我的家乡</h4>
      <router-link to="/search">
      <mt-search  cancel-text="取消" placeholder="搜索"></mt-search>
      </router-link>
      
    </div>
    <div class="body1" :style="`height:${$store.state.screenH-51}px`">
      <mt-navbar v-model="selected" @click.native="getId" fixed>
        <mt-tab-item id="0">关注</mt-tab-item>
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">视频</mt-tab-item>
        <mt-tab-item id="3">资讯</mt-tab-item>
        <mt-tab-item id="4">乡村振兴</mt-tab-item> 
         <mt-tab-item id="5">民俗</mt-tab-item>
        <mt-tab-item id="6">村镇</mt-tab-item> 
      </mt-navbar>
      <mt-swipe
        :auto="0"
        ref="swipe"
        @change="change"
        :defaultIndex="index"
        :showIndicators="false"
      >
        <mt-swipe-item  >
         <care/>
        </mt-swipe-item>
        <mt-swipe-item>
          <recommend/>
          <!-- <img src="@/assets/2.jpg" alt /> -->
        </mt-swipe-item>
        <mt-swipe-item>
          <videoPlayer />
          <!-- <img src="@/assets/3.jpg" alt /> -->
        </mt-swipe-item>
        <mt-swipe-item>
          <message/>
          <!-- <img src="@/assets/1.jpg" alt /> -->
        </mt-swipe-item>
        <mt-swipe-item>
          <message/>
          <!-- <img src="@/assets/2.jpg" alt /> -->
        </mt-swipe-item>
        <mt-swipe-item>
        <culture/>
          <!-- <img src="@/assets/1.jpg" alt /> -->
        </mt-swipe-item>
        <mt-swipe-item>
        <message/>
          <!-- <img src="@/assets/2.jpg" alt /> -->
        </mt-swipe-item>
        
      </mt-swipe>
    </div>
  </div>
</template>
<script>
import Care from '../components/Care'
import Recommend from '../components/Recommend'
import Message from '../components/Message'
import VideoPlayer from '../components/VideoPlayer'
import Culture from '../components/Culture'
export default {
  data() {
    return {
      selected: "1",
      index: 1
    };
  },
   components: {
     Care,
     Recommend,
     Message,
     VideoPlayer,
     Culture
 },
  mounted() {},
  methods: {
    change(i) {
      this.selected = "" + i;
    },
    getId() {
      this.index = this.selected - 0;
      this.$refs.swipe.swipeItemCreated();
    },
    
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
div.first {
  touch-action: none;
  .headerb{
    display: flex;
     background-color: red;
     height: 50px;
     h4{
       padding:0 10px;
       color: white;
       margin: 0;
       line-height: 50px;
     }
     div.mint-search{
      box-sizing: border-box;
       height: 50px;
       .mint-searchbar {
        background-color: red;
          }
      i {
        color: white;
      }
    }
  }
  .body1 {
    background-color: rgb(255, 255, 255);
   .mint-navbar .mint-tab-item.is-selected {
      border-bottom: 2px solid red;
      color: red;
    }
    padding-top: 50px;
    .mint-navbar {
      position: fixed;
      top: 50px;
      left: 0;
      right: 0;
    }
 

  }
  // .headerb {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   display: flex;
  //   background-color: red;
  //   height: 50px;
  //   h4 {
  //     font-size: 16px;
  //     color: white;
  //     width: 18%;
  //     margin-top: 0;
  //     line-height: 50px;
  //     padding-left: 10px;
  //   }
  //   div.mt-search {
  //     width: 80%;
  //     i {
  //       color: white;
  //     }
  //     input {
  //       color: white;
  //     }
  //   }
  // }
  // div.mint-searchbar {
  //   background-color: red;
  // }
  
  // .mt-search {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .body1 {
  //   background-color: aqua;
  //   padding-top: 50px;
  //   .mint-navbar {
  //     position: fixed;
  //     top: 50px;
  //     left: 0;
  //     right: 0;
  //   }
  //   
  //   .mint-swipe {
  //     box-sizing: border-box;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //       vertical-align: middle;
  //     }
  //   }
  // }
}
div.mint-searchbar-inner {
  background-color: rgb(236, 182, 182);
  width: 240px;
  border-radius: 20px;

  .mint-searchbar-core {
    background-color: rgb(236, 182, 182);
  }
  .mintui-search {
    font-size: 14px;
    color: white;
    padding-left: 10px;
  }
}

</style>
