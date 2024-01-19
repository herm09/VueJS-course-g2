import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonnagesView from '../views/PersonnagesView.vue'
import CompteurView from '../views/CompteurView.vue'
import MainView from '../views/MainView.vue'
import PlaylistView from '../views/PlaylistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personnages',
      name: 'personnages',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PersonnagesView
    },
    {
      path: '/compteur',
      name: 'compteur',
      component: CompteurView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistView
    }
  ]
})

export default router
