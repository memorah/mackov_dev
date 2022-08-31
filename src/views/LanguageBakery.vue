<template>
  <div class="">
    <LogoPhone />
    <BackButton />
    <LanguageBakeryContent />
    <WorkBackground />
  </div>
</template>

<script>
import LogoPhone from "@/components/LogoPhone.vue";
import WorkBackground from "@/components/WorkBackground.vue";
import LanguageBakeryContent from "@/components/LanguageBakeryContent.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "LanguageBakery",
  components: {
    LogoPhone,
    WorkBackground,
    LanguageBakeryContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
