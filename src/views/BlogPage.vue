<template>
  <div class="">
    <LogoPhone />

    <BackButton />
    <BlogContent />
    <BlogBackground />
  </div>
</template>

<script>
import LogoPhone from "@/components/LogoPhone.vue";

import BlogBackground from "@/components/BlogBackground.vue";
import BlogContent from "@/components/BlogContent.vue";
import BackButton from "@/components/BackButton.vue";
export default {
  name: "BlogPage",
  components: {
    LogoPhone,

    BlogBackground,
    BlogContent,
    BackButton,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
