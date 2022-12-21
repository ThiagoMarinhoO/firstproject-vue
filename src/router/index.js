import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chirps',
      name: 'ChirpsIndex',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/chirps/ChirpsIndex.vue')
    },
    {
      path: '/chirps/create',
      name: 'ChirpsCreate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/chirps/ChirpsCreate.vue')
    },
    {
      path: '/chirps/:id/edit',
      name: 'ChirpsEdit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/chirps/ChirpsEdit.vue'),
      props: true,
    },
  ]
})

export default router
