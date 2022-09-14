<template>
  <div class="">
    <ProfileBackground />
    <BackButton />
    <ProfileText />
  </div>
</template>

<script>
import ProfileBackground from "./ProfileBackground.vue";
import ProfileText from "./ProfileText.vue";
import BackButton from "./BackButton.vue";
export default {
  name: "ProfileContent",
  components: {
    ProfileBackground,
    ProfileText,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
