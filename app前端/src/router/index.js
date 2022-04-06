import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import About from '../views/About.vue'
import Detail from '../views/Detail.vue'
import Detail1 from '../views/Detail1.vue'
import Tabbar from '../views/Tabbar.vue'
import Personal from '../components/Personal'
import MyImage from '../components/MyImage'
import Rigster from '../views/Rigster'
import MyInfo from '../components/MyInfo'
import Info from '../components/Info'
import MyFriend from '../components/MyFriend'
import MypublicWelfare from '../components/My/MypublicWelfare'
import MyProject from '../components/My/MyProject'
import MyCollection from '../components/My/MyCollection'
import MyDetail from '../components/My/MyDetail'
import ShopDetail from '../components/ShopDetail'
import Shop from '../components/Shop'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'Home', component: Home},
  {path: '/tabbar', component: Tabbar},
  {path: '/about',component: About},
  {path: '/search',component: Search},
  {path: '/personal',component: Personal},
  {path: '/detail/:id',component: Detail},
  {path: '/detail1/:id',component: Detail1},
  {path: '/rigster',component: Rigster},
  {path: '/myImage',component: MyImage},
  {path: '/myInfo',component: MyInfo},
  {path: '/info',component: Info},
  {path: '/myFriend',component: MyFriend},
  {path: '/mypublicWelfare',component: MypublicWelfare},
  {path: '/myCollection',component:MyCollection},
  {path: '/myProject',component: MyProject},
  {path: '/myDetail',component: MyDetail},
  {path: '/shopDetail/:id',component: ShopDetail},
  {path: '/shop',component: Shop},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
