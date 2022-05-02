<template>
<!-- 详情页 -->
  <div class="detail">
    <mt-header fixed title="详情" style="background-color:rgb(120, 230, 157)">
      <router-link to="/tabbar" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="body">
      
      <h4>{{title}}</h4>
      
      <p>{{date}}</p>
      <p>{{content}}</p>
      <!-- <h3 v-html="obj.title"></h3> -->
      <!-- <aside v-html="obj.date"></aside> -->
      <!-- <div class="con" v-html="obj.content"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      // obj: {},
      title:'',
      content:'',
      date:''
    };
  },
  mounted() {
    const params = { params: this.$route.params };
    this.$axios.get("getNoticeId", params).then(rs => {
      // const obj = rs.obj;
      const title = rs.title;
      const content = rs.content;
      const date = new Date(rs.updatedAt).toLocaleDateString();
      console.log(rs,'obj数据');
      console.log(title,'title');
      console.log(content,'content');
      console.log(date,'date');

      
      // obj.content = obj.content.replace(
      //   /\{\{imgUrl\}\}/g,
      //   this.$store.state.Url
      // );
      // obj.date = new Date(obj.updatedAt).toLocaleDateString();
      this.title = title ;
      this.content = content ;
      this.date =  date;
    });
  }
};
</script>
<style lang="less" scoped>
.detail {
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