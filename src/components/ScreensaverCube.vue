<template>
  <div class="csstransforms3d">
    <div class="cube-container">
      <div class="cube">
        <figure class="front"></figure>
        <figure class="back"></figure>
        <figure class="right"></figure>
        <figure class="left"></figure>
        <figure class="top"></figure>
        <figure class="bottom"></figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreensaverCube",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*cube*/

.csstransforms3d {
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-top: 12vh;
}
.csstransforms3d .cube-container {
  height: 200px;
  position: relative;
  width: 200px;
  perspective: 600px;
  perspective-origin: 50% 50%;
  transition: 0.3s all ease;
}
.csstransforms3d .cube {
  animation: spin 10s infinite linear;
  height: 100%;
  position: absolute;
  transition: 0.5s all ease-in-out;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(28deg);
  backface-visibility: visible;
  width: 100%;
}
.csstransforms3d .cube figure {
  box-sizing: border-box;
  margin: 0;
  display: block;
  height: 200px;
  position: absolute;
  width: 200px;
  font-size: 2em;
  line-height: 6em;
  text-align: center;
}
.csstransforms3d .cube .front,
.csstransforms3d .cube .back,
.csstransforms3d .cube .left,
.csstransforms3d .cube .right,
.csstransforms3d .cube .top,
.csstransforms3d .cube .bottom {
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: contain;
}
.csstransforms3d .cube .front {
  transform: translateZ(100px);
  background-image: url("../assets/Cube/welcome.jpg");
}
.csstransforms3d .cube .back {
  transform: rotateY(180deg) rotateX(0deg) translateZ(100px);
  background-image: url("../assets/Cube/vue.jpg");
}
.csstransforms3d .cube .left {
  transform: rotateY(-90deg) translateZ(100px);
  background-image: url("../assets/Cube/wordpress.jpg");
}
.csstransforms3d .cube .right {
  transform: rotateY(90deg) translateZ(100px);
  background-image: url("../assets/Cube/UxUi.jpg");
}
.csstransforms3d .cube .top {
  transform: rotateX(90deg) translateZ(100px);
  background-image: url("../assets/Cube/woocomm.jpg");
}
.csstransforms3d .cube .bottom {
  transform: rotateX(-90deg) rotateZ(-180deg) translateZ(100px);
  background-image: url("../assets/Cube/divi.jpg");
}
@keyframes spin {
  from {
    transform: rotateX(0) rotateY(0);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
/* mojacube */
</style>
