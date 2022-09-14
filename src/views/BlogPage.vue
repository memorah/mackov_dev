<template>
  <div class="">
    <BlogContent />
    <BlogBackground />
  </div>
</template>

<script>
import BlogBackground from "@/components/BlogBackground.vue";
import BlogContent from "@/components/BlogContent.vue";
export default {
  name: "BlogPage",
  components: {
    BlogBackground,
    BlogContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
