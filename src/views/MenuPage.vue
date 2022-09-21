<template>
  <div class="">
    <MenuItems />
    <LockButton />
    <LogoPhone />
  </div>
</template>
<script>
import MenuItems from "../components/MenuItems.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
// @ is an alias to /src

export default {
  components: {
    MenuItems,
    LockButton,
    LogoPhone,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Menu",
};
</script>
<style scoped>
.glytch-cancel {
  display: none;
}
</style>
