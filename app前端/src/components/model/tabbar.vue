<template>
  <div class="app" :style="`height:${$store.state.screenH}px`">
    <mt-tabbar v-model="active">
      <mt-tab-item id="外卖" fixed>
        <img slot="icon" src="@/assets/a1.png"  v-if="active==='外卖'"/>
        <img slot="icon" src="@/assets/a.png" v-else/>
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="@/assets/b1.png"  v-if="active==='订单'"/>
        <img slot="icon" src="@/assets/b.png" v-else/>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="@/assets/c1.png"  v-if="active==='发现'"/>
        <img slot="icon" src="@/assets/c.png" v-else/>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="@/assets/d1.png"  v-if="active==='我的'"/>
        <img slot="icon" src="@/assets/d.png" v-else/>
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="">
        <mt-cell v-for="n in 10" title="tab-container 1" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" title="tab-container 2" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 7" title="tab-container 4" :key="n"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      active:'外卖'
    };
  },
};
</script>

<style lang="less">
body {
  margin: 0;
}
div.tabbar {
  touch-action: none;
  .mint-tab-item-icon{
    width: 20px;
    height: 20px;
  }
}
</style>
