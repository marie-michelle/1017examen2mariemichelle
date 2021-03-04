<template>
  <div class="bgcolor center">
    <h3>{{ "header" | traduire(langue) }}</h3>
    <div class="pl-5 ml-5">
      <slot></slot>
    </div>
    <!-- Menu traduction -->
    <div class="pl-5 ml-5">
      <!-- <Traduction></Traduction> -->
    </div>
    <!-- Bouton connection -->
    <div class="pl-5 ml-5">
      <Connexion></Connexion>
    </div>
  </div>
</template>

<script>
import Connexion from "@/components/Connexion";
// import Traduction from "@/components/Traduction";
import { mixinTraduction } from "@/mixins/mixinTraduction";

export default {
  name: "Entete",
  components: {
    // Traduction,
    Connexion,
  },
  mixins: [mixinTraduction],
};
</script>

<style scoped>
h3 {
  color: white;
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

.center {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
