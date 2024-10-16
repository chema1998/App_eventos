<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>


export default {
  name:'app',
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.$store.dispatch('fetchUser');
    }
  }
};

</script>

<style>
/* Estilos globales */
</style>

