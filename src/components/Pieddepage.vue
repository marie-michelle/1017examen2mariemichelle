<template>
  <!-- Directive de bas de page -->
  <div>
    <div class="bgcolor green footer">
      <span v-footer></span>
      <router-link to="licence"><p>Licence</p></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pieddepage",
  directives: {
    footer: {
      inserted(el) {
        el.innerHTML =
          '© <a href="https://www.marie-michelle.com" target="_blank">marie-michelle.com</a> ' +
          new Date().getFullYear() +
          " Tous droits réservés." +
          el.innerHTML;
      },
    },
  },
};
</script>

<style scoped>
p {
  color: #42b983;
}
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
.green {
  color: #42b983;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
