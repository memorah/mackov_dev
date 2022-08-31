<template>
  <div class="">
    <LogoPhone />
    <MenuItems />
  </div>
</template>
<script>
import LogoPhone from "../components/LogoPhone.vue";
import MenuItems from "../components/MenuItems.vue";
// @ is an alias to /src

export default {
  components: {
    LogoPhone,
    MenuItems,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/",
};
</script>
<style scoped></style>
