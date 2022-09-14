<template>
  <div class="">
    <BackButton />
    <LanguageBakeryContent />
    <WorkBackground />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import LanguageBakeryContent from "@/components/LanguageBakeryContent.vue";
import BackButton from "@/components/BackButton.vue";
export default {
  name: "LanguageBakery",
  components: {
    WorkBackground,
    LanguageBakeryContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
