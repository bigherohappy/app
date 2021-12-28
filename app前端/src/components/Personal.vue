<template>
  <!-- My页面中的个人主页 -->
  <div class="personal">
    <mt-header title="个人主页">
      <router-link to="/tabbar" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="one">
      <img :src="`${this.Url}images/头像.jpg`" />
    </div>
    <div class="two">
      <mt-cell-swipe>
        <div class="word" style="width:240px;">
          <h4 class="title" v-html="userInfo.username"></h4>
          <div>
            <p>
              <span>0</span>关注
              <span>0</span>粉丝
            </p>
          </div>
        </div>
        <img slot="icon" :src="`${this.Url}images/头像.jpg`" width="90" height="90" />
      </mt-cell-swipe>
    </div>
    <div class="three">
      <img :src="`${this.Url}images/无.jpg`" />
    </div>
  </div>
</template>
<script>
export default {
  name: "personal",
  mounted() {
    const userInfo = this.$store.state.userInfo;
    if (userInfo) {
      // userInfo.avatarUrl = this.$store.state.Url + userInfo.avatarUrl;
      this.userInfo = {
        username: userInfo.username,
        avatarUrl: userInfo.avatarUrl
      };
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  
  },
  data() {
    return {
      Url: this.$store.state.Url,
        isLogin: true,
      userInfo: {
        avatarUrl: "",
        username: ""
      }
    };
  },
  methods: {
    submit() {
      const params = Qs.stringify(this.obj);
      this.$axios.post("login", params).then(rs => {
        if (rs) {
          this.$store.commit("writeUserInfo", rs);
          this.userInfo = {
            username: rs.username,
            avatarUrl:rs.avatarUrl
          };
          this.isLogin = true;
        }
      })
    },
    
    
   
  },
};
</script>
<style scoped lang='less'>
.personal {
  .mint-header {
    height: 50px;
    z-index: 20;
    background-color: rgb(230, 114, 114);
  }
  .one {
    height: 260px;
    opacity: 0.7;
    z-index: 10;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .two {
    margin-top: -100px;
    height: 120px;
    background-color: rgb(250, 250, 248);
    img {
      padding: 5px;
      border-radius: 50%;
    }
  }
  .three {
    height: 100px;
    img {
      width: 100%;
    }
  }
}
</style>