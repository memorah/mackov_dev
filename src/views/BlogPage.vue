<template>
  <div class="">
    <BackButton />
    <BlogContent />
    <BlogBackground />
  </div>
</template>

<script>
import BlogBackground from "@/components/BlogBackground.vue";
import BlogContent from "@/components/BlogContent.vue";
import BackButton from "@/components/BackButton.vue";
export default {
  name: "BlogPage",
  components: {
    BlogBackground,
    BlogContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
