<template>
<!-- 详情页 -->
  <div class="detail1">
    <mt-header fixed title="详情" style="background-color:blue">
      <router-link to="/tabbar" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="body">
      <h3 v-html="obj.title"></h3>
      <aside v-html="obj.date"></aside>
      <div class="con" v-html="obj.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail1",
  data() {
    return {
      obj: {}
    };
  },
  mounted() {
    const params = { params: this.$route.params };
    this.$axios.get("getArtId1", params).then(rs => {
      const obj = rs.obj;
      obj.content = obj.content.replace(
        /\{\{imgUrl\}\}/g,
        this.$store.state.Url
      );
      obj.date = new Date(obj.updatedAt).toLocaleDateString();
      this.obj = obj;
    });
  }
};
</script>
<style lang="less" scoped>
.detail1 {
  div.body {
    margin-top: 60px;
    text-align: center;
    padding: 0 10px;
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