<template>
  <router-link to="/"><i class="glytch-lock gg-lock-lock"></i></router-link>
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
  position: absolute;
  bottom: 5%;
  left: 5%;
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

@media only screen and (max-width: 600px) {
  .gg-lock-lock {
    bottom: 2rem;
    right: 1rem;
  }
}
</style>
