<template>
  <div class="">
    <BackButton />
    <SharkaniContent />
    <WorkBackground />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import SharkaniContent from "@/components/SharkaniContent.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
export default {
  name: "SHARKANI",
  components: {
    WorkBackground,
    SharkaniContent,
    BackButton,
    LockButton,
    LogoPhone,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
