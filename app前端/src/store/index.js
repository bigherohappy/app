import Vue from 'vue'
import Vuex from 'vuex'
import { rmSync } from 'fs';
const screenH=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight
const screenW=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Url:`http://localhost:1666/`,
    screenH,
    screenW,
    tabName:'sy',
    userInfo:null
  },
  getters:{
    getUserInfo(state){
      return state.userInfo
    }
  },
  mutations: {
    changeTab(state,tabName){
      state.tabName=tabName;
    },
    writeUserInfo(state,rs){
      rs.avatarUrl=state.Url+rs.avatarUrl;
      state.userInfo={avatarUrl:rs.avatarUrl,phone:rs.phone,username:rs.username}
    },
    logout(state){
      state.userInfo=null
    }


  },
  actions: {
  },
  modules: {
  }
})
