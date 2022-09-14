<template>
  <div class="about">
    <BackButton />
    <ProfileContent />
  </div>
</template>
<script>
import ProfileContent from "../components/ProfileContent.vue";
import BackButton from "@/components/BackButton.vue";
// @ is an alias to /src

export default {
  components: {
    ProfileContent,
    BackButton,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Profile",
};
</script>
<style scoped></style>
