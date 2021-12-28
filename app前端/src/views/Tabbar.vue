<template>
  <!-- 底部tabbar -->
  <div class="tabbar" :style="`height:${$store.state.screenH}px`">
    <mt-tabbar v-model="active" @click.native="changeTab">
      <mt-tab-item id="sy" fixed>
        <img slot="icon" src="@/assets/select/首页.png" v-if="active==='sy'" />
        <img slot="icon" src="@/assets/icon/首页.png" v-else />
        首页
      </mt-tab-item>
      <mt-tab-item id="hd">
        <img slot="icon" src="@/assets/select/活动 旗帜 标记.png" v-if="active==='hd'" />
        <img slot="icon" src="@/assets/icon/活动 旗帜 标记.png" v-else />
        活动
      </mt-tab-item>
      <mt-tab-item id="load">
        <img slot="icon" src="@/assets/select/加.png" v-if="active==='load'" />
        <img slot="icon" src="@/assets/icon/加.png" v-else />
        特产
      </mt-tab-item>
      <mt-tab-item id="xx">
        <img slot="icon" src="@/assets/select/消息.png" v-if="active==='xx'" />
        <img slot="icon" src="@/assets/icon/消息.png" v-else />
        消息
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="@/assets/select/我的.png" v-if="active==='my'" />
        <img slot="icon" src="@/assets/icon/我的.png" v-else />
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="sy">
        <!-- 首页 -->
        <first />
      </mt-tab-container-item>
      <mt-tab-container-item id="hd">
       <activity />
      </mt-tab-container-item>
      <mt-tab-container-item id="load">
       <product />
      </mt-tab-container-item>
      <!-- <mt-tab-container-item id="load" @click.native="publish">
        <mt-popup v-model="popupVisible" position="bottom" style="height:200px;width:100%;">
          <mt-button>发布</mt-button>
          <mt-button  @click.native="close">关闭</mt-button>
          </mt-popup>
        
      </mt-tab-container-item> -->
      <mt-tab-container-item id="xx">
        <info />
      </mt-tab-container-item>
      <mt-tab-container-item id="my">
        <!-- 我的页面 -->
        <my />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import First from "../components/First";
import Info from "../components/Info";
import My from "../components/My";
import Activity  from "../components/Activity";
import Product  from "../components/Product";

export default {
  methods: {
    changeTab() {
      this.$store.commit("changeTab", this.active);
    },
    publish(){
        this.popupVisible=true
    },
    close(){
     this.$router.go('/tabbar');
    }
  },
  data() {
    return {
      popupVisible:false,
      active: this.$store.state.tabName
    };
  },
  components: {
    First,
    My,
    Info,
     Activity,
     Product
  },
  mounted(){
    this.publish()
  }
};
</script>

<style lang="less">
body {
  margin: 0;
}
div.tabbar {
  touch-action: none;
  .mint-tab-item-icon {
    width: 20px;
    height: 20px;
  }
  div.mint-popup .mint-popup-bottom{
    width: 100%;
    height: 200px;


  }
}
</style>
