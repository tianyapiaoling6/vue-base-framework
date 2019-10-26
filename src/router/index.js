import Vue from 'vue'
import Router from 'vue-router'
import MainContent from "../pages/MainContent";
import Home from "../pages/Home";

//Event组件部分
import EventCreate from "../pages/Event/Create"
import EventList from "../pages/Event/List"

//Account部分
//import AccountCharge from "../pages/Account/Charge"
//import AccountInfo from "../pages/Account/Info"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta:{
        name: '首页',
      },
      component: MainContent,   //这表示主路由，只有一个

      children:[    //内容区的所有路由都在这下面写
        {
          path: '/',
          component: Home,
        }
      ]
    },

    {
      path: '/event',
      meta: {
        name:'活动'   //与首页是同一等级的
      },
      component: MainContent,   //此处的mainContent仍然是主路由，即为左侧导航栏的一级目录，其它的二级为子路由
      children: [
        {
          path: '/',
          redirect:'create',
          meta:{
            hidden:true
          }
        },
        {
          path: 'create',
          component: EventCreate,
          meta:{
            name:'创建'
          }
        },
        {
          path: 'list',
          component: EventList,
          meta:{
            name:'管理'
          }
        }
      ]
    },

    /*{
      path: '/account',
      meta: {
        name:'账户'   //与首页是同一等级的
      },
      component: MainContent,   //此处的mainContent仍然是主路由，即为左侧导航栏的一级目录，其它的二级为子路由
      children: [
        {
          path: '/',
          redirect:'charge',
          meta:{
            hidden:true
          }
        },
        {
          path: 'charge',
          component: AccountCharge,
          meta:{
            name:'账户充值'
          }
        },
        {
          path: 'info',
          component: AccountInfo,
          meta:{
            name:'账户信息'
          }
        }
      ]
    }*/
  ]
})
