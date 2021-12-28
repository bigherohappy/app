<template>
  <div class="list">
    <mt-cell-swipe
      
      ><mt-cell is-link to="http://www.baidu.com">
        <div class="word">
          <h4 class="title">标题文字标题文字标题我的</h4>
          <div class="desc">
            描述信息描述信息描述信描述信息描述信息描述信描述信息描述信息描述信
          </div>
        </div>
        <div class="date">21-08-25</div>
      </mt-cell>
      <img slot="icon" src="@/assets/a.png" width="48" height="48" />
    </mt-cell-swipe>
    <mt-cell-swipe
      
      ><mt-cell is-link to="http://www.baidu.com">
        <div class="word">
          <h4 class="title">标题文字标题文字标题我的</h4>
          <div class="desc">
            描述信息描述信息描述信描述信息描述信息描述信描述信息描述信息描述信
          </div>
        </div>
        <div class="date">21-08-25</div>
      </mt-cell>
      <img slot="icon" src="@/assets/a.png" width="48" height="48" />
    </mt-cell-swipe>
    <mt-cell-swipe
      ><mt-cell is-link to="http://www.baidu.com">
        <div class="word">
          <h4 class="title">标题文字标题文字标题我的</h4>
          <div class="desc">
            描述信息描述信息描述信描述信息描述信息描述信描述信息描述信息描述信
          </div>
        </div>
        <div class="date">21-08-25</div>
      </mt-cell>
      <img slot="icon" src="@/assets/a.png" width="48" height="48" />
    </mt-cell-swipe>
    <mt-cell-swipe
   
      ><mt-cell is-link to="http://www.baidu.com">
        <div class="word">
          <h4 class="title">标题文字标题文字标题我的</h4>
          <div class="desc">
            描述信息描述信息描述信描述信息描述信息描述信描述信息描述信息描述信
          </div>
        </div>
        <div class="date">21-08-25</div>
      </mt-cell>
      <img slot="icon" src="@/assets/a.png" width="48" height="48" />
    </mt-cell-swipe>
  </div>
</template>
<script>
export default {
  methods: {
    fun() {
      console.log("del");
    },
    fun1() {
      console.log("noshow");
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less">
div.list {
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
        font-size: 12px;
        height: 40px;
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
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
</style>
