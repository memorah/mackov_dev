<template>
  <div class="">
    <LogoPhone />
    <AboutBackground />
    <BackButton />
    <ProfileText />
  </div>
</template>

<script>
import LogoPhone from "./LogoPhone.vue";

import AboutBackground from "./AboutBackground.vue";
import ProfileText from "./ProfileText.vue";
import BackButton from "./BackButton.vue";

export default {
  name: "ProfileContent",
  components: {
    LogoPhone,

    AboutBackground,
    ProfileText,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
