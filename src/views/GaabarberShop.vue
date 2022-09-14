<template>
  <div class="">
    <BackButton />
    <GaabarberContent />
    <WorkBackground />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import GaabarberContent from "@/components/GaabarberContent.vue";
import BackButton from "@/components/BackButton.vue";
export default {
  name: "GaabarberShop",
  components: {
    WorkBackground,
    GaabarberContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
