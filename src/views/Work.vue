<template>
  <div class="">
    <WorkItems />
    <BackButton />
    <LockButton />
    <LogoPhone />
  </div>
</template>
<script>
import WorkItems from "@/components/WorkItems.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";

// @ is an alias to /src

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Work",
  components: {
    WorkItems,
    BackButton,
    LockButton,
    LogoPhone,
  },
};
</script>
<style scoped></style>
