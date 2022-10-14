<template>
  <div class="">
    <BackButton />
    <SmilingSnakeContent />
    <WorkBackground />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import SmilingSnakeContent from "@/components/SmilingSnakeContent.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
export default {
  name: "LanguageBakery",
  components: {
    WorkBackground,
    SmilingSnakeContent,
    BackButton,
    LockButton,
    LogoPhone,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
