import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import About from '../views/About.vue'
import Detail from '../views/Detail.vue'
import MessageDt from '../views/MessageDt.vue'
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
import MyCalender from '../components/My/MyCalender'
import Natural from '../components/My/Natural'
import Food from '../components/My/Food'
import Traffic from '../components/My/Traffic'
import MyDetail from '../components/My/MyDetail'
import MyDynamic from '../components/My/MyDynamic'
import ShopDetail from '../components/ShopDetail'
import ActivieDetail from '../components/ActivieDetail'
import Shop from '../components/Shop'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'Home', component: Home},
  {path: '/tabbar', component: Tabbar},
  {path: '/about',component: About},
  {path: '/search',component: Search},
  {path: '/personal',component: Personal},
  {path: '/detail/:id',component: Detail},
  {path: '/message/:id',component: MessageDt},
  {path: '/detail1/:id',component: Detail1},
  {path: '/rigster',component: Rigster},
  {path: '/myImage',component: MyImage},
  {path: '/myInfo',component: MyInfo},
  {path: '/info',component: Info},
  {path: '/myFriend',component: MyFriend},
  {path: '/mypublicWelfare',component: MypublicWelfare},
  {path: '/myCollection',component:MyCollection},
  {path: '/myCalender',component:MyCalender},
  {path: '/natural',component:Natural},
  {path: '/food',component:Food},
  {path: '/traffic',component:Traffic},
  {path: '/myProject',component: MyProject},
  {path: '/myDetail/:id',component: MyDetail},
  {path: '/myDynamic',component: MyDynamic},
  {path: '/shopDetail/:id',component: ShopDetail},
  {path: '/activieDetail/:id',component: ActivieDetail},
  {path: '/shop',component: Shop},
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
