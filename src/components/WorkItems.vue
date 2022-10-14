<template>
  <div class="container">
    <div class="row">
      <router-link to="/Work/LanguageBakery">
        <div class="icon-div animation-v1">
          <div class="card card1"></div>
          <h2>Language<br />bakery</h2>
        </div></router-link
      >
      <router-link to="/Work/SmilingSnake">
        <div class="icon-div animation-v1">
          <div class="card card2"></div>
          <h2>Smailing<br />Snake</h2>
        </div></router-link
      >
      <router-link to="/Work/GAABarberShop">
        <div class="icon-div animation-v1">
          <div class="card card3"></div>
          <h2>GAA<br />Barbershop</h2>
        </div></router-link
      >
      <router-link to="/Work/WireFrames">
        <div class="icon-div animation-v1">
          <div class="card card4"></div>
          <h2>Wire<br />frames</h2>
        </div></router-link
      >
      <router-link to="/Work/ToDo">
        <div class="icon-div animation-v1">
          <div class="card card5"></div>
          <h2>Vuetify<br />ToDo App</h2>
        </div></router-link
      >
      <WorkBackground />
    </div>
  </div>
</template>

<script>
import WorkBackground from "../components/WorkBackground.vue";
export default {
  name: "WorkItems",
  components: {
    WorkBackground,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-top: 0.2rem;
}
.card1 {
  background-image: url("../assets/languagebakerylogo.png");
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card2 {
  background-image: url("../assets/smilingsnakelogo.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card3 {
  background-image: url("../assets/gaalogo.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card4 {
  background-image: url("../assets/WF-icon.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card5 {
  background-image: url("../assets/todo-icon.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
</style>
