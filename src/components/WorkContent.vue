<template>
  <LogoPhone />

  <BackButton />
  <WorkItems />
  <WorkBackground />
</template>

<script>
import LogoPhone from "./LogoPhone.vue";
import WorkBackground from "./WorkBackground.vue";
import WorkItems from "./WorkItems.vue";
import BackButton from "./BackButton.vue";

export default {
  name: "WorkContent",
  components: {
    LogoPhone,
    WorkBackground,
    WorkItems,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
