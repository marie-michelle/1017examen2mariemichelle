<template>
  <div class="about">
    <h1 class="m-4 p-4">{{ "home" | traduire(langue) }}</h1>
    <div class="p-2 m-2">
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script>
import { mixinTraduction } from "@/mixins/mixinTraduction";

export default {
  data() {
    return {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquid amet consequuntur dolorum enim eum ex, voluptatem. Consequatur
        dolores, voluptatum?`,
    };
  },
  mixins: [mixinTraduction],
};
</script>
