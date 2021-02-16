<template>
  <div class="bgcolor green " v-footer></div>
</template>
<script>
export default {
  name: "Pieddepage",
  directives: {
    footer:{
      inserted: function (el) {
      el.innerHTML = '© <a href="https://www.marie-michelle.com" target="_blank">marie-michelle.com</a> ' + new Date().getFullYear() + ' Tous droits réservés.' + el.innerHTML;
      }
    }
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
.green{
  color: #42b983;
}
</style>
