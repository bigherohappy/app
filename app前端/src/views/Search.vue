<template>
<!-- 搜索页面 -->
  <div class="search" :style="`height:${$store.state.screenH-51}px`">
    <div class="headerb">
      <h4 @click="goback">返回</h4>
      <router-link to="/search">
        <mt-search v-model="value" @keyup.native.enter="search" placeholder="请输入搜索内容"></mt-search>
      </router-link>
    </div>
    <ul>
      <li class="list" v-for="el in arr" :key="el.id">
        <mt-cell-swipe>
          <mt-cell is-link :to="`/detail/${el.id}`">
            <div class="word">
              <h4 class="title" v-html="el.title"></h4>
              <div class="desc" v-html="el.content"></div>
            </div>
            <div class="date" v-html="el.date"></div>
          </mt-cell>
          <img slot="icon" :src="el.src" width="48" height="48" />
        </mt-cell-swipe>
      </li>
    </ul>
  </div>
</template>
<script>
import Care from "../components/Care";
import Recommend from "../components/Recommend";
export default {
  name: "search",
  data() {
    return {
      value: "",
      arr: [],
      selected: "1",
      index: 1
    };
  },
  components: {
    Care,
    Recommend
  },
  mounted() {},
  methods: {
    search() {
      this.$axios.get("getSearchData1?keyword=" + this.value).then((arr) => {
        arr = arr.map(el => {
          el.date = new Date(el.updatedAt).toLocaleDateString();
          el.src = this.$store.state.Url + "smallSrc/" + el.smallSrc;
          return el;
        });
        this.arr = arr;
        console.log(arr);
      });
    },

    change(i) {
      this.selected = "" + i;
    },
    getId() {
      this.index = this.selected - 0;
      this.$refs.swipe.swipeItemCreated();
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
div.search {
  touch-action: none;
  .headerb {
    display: flex;
    background-color: red;
    height: 50px;
    h4 {
      padding: 0 10px;
      color: white;
      margin: 0;
      line-height: 50px;
    }
    div.mint-search {
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
      .mint-cell-value.is-link {
        display: flex;
        div.word {
          flex: 7;
          h4.title {
            color: #666;
            margin: 10px 0 5px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            font-size: 15px;
          }
          div.desc {
            font-size: 14px;
            height: 40px;
            line-height: 25px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
        div.date {
          flex: 2;
          font-size: 12px;
          text-align: right;
          margin-right: 8px;
        }
      }
    }
  }
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
