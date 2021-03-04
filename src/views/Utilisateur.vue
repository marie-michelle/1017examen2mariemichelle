<template>
  <div class="home">
    <Profil></Profil>
  </div>
</template>

<script>

import Profil from "@/components/Profil";
import {mixinTraduction} from "@/mixins/mixinTraduction";
export default {
  mixins: [mixinTraduction],
  name: 'Utilisateur',
  components: {
    Profil

  }
}
</script>
