<template>
  <div class="">
    <WorkItems />
    <BackButton />
  </div>
</template>
<script>
import WorkItems from "../components/WorkItems.vue";
import BackButton from "../components/BackButton.vue";

// @ is an alias to /src

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "/Work",
  components: {
    WorkItems,
    BackButton,
  },
};
</script>
<style scoped></style>
