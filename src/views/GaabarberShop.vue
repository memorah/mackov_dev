<template>
  <div class="">
    <BackButton />
    <GaabarberContent />
    <WorkBackground />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import GaabarberContent from "@/components/GaabarberContent.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
export default {
  name: "GaabarberShop",
  components: {
    WorkBackground,
    GaabarberContent,
    BackButton,
    LockButton,
    LogoPhone,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
