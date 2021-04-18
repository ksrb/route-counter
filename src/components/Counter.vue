<template>
  <div class="hello">
    You've visited the {{ $route.name }} page
    {{ $route.name === about.name ? aboutCount : homeCount }} times
  </div>
</template>

<script lang="ts">
import { about, home } from "@/router";
import { defineComponent } from "vue";

const Counter = defineComponent({
  data() {
    return {
      about,
      home,
      aboutCount: 0,
      homeCount: 0,
    };
  },

  watch: {
    $route(to) {
      switch (to.name) {
        case about.name:
          this.aboutCount++;
          break;
        case home.name:
          this.homeCount++;
          break;
      }
    },
  },
});

export default Counter;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
