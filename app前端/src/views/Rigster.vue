<template>
  <div class="rigster">
   <mt-header title="注册" class="myhead" fixed>
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <form autocomplete="off" @submit.prevent="submit" >
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        :attr="{ pattern: '\\S{6,8}', required: true }"
        v-model="obj.username"
      >
        <b>*</b>
      </mt-field>
      <mt-field
        label="邮箱"
        placeholder="请输入邮箱"
        :attr="{ pattern: '\\w+@\\w+\\.(\\w+\\.)?[a-z]+', required: true }"
        type="email"
        v-model="obj.email"
      >
        <b>*</b>
      </mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        :attr="{ pattern: '\\S{3,6}', required: true }"
        type="password"
        v-model="obj.password" autocomplete="password"
      >
        <b>*</b>
      </mt-field>
      <mt-field
        label="确认密码"
        placeholder="请输入确认密码" autocomplete="password"
        :attr="{ pattern: '\\S{3,6}', required: true }"
        type="password"
        v-model="repassword"
      >
        <b>*</b>
      </mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        :attr="{ pattern: '1\\d{10}', required: true }"
        type="tel"
        v-model="obj.phone"
      >
        <b>*</b>
      </mt-field>

      <div class="btn">
        <button>注册</button>
        <button type="reset">重置</button>
      </div>
    </form>
  </div>
</template>
<script>
   

import { Toast } from "mint-ui";
import Qs from "qs";
export default {
  methods: {
    submit() {
      if (this.repassword === this.obj.password) {
        this.obj.avatarUrl = "头像.jpg";
        console.log(this.obj);
        const params = Qs.stringify(this.obj);
        this.$axios.post("insertUser", params).then((rs) => {
         if(rs){
          delete rs.password;
          console.log(rs);
          this.$store.commit('writeUserInfo',rs);
          this.$router.go(-1)
         }else{
           Toast('手机号码重复，请重新输入')
         }
        });
      } else {
        Toast("两次密码不一致！");
      }
      return false;
    },
     goback() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
      obj: {
        username: "",
        email: "",
        phone: "",
        password: ""
      },
      repassword: ""
    };
  }
};
</script>

<style lang="less">
div.rigster {
     padding-top: 100px;
  .mint-cell-wrapper {
    background-size: 100% 1px;
  }
  .myhead{
    // background-color:rgb(150, 30, 30);
    background-color: rgb(120, 230, 157);
  }
  b {
    display: inline-block;
    // color: rgb(150, 30, 30);      
    color:  rgb(120, 230, 157);
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
      // background-color: rgb(150, 30, 30);
    background-color: rgb(120, 230, 157);

      color: white;
      &:last-child {
        background-color: transparent;
        background-color: #555;
      }
    }
  }
}
</style>
