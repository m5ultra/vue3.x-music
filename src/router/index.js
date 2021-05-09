import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: 'recommend',
        name: 'Recommend',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend.vue'),
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/search.vue'),
      },
      {
        path: 'singer',
        name: 'Singer',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/singer.vue'),
      },
      {
        path: 'top-list',
        name: 'TopList',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/top-list.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
