<template>
  <div>
    <h2>Please wait...</h2>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: 'AuthHandler',
    created() {
      this.finalizeLogin(window.location.hash);
    },
    methods: mapActions(['finalizeLogin'])
  }
</script>