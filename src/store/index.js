//Vue2:
// import Vuex from 'vuex';
// import Vue from 'vue';
// import auth from './modules/auth'
// Vue.use(Vuex);
// export default new Vuex.Store({
//     modules: {
//         auth  //like auth: auth
//     }
// })

//Vue 3 approach:
import { createStore } from 'vuex';
import auth from './modules/auth'
import images from './modules/images'

export default createStore({
   modules: {
    auth,
    images
   },
})