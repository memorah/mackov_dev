<template>
  <router-link class="lock-position" to="/"
    ><i class="glytch-lock gg-lock-lock"></i
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
  color: rgba(255, 255, 255, 0.1);
}
i.gg-lock-lock:hover {
  --ggs: 1;
  color: rgba(255, 255, 255, 0.1);
}
.lock-position {
  position: absolute;
  bottom: 1rem;
  left: 5%;
  z-index: 1;
}
.gg-lock-lock {
  box-sizing: border-box;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 12px;
  height: 10px;
  border: 2px solid;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  border-bottom: transparent;
  margin: 12px 4px;
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
  background-color: rgba(255, 255, 255, 0.1);
  width: 16px;
  height: 10px;
  border-radius: 2px;
  left: -4px;
  top: 10px;
}

@media only screen and (max-width: 600px) {
  .gg-lock-lock {
    bottom: 2rem;
    left: 1rem;
  }
}
</style>
