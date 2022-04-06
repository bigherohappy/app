<template>
  <!-- 详情页 -->
  <div class="shopDetail" :style="`height:${$store.state.screenH-51}px`">
    <mt-header fixed title="详情" style="background-color: rgb(120, 230, 157)">
      <router-link to="/tabbar" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="body">
      <!-- <h3>hhhhhh</h3>
      <h3 v-html="obj.id"></h3> -->
      <img :src="obj.src" alt="" />
      <h3>{{ obj.price }}</h3>
      <!-- <aside v-html="obj.src"></aside>
      <div class="con" v-html="obj.content"></div> -->
    </div>
    <div>
      <mt-cell>{{obj.product}}</mt-cell>
      <mt-cell title="送至" value="销售(0)"></mt-cell>
      <mt-cell title="选择" to="//github.com" is-link value=""></mt-cell>
      <mt-cell title="评论(0)" to="//github.com" is-link value="">
      </mt-cell>
     
  
      <mt-cell title="标题" label="描述信息" is-link></mt-cell>
    </div>
    <mt-tabbar fixed >
  <mt-tab-item id="店铺">
    <img slot="icon" src="@/assets/icon/store.png">
    店铺
  </mt-tab-item>
  <mt-tab-item id="客服">
    <img slot="icon" src="@/assets/icon/客服.png">
    客服
  </mt-tab-item>
  <mt-tab-item id="关注">
    <img slot="icon" src="@/assets/icon/关注.png">
   关注
  </mt-tab-item>
  <mt-tab-item id="加入购物车">
    <img slot="icon" src="@/assets/icon/加入购物车.png">
    加入购物车
  </mt-tab-item>
  <!-- <div  @click="enterShop">
      <mt-tab-item id="立即购买" style="background:red;padding:20px;font-weight:600;font-size:20px;color: white;">
    立即购买
     </mt-tab-item>
  </div> -->
    <mt-tab-item id="立即购买" @click.native="enterShop" style="background:red;padding:20px;font-weight:600;font-size:20px;color: white;">
   
   立即购买
  </mt-tab-item>
</mt-tabbar>

  </div>
</template>
<script>
export default {
  name: "shopDetail",
  data() {
    return {
      obj: {},
      Url: this.$store.state.Url,
    };
  },
  mounted() {
    const params = { params: this.$route.params };
    this.$axios.get("getProductId", params).then((rs) => {
      const obj = rs.obj;
      obj.src = this.$store.state.Url + obj.smallSrc;
      obj.date = new Date(obj.updatedAt).toLocaleDateString();
      this.obj = obj;
    });
  },
  methods:{
    enterShop(){
      // alert('aa')
      this.$router.push('/shop')
    }
  }
};
</script>
<style lang="less" scoped>
.shopDetail {
  div.body {
    margin-top: 60px;
    text-align: center;
    padding: 0 10px;
    img {
      width: 350px;
    }
    h3 {
      color: #333;
    }
    aside {
      color: #999;
      font-size: 13px;
    }
    div.con {
      text-align: justify;
      text-indent: 2em;
      line-height: 1.8;
      color: #555;

      /deep/ img {
        width: 100%;
      }
    }
  }
}
</style>