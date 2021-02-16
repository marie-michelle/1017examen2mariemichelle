<template>
  <table>

    <ul>
      <li v-for="item in menuAnglais" :key="item.id+item.name" class="green">
        <router-link :to="{path:item.name}" >{{ 'language' | traduire(langue)}}</router-link>
      </li>
    </ul>
  </table>
</template>

<script>
import {mixinTraduction} from "@/mixins/mixinTraduction";

export default {
  mixins: [mixinTraduction],
  name: 'Traduction',
  data() {
    return{
      menuAnglais: [
        {name: 'home', id:1},
        {name: 'user', id:2},
        {name: 'project', id:3},
        {name: 'contact', id:4},
      ]
    }
  }
}

</script>

<style scoped>
p {
  color: white;
}
a {
  color: #42b983;
}
.green {
  green: #42b983;
}
.center {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
