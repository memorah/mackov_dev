<template>
  <div class="">
    <LanguageBakeryContent />
    <WorkBackground />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import LanguageBakeryContent from "@/components/LanguageBakeryContent.vue";

export default {
  name: "LanguageBakery",
  components: {
    WorkBackground,
    LanguageBakeryContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
