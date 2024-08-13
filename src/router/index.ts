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
        path: '/chat/data',
        name: 'data',
        component: () => import('@/pages/chatData.vue'),
      },
      {
        path: '/chat/model',
        name: 'model',
        component: () => import('@/pages/chatModel.vue'),
      },
      {
        path: '/chat/flow',
        name: 'flow',
        component: () => import('@/pages/chatFlow.vue'),
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
    




