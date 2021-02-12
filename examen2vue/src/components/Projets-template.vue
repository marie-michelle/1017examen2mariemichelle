<template>
  <div>

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="chatTropChou" alt="Card image cat">
      <div class="card-body">
        <p class="card-text"><slot></slot></p>
      </div>
    </div>

  </div>
</template>

<script>
import chatTropChou from'../assets/img/chat-trop-chou.jpg';

export default {
  data() {
    return{
      chatTropChou: chatTropChou,
      projets: [
        'React.js - Projet "Netflix"',
        'Angular 2 - Projet Forfait Voyage',
        'Vue 2 - Projet Exercices Vue'
      ]
    }
  },
  name: "ProjetTemplate",
  props: {

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
.card{
  width: 100%;
  max-width: 300px;
  min-width: 200px;
  height: 250px;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
}
.card:hover {
  height: 270px;
  width: 105px;
}
</style>
