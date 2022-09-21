<template>
  <div class="">
    <BackButton />
    <ProfileContent />
    <LockButton />
    <LogoPhone />
  </div>
</template>
<script>
import ProfileContent from "../components/ProfileContent.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
// @ is an alias to /src

export default {
  components: {
    ProfileContent,
    BackButton,
    LockButton,
    LogoPhone,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Profile",
};
</script>
<style scoped></style>
