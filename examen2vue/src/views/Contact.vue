<template>
  <div class="pb-5 mb-5">

          <div class="jumbotron sizing">
            <h1 class="display-4 white">Contact</h1>
            <p class="lead white">Pour nous écrire, veuillez remplir le formulaire.</p>

            <form @submit="checkForm" method="post">

              <div v-if="errors.length">
              <ul>
                <li v-for="error in errors" :key="error.field" class="red">{{ error }}</li>
              </ul>
              </div>

              <div class="form-group">
                <label for="InputName"></label>
                <input v-model="firstname" type="text" class="form-control" id="InputName" placeholder="Prénom"><br>

                <label for="InputLastName"></label>
                <input v-model="lastname" type="text" class="form-control" id="InputLastName" placeholder="Nom"><br>

                <label for="InputEmail"></label>
                <input v-model="email" type="email" class="form-control" id="InputEmail" placeholder="Courriel"><br>

              </div>

              <select class="custom-select">
                <option selected>Choisir un sujet...</option>
                <option v-for="item in categories" :key="item.categorie">{{ item.categorie }}</option>
              </select>
              <br><br><br>
              <div class="form-group">
                <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Votre message..."></textarea>
              </div>

              <button type="submit" class="btn btn-secondary">Soumettre</button>
            </form>

        </div>
      </div>


</template>


<script>

export default {
  data() {
    return{
      errors: [],
      firstname: null,
      lastname: null,
      email: null,
      message: null,

      categories: [
        { categorie: 'Information'},
        { categorie: 'Soumission'},
        { categorie: 'Soutien technique'},
        { categorie: 'Autre'},
      ],
  }
  },
  methods:{
    checkForm: function(e) {
      this.errors = [];

      if (!this.firstname) {
        this.errors.push('Votre prénom est requis.');
      }
      if (!this.lastname) {
        this.errors.push('Votre nom est requis.');
      }
      if (!this.email) {
        this.errors.push('Votre courriel est requis.');
      }
      if (!this.message) {
        this.errors.push('Un message est requis.');
      }
      else {
        this.errors.push('Votre message à bien été soumis');
      }
      e.preventDefault();
    },
    validEmail: function(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  name: "Contact",
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
.sizing{
  width: 80vh;
  margin: auto;
}
.green {
  color: #008a4d;
}

.red {
  color: indianred;
}
</style>
