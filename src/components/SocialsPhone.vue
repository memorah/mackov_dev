<template>
  <!--Git -->
  <a
    class="position-absolute glytch-git"
    href="www.linkedin.com/in/filip-mackov"
    target="_blank"
  >
  </a>

  <!--linkedin -->

  <a
    class="position-absolute glytch"
    href="www.linkedin.com/in/filip-mackov"
    target="_blank"
  ></a>
</template>

<script>
export default {
  name: "Socials",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.glytch-git {
  bottom: 2rem;
  right: 2rem;
  background-size: 100%;
  width: 35px;
  height: 35px;
  background: url("../assets/github.svg");
  transition: 0.3s ease-out;
  background-size: 100%;
}
.glytch-git:hover {
  width: 30px;
  height: 30px;
}
.glytch-git:before {
  content: "";
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  width: 35px;
  height: 35px;
  mix-blend-mode: hard-light;
  background: url("../assets/github.svg");
  background-size: 100%;
  opacity: 1;
  transition: 0.3s ease-out;
}
.glytch-git:hover:before {
  width: 30px;
  height: 30px;
  animation: animate 0.9s linear infinite;
}
.glytch {
  bottom: 2rem;
  left: 2rem;
  background-size: 100%;
  width: 35px;
  height: 35px;
  background: url("../assets/linkedin.svg");
  transition: 0.3s ease-out;
  background-size: 100%;
}
.glytch:hover {
  width: 30px;
  height: 30px;
}
.glytch:before {
  content: "";
  position: absolute;
  bottom: 0rem;
  left: 0rem;
  width: 35px;
  height: 35px;
  mix-blend-mode: hard-light;
  background: url("../assets/linkedin.svg");
  background-size: 100%;
  opacity: 1;
  transition: 0.3s ease-out;
}
.glytch:hover:before {
  width: 30px;
  height: 30px;
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
  .glytch {
    bottom: 1rem;
    left: 1rem;
  }
  .glytch-git {
    bottom: 1rem;
    right: 1rem;
  }
}
/* in App.vue style */
</style>
