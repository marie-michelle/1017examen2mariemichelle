<template>
  <div>

    <h1 class="m-4 p-4">{{ 'projects' | traduire(langue)}}</h1>
<ProjetTemplate class="flex" v-for="item in projets" :key="item.projet">{{item.projet}}</ProjetTemplate>


  </div>
</template>

<script>
import ProjetTemplate from "@/components/Projets-template";
import {mixinTraduction} from "@/mixins/mixinTraduction";

export default {
  mixins: [mixinTraduction],
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
