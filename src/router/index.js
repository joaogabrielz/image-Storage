import { createRouter, createWebHistory } from 'vue-router';
import AuthHandler from '../components/AuthHandler.vue'
import ImageList from '../components/ImageList.vue';
import UploadVue from '../components/UploadForm.vue';
import FavoritesList from '../components/FavoritesList.vue';

const routes = [
  {
    path: '/',
    name: 'ImageList',
    component: ImageList
  },
  {
    path: '/oauth2/callback',
    name: 'AuthHandler',
    component: AuthHandler
  },
  {
    path: '/upload',
    component: UploadVue
  },
  {
    path: '/favorites',
    component: FavoritesList
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;