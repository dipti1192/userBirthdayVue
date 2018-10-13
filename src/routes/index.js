import Vue from 'vue'
import Family from '@/components/Family.vue'
import Birthday from '@/components/Birthday.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import Memories from '@/components/memories.vue'
import Friends from '@/components/Friends.vue'
import About from '@/components/About.vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Birthday',
      component: Birthday
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/family',
      name: 'Family',
      component: Family
    },
    {
      path: '/memories',
      name: 'Memories',
      component: Memories
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    }
  ],
  mode:'history',
})