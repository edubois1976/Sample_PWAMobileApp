import Vue from 'vue'
import Router from 'vue-router'
import HomeVue from '@/components/HomeVue'
import DetailJourneeVue from '@/components/DetailJourneeVue'
import PostVue from '@/components/PostVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeVue',
      component: HomeVue
    },
    {
      path: '/detail',
      name: 'DetailJourneeVue',
      component: DetailJourneeVue
    },
    {
      path: '/post',
      name: 'PostVue',
      component: PostVue
    }
  ]
})
