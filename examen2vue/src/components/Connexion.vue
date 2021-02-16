<template>
  <div>
    <button v-on:click="loggedIn = !loggedIn" class="btn btn-secondary">{{ connectedValidate() }}</button>
  </div>
</template>

<script>

export default {
  name: "Connexion",
  props: {
    msg: String,
  },
  data(){
    return{
      loggedIn: false,
    }
  },

  methods: {
    connectedValidate(){
      let connectedStatus = '';

      if (this.loggedIn === true) {
        connectedStatus = 'Déconnexion';
        this.$router.push('/utilisateur');
      } else {
        connectedStatus = 'Connexion';
        this.$router.push('/accueil');
      }
      return connectedStatus;
    }
  },

  created() {
    this.connectedValidate()
  }

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
  padding: 0;
  margin: 0;
}
</style>
