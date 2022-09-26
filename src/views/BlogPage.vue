<template>
  <div class="">
    <BackButton />
    <BlogCarusel />

    <BlogBackground />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import BlogBackground from "@/components/BlogBackground.vue";

import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
import BlogCarusel from "@/components/BlogCarusel.vue";
export default {
  name: "BlogPage",
  components: {
    BlogBackground,

    BackButton,
    LockButton,
    LogoPhone,
    BlogCarusel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
