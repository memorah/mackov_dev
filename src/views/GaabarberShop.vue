<template>
  <div class="">
    <LogoPhone />
    <BackButton />
    <GaabarberContent />
    <WorkBackground />
  </div>
</template>

<script>
import LogoPhone from "@/components/LogoPhone.vue";

import WorkBackground from "@/components/WorkBackground.vue";
import GaabarberContent from "@/components/GaabarberContent.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "GaabarberShop",
  components: {
    LogoPhone,
    WorkBackground,
    GaabarberContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
