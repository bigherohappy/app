import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import 'default-passive-events'
 //import './mintui'
 import Mint from 'mint-ui'
 import 'mint-ui/lib/style.min.css'
 import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
 Vue.use(Mint)
Vue.config.productionTip = false

const instance = Axios.create({
  baseURL: 'http://localhost:1666/users/',
  timeout: 5000
})
instance.interceptors.response.use(res => { //响应拦截
  // console.log(res);
  return res.data;
});
Vue.prototype.$axios = instance

//------------------video组件---------------
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)



new Vue({
 
  router,
  store,
  render: h => h(App)
}).$mount('#app')





