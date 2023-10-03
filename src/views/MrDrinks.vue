<template>
  <div class="">
    <BackButton />
    <MrdrinksContent />
    <TodoBackground />
    <LockButton />
    <LogoPhone />
  </div>
</template>

<script>
import TodoBackground from "@/components/TodoBackground.vue";
import MrdrinksContent from "@/components/MrdrinksContent.vue";
import BackButton from "@/components/BackButton.vue";
import LockButton from "@/components/LockButton.vue";
import LogoPhone from "@/components/LogoPhone.vue";
export default {
  name: "MrDrinks",
  components: {
    TodoBackground,
    MrdrinksContent,
    BackButton,
    LockButton,
    LogoPhone,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
