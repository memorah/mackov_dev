<template>
  <div class="">
    <BackButton />
    <WorkBackground />
    <CardCarusel />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import WorkBackground from "@/components/WorkBackground.vue";
import BackButton from "@/components/BackButton.vue";
import CardCarusel from "@/components/CardCarusel.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
export default {
  name: "WireFrames",
  components: {
    WorkBackground,
    BackButton,
    CardCarusel,
    LockButton,
    LogoPhone,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
