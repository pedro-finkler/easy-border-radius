<template>
  <div id="app">
    <borderRadius msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import borderRadius from "./components/borderRadius.vue";

export default {
  name: "App",
  components: {
    borderRadius
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}

body {
  overflow: hidden;
  background: rgba(2, 0, 36, 1) 0%;
  height: 100%;
  width: 100%;
}
</style>
