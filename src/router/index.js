import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:Home,
      meta: {
        keepAlive: true, // 需要被缓存
        title:'首页'
      }
    },
    {
      path:"/list",
      component:List,
      meta:{title:'列表页'}

    },
    {
      path:"/add",
      component:Add,
      meta:{title:'添加'}
    },
    {
      path:"/collect",
      component:Collect,
      meta:{title:'收藏'}
    },
    {
      path:"/detail/:bid",
      component:Detail,
      name:'detail',
      meta:{title:'详情页'}
    },
    {
      path:"",
      component:Home
    },
    {
      path:"*",
      component:Home
    },
  ]
});
