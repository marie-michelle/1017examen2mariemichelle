<template>

  <div id="app">
    <Entete></Entete>
    <div id="nav" >
      <router-link to="/">Accueil</router-link> |
      <router-link to="/utilisateur">Utilisateur</router-link> |
      <router-link to="/projet">Projets</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view class="content"/>
    <div class="footer"></div>
    <Pieddepage></Pieddepage>
  </div>
</template>


<script>
import Pieddepage from "@/components/Pieddepage";
import Entete from "@/components/Entete";
export default {
  components: {Entete, Pieddepage}
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body, html{
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.a{
  background-color: #2c3e50;
}

.bgcolor{
  background-color: #2c3e50;
  height: 5vh;
}
.content {
  flex: 1;
}
.footer{
  flex-shrink: 0;
}

</style>
