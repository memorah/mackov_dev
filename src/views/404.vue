<template>
  <div class="">
    <MenuItems />
  </div>
</template>
<script>
import MenuItems from "../components/MenuItems.vue";
// @ is an alias to /src

export default {
  components: {
    MenuItems,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "404",
};
</script>
<style scoped>
.glytch-cancel {
  display: none;
}
</style>
