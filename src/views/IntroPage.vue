<template>
  <div class="about">
    <div class="screen-2">
      <section>
        <i class="gg-lock-unlock"></i>
        <ScreensaverTime />
        <ScreensaverCube />
      </section>
      <div class="s-2-bottom">
        <span class="unlock-text">Swipe up to open</span>
        <div class="navigation-bar"></div>
      </div>
    </div>
  </div>
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
  name: "/HomePage",
};
</script>
<style scoped></style>
