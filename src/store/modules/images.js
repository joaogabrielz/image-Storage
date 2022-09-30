import api from '../../api/imgur.js'
import router from '../../router/index.js';

const state = {
  images: [],
  favorites: []
};

const getters = {
  getAllImages: state => state.images,
  getAllFavorites: state => state.favorites
};

const actions = {
  async fetchImages({ rootState, commit }){
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({rootState}, images){
    //Get acess token
      const { token } = rootState.auth;

    //call our api module to do the upload
      await api.uploadImages(images, token);

    //redirect our user to imageLIst component
      router.push('/');
  },
  async fetchFavorites({ commit }){
    const response = await api.fetchFavorites();
    commit('setFavorites', response.data.data)
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  setFavorites: (state, favorites) => {
    state.favorites = favorites;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}