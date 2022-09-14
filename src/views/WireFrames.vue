<template>
  <div class="">
    <WireframesContent />
    <WorkBackground />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import WireframesContent from "@/components/WireframesContent.vue";
export default {
  name: "WireFrames",
  components: {
    WorkBackground,
    WireframesContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
