<template>
  <!-- Profil avec option traduction -->
  <div>
    <!-- Compétences -->
    <h1 class="m-4 p-4">{{ "user" | traduire(langue) }}</h1>
    <h3>{{ "skills" | traduire(langue) }}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem
      dolorem hic illum, qui quisquam rerum similique! Maxime, perspiciatis,
      quo.
    </p>
    <!-- Formations -->
    <h3>{{ "education" | traduire(langue) }}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fugit
      nam praesentium totam voluptatem voluptatibus.
    </p>
    <!-- Langues -->
    <h3>{{ "languages" | traduire(langue) }}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam
      cupiditate deserunt eos ex ipsum, odit officia vel velit. Accusantium
      deleniti exercitationem illo iusto necessitatibus pariatur saepe ullam
      vitae voluptatem!
    </p>
    <!-- Expériences -->
    <h3>{{ "experiences" | traduire(langue) }}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, et.</p>
    <!-- Contact -->
    <h3>{{ "contact" | traduire(langue) }}</h3>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
import { mixinTraduction } from "@/mixins/mixinTraduction";

export default {
  name: "Profil",
  mixins: [mixinTraduction],
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
</style>
