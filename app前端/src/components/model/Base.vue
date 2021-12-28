<template>
  <div class="topmenu">
    <mt-navbar v-model="selected" @click.native="getId" fixed>
      <mt-tab-item id="0">选项一</mt-tab-item>
      <mt-tab-item id="1">选项二</mt-tab-item>
      <mt-tab-item id="2">选项三</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
      <mt-tab-item id="4">选项三</mt-tab-item>
    </mt-navbar>
    <mt-swipe
      :auto="0"
      ref="swipe"
      @change="change"
      :defaultIndex="index"
      :showIndicators="false"
    >
      <mt-swipe-item>
        <img src="@/assets/3.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/4.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/5.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/6.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="@/assets/7.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "0",
      index: 0,
    };
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
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
div.topmenu {
  touch-action: none;
  padding-top: 46px;
  box-sizing: border-box;
  .mint-swipe {
    padding-top: 5px;
    box-sizing: border-box;
    img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>
