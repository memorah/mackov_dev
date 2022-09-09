<template>
  <!--Fingerprint -->
  <a class="position-fixed fingerprint" href="#" target="_blank"> </a>
</template>

<script>
export default {
  name: "Fingerprint",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fingerprint {
  bottom: 5rem;
  right: 0rem;
  background-size: 100%;
  width: 70px;
  height: 120px;
  background: url("../assets/fingerprint-raster.png");
  transition: 0.3s ease-out;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
}
/* in App.vue style */
</style>
