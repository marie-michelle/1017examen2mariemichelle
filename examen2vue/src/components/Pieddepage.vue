<template>
  <div class="bgcolor"><small class="green"> <a href="https://www.marie-michelle.com" target="_blank">marie-michelle.com</a> Tous droits réservés.</small></div>
</template>
<script>document.write(new Date().getFullYear())</script>
<script>
export default {
  name: "Pieddepage",
  props: {
    msg: String,
  },
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
.green{
  color: #42b983;
}
</style>
