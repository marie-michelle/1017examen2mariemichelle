<template>
  <div id="app">
    <Entete></Entete>
    <Accueil></Accueil>
    <Pieddepage></Pieddepage>
  </div>
</template>

<script>
import Accueil from "./components/Accueil.vue";
import Entete from "./components/Entete.vue";
import Pieddepage from "./components/Pieddepage.vue";

export default {
  name: "App",
  components: {
    Accueil,
    Pieddepage,
    Entete,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
