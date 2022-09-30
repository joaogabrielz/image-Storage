<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in getAllImages" :key="image.index" :src="image.link"/>
    </div>
    <div v-else>
      <h3>Please Log-in to get Started..</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default{
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    computed: mapGetters(['getAllImages', 'isLoggedIn']),
    created(){
      this.fetchImages()
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