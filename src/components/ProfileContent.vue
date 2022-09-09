<template>
  <div class="">
    <LogoPhone />
    <ProfileBackground />
    <BackButton />
    <ProfileText />
  </div>
</template>

<script>
import LogoPhone from "./LogoPhone.vue";

import ProfileBackground from "./ProfileBackground.vue";
import ProfileText from "./ProfileText.vue";
import BackButton from "./BackButton.vue";

export default {
  name: "ProfileContent",
  components: {
    LogoPhone,

    ProfileBackground,
    ProfileText,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
