import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入登录组件
import Login from '@/components/Login'
//引入主页面组件
import List from '@/components/List'
//引入关于页面
import About from '@/components/About'
//引入阅读页面
import readlist from '@/components/ReadList'
//引入标签筛选
import tags from "@/components/Tags"
export default new Router({
  routes: [
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/about',
      component:About
    },
    {
      path:"/readlist",
      component:readlist
    },
    {
      path:"/tags",
      component:tags
    },
    {path:'*',redirect:'/login'}
  ]
})
