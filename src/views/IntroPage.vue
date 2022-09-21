<template>
  <div class="about">
    <router-link to="/Menu">
      <div class="screen-2">
        <section>
          <i class="gg-lock-unlock"></i>
          <ScreensaverTime />
          <ScreensaverCube />
        </section>

        <div class="s-2-bottom">
          <span class="unlock-text">Get started. </span>
          <div class="navigation-bar"></div>
        </div>
      </div>
    </router-link>
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
  name: "/",
};
</script>
<style scoped></style>
