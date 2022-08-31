<template>
  <div class="about">
    <WorkContent />
  </div>
</template>
<script>
import WorkContent from "../components/WorkContent.vue";

// @ is an alias to /src

export default {
  components: {
    WorkContent,
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Work",
};
</script>
<style scoped></style>
