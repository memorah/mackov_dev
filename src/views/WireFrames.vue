<template>
  <div class="">
    <BackButton />
    <WireframesContent />
    <WorkBackground />
    <CardCarusel />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import WireframesContent from "@/components/WireframesContent.vue";
import BackButton from "@/components/BackButton.vue";
import CardCarusel from "@/components/CardCarusel.vue";
export default {
  name: "WireFrames",
  components: {
    WorkBackground,
    WireframesContent,
    BackButton,
    CardCarusel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
