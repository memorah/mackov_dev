<template>
  <div class="">
    <BackButton />
    <TodoContent />
    <TodoBackground />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import TodoBackground from "@/components/TodoBackground.vue";
import TodoContent from "@/components/TodoContent.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
export default {
  name: "LanguageBakery",
  components: {
    TodoBackground,
    TodoContent,
    BackButton,
    LockButton,
    LogoPhone,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
