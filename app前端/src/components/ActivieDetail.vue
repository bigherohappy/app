<template>
  <!-- 详情页 -->
  <div class="activeDetail" :style="`height:${$store.state.screenH-51}px`">
    <mt-header fixed title="详情" style="background-color: rgb(120, 230, 157)">
      <router-link to="/tabbar" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="body">
      <img :src="obj.src" alt="" />
      <div>
    <p>{{ obj.title }}</p>
      <p>规则：点击报名即可</p>
      <p>报名时间：{{obj.date}}</p>
      <p>活动内容：</p>
      </div>
      
     <div class="con" v-html="obj.content"></div>
     <div class="btn">
  <van-button plain hairline size="normal" :class="isWant==true?'want':''" @click="want" style="width:140px;" type="primary">想去</van-button>
<van-button plain hairline size="normal" :class="isGo==true?'go':''" @click="go" style="width:140px;" type="primary">已报名</van-button>

     </div>
   
      <!-- <h3>{{ obj.price }}</h3> -->
      <!-- <aside v-html="obj.src"></aside>
      <div class="con" v-html="obj.content"></div> -->
    </div>
  

  </div>
</template>
<script>
export default {
  name: "activeDetail",
  data() {
    return {
      obj: {},
      isWant:false,
      isGo:false,
      Url: this.$store.state.Url,
    };
  },
  mounted() {
    const params = { params: this.$route.params };
    this.$axios.get("getActiveId", params).then((rs) => {
      const obj = rs.obj;
       obj.content = obj.content.replace(
        /\{\{imgUrl\}\}/g,
        this.$store.state.Url
      );
      obj.src = this.$store.state.Url +'smallSrc/'+ obj.smallSrc;
      console.log(obj.src,'tup')
      obj.date = new Date(obj.updatedAt).toLocaleDateString();
      this.obj = obj;
    });
  },
  methods:{
    enterShop(){
      // alert('aa')
      this.$router.push('/shop')
    },
    go(){
      this.isGo=true
    },
    want(){
      this.isWant=true
    }
  }
};
</script>
<style lang="less" scoped>
.activeDetail {
  div.body {
    margin-top: 60px;
    padding: 0 10px;
    .btn{
      display: flex;
      margin-top: 20px;
      justify-content: space-around;
      .go{
        background: rgb(120, 230, 157);
         color: #fff;
        border: none;
        border-radius: 5px;
      }
      .want{
        background: pink;
        color: #fff;
        border: none;
        border-radius: 5px;

      }
    }
    img {
      width: 390px;
      border-radius: 10px;
    }
    h3 {
      color: #333;
    }
    aside {
      color: #999;
      font-size: 13px;
    }
    div.con {
      // text-align: justify;
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