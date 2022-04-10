<template>
  <!-- 我的页面 -->
  <div class="mylogin">
    <div class="my" v-if="isLogin" :style="loginCss">
      <div class="header">
        <mt-cell-swipe>
          <mt-cell is-link to="/personal">
            <div class="word" style="width:143px;">
              <h4 class="title" v-html="userInfo.username"></h4>
              <div class="desc">
                <p>
                  <span>0</span>关注
                  <span>0</span>粉丝
                </p>
              </div>
            </div>
            <div class="Personal">个人主页</div>
          </mt-cell>
          <!-- <mt-button class="logout" @click.native="logout" style="font-size:14px;">注销</mt-button> -->
          <img slot="icon" :src="userInfo.avatarUrl" width="80" height="80" />
        </mt-cell-swipe>
      </div>
      <div class="one">
        <div class="onez">
          <p>
            我的贡献值
            <span>50</span>
          </p>
        </div>
        <div class="onet">
          <div class="one1">
            <p>支持公益</p>
          </div>
          <div class="one1">
            <p>兑换好物</p>
          </div>
          <div class="one1">
            <p>支持家乡</p>
          </div>
        </div>
      </div>
      <div class="two">
        <img slot="icon" :src="`${this.Url}images/乡.jpg`" />
      </div>
      <div class="three">
        <div class="three1p">
          <div class="three1 pub" @click="enteractive">
            <img :src="`${this.Url}images/1/组织.png`" width="40" height="40" alt />
            <p>我的消息</p>
          </div>
          <div class="three2 pub" @click="enteractive">
            <img :src="`${this.Url}images/1/活动.png`" width="40" height="40" alt />
            <p>我的活动</p>
          </div>
          <div class="three3 pub" @click="enteractive">
            <img :src="`${this.Url}images/1/我的作品.png`" width="40" height="40" alt />
            <p>我的作品</p>
          </div>
          <div class="three4 pub" @click="entermyCollection">
            <img :src="`${this.Url}images/1/收藏.png`" width="40" height="40" alt />
            <p>我的收藏</p>
          </div>
        </div>
        <div class="three2p">
          <div class="three5 pub" @click="entermyFriend">
            <img :src="`${this.Url}images/1/公益.png`" width="40" height="40" alt />
            <p>发起公益</p>
          </div>
          <div class="three6 pub" @click="entermyCollection">
            <img :src="`${this.Url}images/1/我的公益.png`" width="40" height="40" alt />
            <p>我的公益</p>
          </div>
          <div class="three7 pub" @click="entermyProject">
            <img :src="`${this.Url}images/1/提现.png`" width="40" height="40" alt />
            <p>项目提现</p>
          </div>
          <div class="three8 pub" @click="entermyFriend">
            <img :src="`${this.Url}images/1/邀请.png`" width="40" height="40" alt />
            <p>邀请好友</p>
          </div>
        </div>
      </div>
      <div class="four">
        <mt-cell title="关于我们" is-link></mt-cell>
        <mt-cell title="留言" is-link></mt-cell>
        <mt-button size="large" type="danger" class="logout" @click.native="logout">注销</mt-button>
      </div>
    </div>
    <div class="form" :style="appCss" v-else>
      <div class="myform">
        <h2>请登录</h2>
        <form @submit.prevent="submit">
          <!-- <mt-field label="账号"> -->
          <div class="phone">
            <label>
              账号
              <input
                placeholder="请输入账号"
                :attr="{ pattern: '1\\d{10}', required: true }"
                v-model="obj.phone"
              />
            </label>
          </div>


          <div class="pw">
            <label>
              密码:
              <input
                placeholder="请输入密码"
                autocomplete
                :attr="{ pattern: '\\S{3,6}', required: true }"
                type="password"
                v-model="obj.password"
              />
            </label>
          </div>

          <div class="btn">
            <button class="submitBtn">提交</button>
            <button type="reset">重置</button>
          </div>
        </form>

        <div class="rigster">
          <router-link to="/rigster">新用户请点击此次注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
