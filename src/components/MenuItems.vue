<template>
  <div class="container">
    <div class="row animation-v1">
      <router-link to="/Profile">
        <div class="icon-div">
          <div class="card card1"></div>
          <h2>Profile</h2>
        </div>
      </router-link>
      <router-link to="/Work">
        <div class="icon-div">
          <div class="card card2"></div>
          <h2>Work</h2>
        </div></router-link
      >

      <router-link to="/Blog">
        <div class="icon-div">
          <div class="card card3"></div>
          <h2>Blog</h2>
        </div></router-link
      >
      <a
        href="mailto:filip@mackov.dev?subject=Hi, I visited your web and you need to read this email&body=Dear Filip,"
        target="_blank"
      >
        <div class="icon-div">
          <div class="card card4"></div>
          <h2>Contact</h2>
        </div></a
      >
      <a href="https://linkedin.com/in/filip-mackov" target="_blank">
        <div class="icon-div">
          <div class="card card5"></div>
          <h2>Likedin</h2>
        </div></a
      >
      <a href="https://github.com/memorah" target="_blank">
        <div class="icon-div">
          <div class="card card6"></div>
          <h2>GitHub</h2>
        </div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItems",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card1 {
  background-image: url("../assets/profile.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}

.card2 {
  background-image: url("../assets/work.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card3 {
  background-image: url("../assets/blog_icon.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card4 {
  background-image: url("../assets/contacts.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card5 {
  background-image: url("../assets/linkedinicon.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
.card6 {
  background-image: url("../assets/githubicon.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
</style>
