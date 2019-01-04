import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '积分数据',
      // redirect:'/outsdata',
      component: ()=> import('@/views/RankData')
    },
    {
      path: '/article',
      name: '文章详情',
      component: ()=> import('@/views/Article')
    },
    {
      path: '/outs',
      name: '赛况',
      component: ()=> import('@/views/Outs')
    },
    {
      path: '/outsdata',
      name: '赛况数据',
      component: ()=> import('@/views/OutsData')
    },
    {
      path: '/outsnews',
      name: '赛况新闻',
      component: ()=> import('@/views/OutsNews')
    },
    {
      path: '/outsformation',
      name: '赛况阵容',
      component: ()=> import('@/views/OutsFormation')
    },
  ]
})
