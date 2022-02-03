<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>


<style>
@import './assets/stylesheet.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
