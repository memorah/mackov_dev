<template>
  <div class="">
    <GaabarberContent />
    <WorkBackground />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import GaabarberContent from "@/components/GaabarberContent.vue";

export default {
  name: "GaabarberShop",
  components: {
    WorkBackground,
    GaabarberContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
