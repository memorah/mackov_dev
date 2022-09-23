<template>
  <router-link class="glytch-logo" to="/Menu"></router-link>
</template>

<script>
export default {
  name: "LogoPhone",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.glytch-logo {
  top: 5%;
  left: 5%;
  position: absolute;
  background-size: 100%;
  width: 2rem;
  height: 2rem;
  background: url("../assets/logo.svg");
  transition: 0.3s ease-out;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: 1;
}

.glytch-logo:before {
  content: "";
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 2rem;
  height: 2rem;
  mix-blend-mode: hard-light;
  background: url("../assets/logo.svg");
  background-size: 100%;
  opacity: 1;
  transition: 0.3s ease-out;
  background-repeat: no-repeat;
}
.glytch-logo:hover:before {
  animation: animate 0.9s linear infinite;
}

@keyframes animate {
  0% {
    background-color: transparent;
    background-position: 0 0;
    filter: hue-rotate(0deg);
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  10% {
    background-color: transparent;
    background-position: 5px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  20% {
    background-color: transparent;
    background-position: -5px 0;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  30% {
    background-color: transparent;
    background-position: 3px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  40% {
    background-color: transparent;
    background-position: 0 5px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  50% {
    background-position: 0 -3px;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    background-color: transparent;
  }
  55% {
    background-position: 0 -3px;
    background-color: darkgray;
  }

  60% {
    background-color: transparent;
    background-position: 0 2px;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  70% {
    background-color: transparent;
    background-position: 0 -1px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  80% {
    background-color: transparent;
    background-position: -2px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  81% {
    background-color: transparent;
    background-position: 2px 0;
    filter: drop-shadow(3px 5px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
  100% {
    background-color: transparent;
    background-position: 0 0;
    filter: hue-rotate(380deg);
    filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
}
@media only screen and (max-width: 600px) {
  .glytch-logo {
    top: 2rem;
    left: 1rem;
    width: 35px;
    height: 35px;
  }

  .glytch-logo:before {
    top: 0rem;
    left: 0rem;
    width: 35px;
    height: 35px;
  }
  .glytch-logo:hover {
    top: 2rem;
    left: 1rem;
    width: 35px;
    height: 35px;
  }
  .glytch-logo:hover:before {
    top: 0rem;
    left: 0rem;
    width: 35px;
    height: 35px;
  }
}
@media (hover: none) {
  .glytch-logo:hover:before {
    -webkit-animation: none;
    animation: none;
  }
}
/* in App.vue style */
</style>
