<template>
  <div>

    <h3 class="mb-4 pb-4">Projets</h3>
<ProjetTemplate class="flex" v-for="item in projets" :key="item.projet"><span >{{item.projet}}</span></ProjetTemplate>


  </div>
</template>

<script>
import ProjetTemplate from "@/components/Projets-template";

export default {
  data() {
    return{
      projets: [
        { projet: 'React.js - Projet "Netflix"'},
        { projet: 'Angular 2 - Projet Forfait Voyage'},
        { projet: 'Vue 2 - Projet Exercices Vue'}
      ]
     }
  },
  name: "Projet",
  components: {
    ProjetTemplate
  }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.flex {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin: 1em;
}
</style>
