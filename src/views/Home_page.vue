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
  name: "/",
};
</script>
<style scoped></style>
