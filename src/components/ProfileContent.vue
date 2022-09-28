<template>
  <div class="">
    <ProfileBackground />
    <ProfileText />
  </div>
</template>

<script>
import ProfileBackground from "./ProfileBackground.vue";
import ProfileText from "./ProfileText.vue";
export default {
  name: "ProfileContent",
  components: {
    ProfileBackground,
    ProfileText,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
