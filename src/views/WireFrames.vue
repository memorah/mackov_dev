<template>
  <div class="">
    <BackButton />
    <WorkBackground />
    <CardCarusel />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import BackButton from "@/components/BackButton.vue";
import CardCarusel from "@/components/CardCarusel.vue";
export default {
  name: "WireFrames",
  components: {
    WorkBackground,
    BackButton,
    CardCarusel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
