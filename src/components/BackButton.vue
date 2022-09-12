<template>
  <a class="position-absolute glytch-cancel" @click="$router.go(-1)"></a>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.glytch-cancel {
  top: 5%;
  right: 5%;
  background-size: 100%;
  width: 1.5rem;
  height: 1.5rem;
  background: url("../assets/MainMenu/cancel.svg");
  transition: 0.3s ease-out;
  background-size: 100%;
  cursor: pointer;
  z-index: 10;
}

.glytch-cancel:before {
  content: "";
  position: absolute;
  top: 0rem;
  right: 0rem;
  width: 1.5rem;
  height: 1.5rem;
  mix-blend-mode: hard-light;
  background: url("../assets/MainMenu/cancel.svg");
  background-size: 100%;
  opacity: 1;
  transition: 0.3s ease-out;
}
.glytch-cancel:hover:before {
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
  .glytch-cancel,
  .glytch-cancel:hover {
    top: 2rem;
    right: 1rem;
  }
  .glytch-cancel:before,
  .gglytch-cancel:hover:before {
    top: 0;
    right: 0;
  }
}
</style>
