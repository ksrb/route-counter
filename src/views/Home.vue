<template>
  <router-link :to="`${about.path}`">Next ({{ about.name }})</router-link>
  <br />
</template>

<script lang="ts">
import { about, home } from "@/router";

import { defineComponent } from "vue";

const Home = defineComponent({
  data() {
    return {
      home,
      about,
    };
  },
});

export default Home;
</script>
