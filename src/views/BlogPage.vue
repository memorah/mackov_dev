<template>
  <div class="">
    <BackButton />
    <BlogContent />
    <BlogBackground />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import BlogBackground from "@/components/BlogBackground.vue";
import BlogContent from "@/components/BlogContent.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
export default {
  name: "BlogPage",
  components: {
    BlogBackground,
    BlogContent,
    BackButton,
    LockButton,
    LogoPhone,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
