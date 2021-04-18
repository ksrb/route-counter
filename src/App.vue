<template>
  <div id="nav">
    <router-link :to="`${home.path}`">Home</router-link> |
    <router-link :to="`${about.path}`">About</router-link>
  </div>
  <div>{{ $route.name }} Page</div>
  <div class="home">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <router-view />
  <Counter />
</template>

<script lang="ts">
import Counter from "@/components/Counter.vue";
import { about, home } from "@/router";

import { defineComponent } from "vue";

const App = defineComponent({
  data() {
    return {
      home,
      about,
    };
  },
  components: {
    Counter,
  },
});

export default App;
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