import { Toast } from "mint-ui";
export default {
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
  methods: {
    submit() {
      const params = Qs.stringify(this.obj);
      this.$axios.post("login", params).then(rs => {
        if (rs) {
          this.$store.commit("writeUserInfo", rs);
          this.userInfo = {
            username: rs.username,
            avatarUrl: rs.avatarUrl
          };
          this.isLogin = true;
        } else {
          Toast("账号或者密码有误");
        }
      });
      return false;
    },
    logout() {
      this.$store.commit("logout");
      this.isLogin = false;
    },
    enterimage() {
      this.$router.push("/myImage");
    },
    enteractive() {
      this.$router.push("/myInfo");
    },
    entermyFriend() {
      this.$router.push("/myFriend");
    },
    entermyCollection() {
      this.$router.push("/myCollection");
    },
    entermypublicWelfare() {
      this.$router.push("/mypublicWelfare");
    },
    entermyProject() {
      this.$router.push("/myProject");
    }
  },
  data() {
    return {
      appCss: `background-image:url('${this.$store.state.Url}images/back.jpg');
      background-size:100% ${this.$store.state.screenH}px;height:${this.$store.state.screenH}px`,
      loginCss: `background-size:100% ${this.$store.state.screenH}px;
      height:${this.$store.state.screenH - 51}px`,
      obj: {
        phone: "",
        password: ""
      },
      isLogin: false,
      Url: this.$store.state.Url,
      userInfo: {
        avatarUrl: "",
        username: ""
      }
    };
  }
};
</script>

<style scoped lang='less'>
.mylogin {
  margin: 0;
  padding: 0;
  .form {
    position: relative;
    div.myform {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 300px;
      border-radius: 10px;
      background: rgba(7, 7, 7, 0.1);
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
      // background-color: rgba(255, 255, 255, 0.9);
      margin: 0px auto;
      .mint-cell {
        background: transparent;
      }
      input {
        outline: none;
        border: none;
        background: transparent;
      }
      .phone {
        margin: 20px;
        border-bottom: 1px solid white;
      }
      .pw {
        margin: 20px;
        border-bottom: 1px solid white;
      }
      label {
        color: rgb(255, 254, 254);
        // padding: 30px;
      }
      h2 {
        text-align: center;
        // margin: 20px auto;
        letter-spacing: 5px;
        color: rgb(255, 254, 254);
        padding-top: 30px;
      }
      div.rigster {
        text-align: center;
        margin-top: 30px;
        padding-top: 0;
        a,
        a:visited {
          text-decoration: none;
          color: red;
        }
      }
      .mint-cell-wrapper {
        background-size: 100% 1px;
      }
      b {
        display: inline-block;
        color: red;
        padding-top: 5px;
      }
      div.btn {
        display: flex;
        justify-content: space-around;
        button {
          padding: 8px 25px;
          margin: 10px;
          border-radius: 4px;
          border: none;
          outline: none;
          // background-color: rgb(165, 40, 35);
              background-color: rgb(120, 230, 157);
          color: white;
          &:last-child {
            background-color: transparent;
            background-color: #555;
          }
        }
      }
    }
  }

  

  .my {
    background-color: white;
    .header {
      div.word {
        height: 100px;
      }

      .mint-button--normal {
        padding: 0;
      }
      height: 100px;
      background-color: white;
      .Personal {
        width: 40px;
        // background-color: rgb(230, 114, 114);
              background-color: rgb(120, 230, 157);

        padding: 5px 2px;
        border-radius: 10px;
        color: white;
      }
      img {
        padding: 10px;
        border-radius: 50%;
      }
    }

    .one {
      height: 120px;
      background-color: rgb(240, 240, 240);
      margin: 10px;
      border-radius: 10px;
      .onez {
        padding: 10px 0 0 10px;
        p {
          margin: 0;
        }
        span {
          font-size: 18px;
        }
      }
      .onet {
        display: flex;
        .one1 {
          width: 30%;
          margin-top: 10px;
          margin-left: 2%;
          height: 60px;
          border-radius: 15px;
          color: white;
          p {
            text-align: center;
          }
              background-color: rgb(120, 230, 157);

          // background-color: rgb(230, 114, 114);
        }
      }
    }
    .two {
      height: 90px;
      img {
        width: 100%;
      }
    }
    .three {
      height: 135px;
      background-color: rgb(240, 240, 240);
      margin: 10px;
      border-radius: 10px;

      .three1p {
        display: flex;
        height: 60px;
        width: 100%;
        .pub {
          padding-top: 5px;
          align-items: center;
          text-align: center;
          height: 60px;
          width: 25%;
          font-size: 12px;
          p {
            margin: 0;
            color: #999;
          }
        }
      }
      .three2p {
        display: flex;
        height: 60px;
        width: 100%;

        .pub {
          padding: 5px 0;
          align-items: center;
          text-align: center;
          height: 60px;
          width: 25%;
          font-size: 12px;
          p {
            margin: 0;
            color: #999;
          }
        }
      }
    }
    .four {
      height: 80px;

      a.mint-cell {
        min-height: 40px;
      }
    }
  }
}
input:-internal-autofill-selected {
      background-color: none ;
}
</style>
