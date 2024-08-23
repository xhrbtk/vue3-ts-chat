import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login', 
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/',
    redirect: '/chat',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/index.vue'),
    children:[
      {
        path: '/test',
        name: 'test',
        component: () => import('@/pages/test.vue'),
      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/pages/chatPage.vue'),
      },
      {
        path: '/chat/write',
        name: 'write',
        component: () => import('@/pages/chatWrite.vue'),
      },
      {
        path: '/dataManage',
        name: 'data',
        component: () => import('@/pages/dataManage/index.vue'),
      },
      {
        path: '/dataManage/importData',
        name: 'importData',
        component: () => import('@/pages/dataManage/importData.vue'),     
      },
      {
        path: '/dataManage/tableDetail',
        name: 'tableDetail',
        component: () => import('@/pages/dataManage/tableDetail.vue'),     
      },
      {
        path: '/dataManage/graphDetail',
        name: 'graphDetail',
        component: () => import('@/pages/dataManage/graphDetail.vue'),     
      },
      {
        path: '/dataManage/documentDetail',
        name: 'documentDetail',
        component: () => import('@/pages/dataManage/documentDetail.vue'),     
      },
      {
        path: '/model',
        name: 'model',
        component: () => import('@/pages/modelManage/index.vue'),
      },
      {
        path: '/flow',
        name: 'flow',
        component: () => import('@/pages/flowManage/index.vue'),
      },
      {
        path: '/chat/task',
        name: 'task',
        component: () => import('@/pages/chatTask.vue'),
      },
      {
        path: '/chat/collection',
        name: 'collection',
        component: () => import('@/pages/chatCollection.vue'),
      },
    
    ]
  },
  {
    path: '/vueUse',
    name: 'vueUse',
    meta: {
      title: '测试鼠标',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/vueUse.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
    

export default router;
    




