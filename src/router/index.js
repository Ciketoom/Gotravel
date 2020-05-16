import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Found from '@/pages/found/found'
import Add from '@/pages/add/add'
import Message from '@/pages/message/message'
import Userhome from '@/pages/userhome/userhome'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/found',
    name: 'Found',
    component: Found
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/userhome',
    name: 'Userhome',
    component: Userhome
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
