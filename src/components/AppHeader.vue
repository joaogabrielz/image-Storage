<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item"> 
        Image Storage 
    </router-link>
   
    <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
            <router-link to="/favorites" class="item">Favorites</router-link>
            <router-link to="/" class="item">Gallery</router-link>
            <router-link to="/upload" class="item">Upload</router-link>
            <a class="item" @click="logout">Logout</a>
        </div>
        <a v-else href="#" class="ui item" @click="login">
            Login
        </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "AppHeader",
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn'])
};
</script>

<style scoped>
    .horizontal{
        display: flex;
    }
</style>