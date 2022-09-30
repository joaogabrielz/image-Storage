<template>
  <div>
    <div v-if="getAllFavorites" class="image-container">
      <img 
        v-for="favorite in getAllFavorites" 
        :key="favorite.id" :src="favorite.images[0].link"
      />
    </div>
    <div v-else>
      <h3>You haven't Favorites yet</h3>
    </div>
      
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default{
    name: 'FavoritesList',
    methods: mapActions(['fetchFavorites']),
    computed: mapGetters(['getAllFavorites']),
    mounted(){
      this.fetchFavorites();
    }
  }
</script>

<style scoped>
  .image-container{
    display: grid;
    column-count: 3;
    column-gap: 0; 
  }
  img{
    max-width: 100%;
    padding: 5px;
  }
</style>