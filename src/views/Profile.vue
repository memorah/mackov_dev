<template>
  <div class="about">
    <ProfileContent />
  </div>
</template>
<script>
import ProfileContent from "../components/ProfileContent.vue";

// @ is an alias to /src

export default {
  components: {
    ProfileContent,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Profile",
};
</script>
<style scoped></style>
