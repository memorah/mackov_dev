<template>
  <div class="">
    <LogoPhone />
    <BackButton />
    <SmilingSnakeContent />
    <WorkBackground />
  </div>
</template>

<script>
import LogoPhone from "@/components/LogoPhone.vue";

import WorkBackground from "@/components/WorkBackground.vue";
import SmilingSnakeContent from "@/components/SmilingSnakeContent.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "LanguageBakery",
  components: {
    LogoPhone,
    WorkBackground,
    SmilingSnakeContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
