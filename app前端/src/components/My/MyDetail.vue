<template>
  <!-- 详情页 -->
  <div class="myDetail" :style="`height:${$store.state.screenH-51}px`">
    <mt-header fixed title="详情" style="background-color: rgb(120, 230, 157)">
      <router-link to="/tabbar" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="body">
      <h3>{{ obj.id }}</h3>
      
      <h3>hhhhhhhh</h3>
      <img :src="obj.src" alt="">
       <!-- <div class="con" v-html="obj.content"></div> -->
    </div>
    
  

  </div>
</template>
<script>
export default {
  name: "myDetail",
  data() {
    return {
      obj: {},
      Url: this.$store.state.Url,
      list:['洞鹿风光','美景','美食','洞鹿风光','美景','美食','洞鹿风光','美景','美食']
    };
  },
  mounted() {
    const params = { params: this.$route.params };
    this.$axios.get("getArtId1", params).then((rs) => {
      const obj = rs.obj;
      
       obj.content = obj.content.replace(
        /\{\{imgUrl\}\}/g,
        this.$store.state.Url
      );
      obj.src = this.$store.state.Url +'smallSrc/'+ obj.smallSrc;
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
.myDetail {
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