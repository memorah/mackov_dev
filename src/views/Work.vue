<template>
  <div class="container">
    <LogoPhone />
    <BackButton />
    <WorkItems />
    <WorkBackground />
  </div>
</template>
<script>
import WorkBackground from "../components/WorkBackground.vue";
import WorkItems from "../components/WorkItems.vue";
import BackButton from "../components/BackButton.vue";

// @ is an alias to /src

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Work",

  components: {
    WorkBackground,
    WorkItems,
    BackButton,
  },
};
</script>
<style scoped></style>
