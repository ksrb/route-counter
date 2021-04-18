<template>
  <router-link :to="`${home.path}`">Previous ({{ home.name }})</router-link>
</template>

<script lang="ts">
import { about, home } from "@/router";

import { defineComponent } from "vue";

const About = defineComponent({
  data() {
    return {
      home,
      about,
    };
  },
});

export default About;
</script>
