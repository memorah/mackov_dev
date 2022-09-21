<template>
  <router-link to="/Menu" class="screen-intro">
    <ScreensaverTime />
    <ScreensaverCube />

    <div class="start-btn s-2-bottom">
      <span class="unlock-text">Get started</span>
      <div class="navigation-bar"></div>
    </div>
  </router-link>
</template>
<script>
import ScreensaverTime from "../components/ScreensaverTime.vue";
import ScreensaverCube from "../components/ScreensaverCube.vue";

// @ is an alias to /src

export default {
  components: {
    ScreensaverTime,
    ScreensaverCube,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/",
};
</script>
<style scoped></style>
