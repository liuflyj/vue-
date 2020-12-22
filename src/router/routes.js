import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default [
  {
    path:'/',
    component:Home
  },
  {
    name:'login',
    path:'/login',
    component:Login,
    meta:{
      isHideFooter:true//Footer组件是否在此页面中隐藏 true为是
    }
  },
  {
    name:'register',
    path:'/register',
    component:Register,
    meta:{
      isHideFooter:true//Footer组件是否在此页面中隐藏 true为是
    }
  },
  {
    name:'search',
    path:'/search/:keyword',
    component:Search
  }
]