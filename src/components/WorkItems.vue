<template>
  <div class="row animation-v1">
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
  </div>
</template>

<script>
export default {
  name: "WorkItems",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card1 {
  background-image: url("../assets/languagebakerylogo.png");
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.card2 {
  background-image: url("../assets/smilingsnakelogo.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.card3 {
  background-image: url("../assets/gaalogo.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
</style>
