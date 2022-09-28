<template>
  <router-link to="/Menu">
    <Error404Cube />
    <Error404Background />
  </router-link>
</template>
<script>
// @ is an alias to /src
import Error404Background from "@/components/Error404Background.vue";
import Error404Cube from "@/components/Error404Cube.vue";
export default {
  components: { Error404Background, Error404Cube },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "404",
};
</script>
<style scoped>
.glytch-cancel {
  display: none;
}
</style>
