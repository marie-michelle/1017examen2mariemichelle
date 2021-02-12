<template>
  <div id="app">
  <Entete>
    <router-link  v-for="route in routes" :key="route.path" :to="route.path">
      {{route.name}}
    </router-link>
  </Entete>
    <router-view class="content"/>
    <div class="footer"></div>
    <Pieddepage></Pieddepage>
  </div>
</template>


<script>
import Pieddepage from "@/components/Pieddepage";
import Entete from "@/components/Entete";

export default {

name: "App",
    props: {
  msg: String,
},
data(){
  return{
    loggedIn: false,

    routes: [
      {path: '/', name: 'Accueil', component: 'Accueil'},
      {path: '/utilisateur', name: 'Utilisateur', component: 'Utilisateur'},
      {path: '/projet', name: 'Projet', component: 'Projet'},
      {path: '/contact', name: 'Contact', component: 'Contact'},
    ],
  }
},
  components: { Pieddepage, Entete },
  // , ,
};

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
