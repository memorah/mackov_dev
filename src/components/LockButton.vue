<template>
  <router-link class="glytch-lock" to="/"
    ><i class="gg-lock-lock"></i
  ></router-link>
</template>

<script>
export default {
  name: "LockButton",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i.gg-lock-lock {
  --ggs: 1;
  color: rgba(255, 255, 255, 0.2);
}
.gg-lock-lock {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 12px;
  height: 10px;
  border: 2px solid;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  border-bottom: transparent;
  margin-top: -18px;
  margin-left: -2px;
}
.gg-lock-lock::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
}
.gg-lock-lock::after {
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 16px;
  height: 10px;
  border-radius: 2px;
  left: -4px;
  top: 10px;
}
.glytch-lock {
  position: absolute;
  bottom: 5%;
  right: 5%;
  background-size: 100%;
  transition: 0.3s ease-out;
  background-size: 100%;
  cursor: pointer;
  z-index: 1;
}

.glytch-lock:before {
  content: "";
  position: absolute;
  top: 0rem;
  right: 0rem;
  mix-blend-mode: hard-light;
  background-size: 100%;
  opacity: 1;
  transition: 0.3s ease-out;
}
.glytch-lock:hover:before {
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
  .glytch-lock,
  .glytch-lock:hover {
    bottom: 2rem;
    right: 1rem;
  }
  .glytch-lock:before,
  .gglytch-lock:hover:before {
    bottom: 0;
    right: 0;
  }
}
</style>
