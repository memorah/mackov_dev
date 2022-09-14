<template>
  <div class="">
    <BackButton />
    <WireframesContent />
    <WorkBackground />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import WireframesContent from "@/components/WireframesContent.vue";
import BackButton from "@/components/BackButton.vue";
export default {
  name: "WireFrames",
  components: {
    WorkBackground,
    WireframesContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
