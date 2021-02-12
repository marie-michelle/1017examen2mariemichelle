<template>
  <div class="bgcolor center">
    <h3>entete.</h3>
    <div class="pl-5 ml-5">
  <Connexion></Connexion>
    </div>
  </div>
</template>

<script>
import Connexion from "@/components/Connexion";
export default {
  name: "Entete",
  components: {
    Connexion
  },
  props: {
    msg: String,
  },
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
