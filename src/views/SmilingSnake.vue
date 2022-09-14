<template>
  <div class="">
    <SmilingSnakeContent />
    <WorkBackground />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import SmilingSnakeContent from "@/components/SmilingSnakeContent.vue";

export default {
  name: "LanguageBakery",
  components: {
    WorkBackground,
    SmilingSnakeContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
