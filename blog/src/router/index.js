/*
 * @Description:
 * @Author: charles
 * @Date: 2020-10-26 16:39:14
 * @LastEditors: Huang.zq
 * @LastEditTime: 2021-09-18 09:56:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 防止路由重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Home.vue')
  },{
    path: '/project',
    name: 'Project',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Project.vue')
  },{
    path: '/apply',
    name: 'Apply',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Apply.vue')
  },{
    path: '/applyQuery',
    name: 'ApplyQuery',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/ApplyQuery.vue')
  },{
    path: '/applySuccess',
    name: 'ApplySuccess',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/ApplySuccess.vue')
  }, {
    path: '/article',
    name: 'Article',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Article.vue')
  },  {
    path: '/contact',
    name: 'Contact',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/Contact.vue')
  }, {
    path: '/list',
    name: 'List',
    meta: {
      scrollToTop: true
    },
    component: () => import('../views/List.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
