<template>
  <div class="container">
    <WorkItems />
    <WorkBackground />
  </div>
</template>
<script>
import WorkBackground from "../components/WorkBackground.vue";
import WorkItems from "../components/WorkItems.vue";

// @ is an alias to /src

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Work",

  components: {
    WorkBackground,
    WorkItems,
  },
};
</script>
<style scoped></style>
