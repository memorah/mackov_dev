<template>
  <div class="position-absolute main-bg">
    <span class="" data-text="ABOUT">DVLP</span>
  </div>
</template>

<script>
export default {
  name: "BackgroundHome",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* in App.vue style */
.main-bg-desktop {
  width: 100%;
  height: 100%;

  font-family: Anurati !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #252525;
  text-shadow: 0px 7px 10px #000000;
  top: 0;
  left: 0;
  z-index: 0;
  padding-top: 0;
  font-size: 12rem;
  line-height: 12rem;
}
.main-bg-desktop span {
  padding-top: 2vw;
}
</style>
