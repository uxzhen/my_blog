import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import books from '@/components/Books'
import message from '@/components/Message'
import share from '@/components/Share'
import about from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path:'/books',
      name:'books',
      component:books
    },
    {
      path:'/message',
      name:'message',
      component:message
    },
    {
      path:'/share',
      name:"share",
      component:share
    },
    {
      path:'/about',
      name:"about",
      component:about
    },
    {
      path:'/',
      redirect:'index'
    }
  ]
})
