<template>
  <!-- Cancel icon -->
  <div class="text-content">
    <!-- Menu items -->
    <ul class="item-galery animation-v1">
      <li>
        <a
          href="https://sharkani.com/2022/04/footer-prehliadana-pata-stranky/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card1 blog-card"></div>

            <h2 class="blog m-0">Subdomen'ss and problem's with them</h2>
          </div></a
        >
      </li>

      <li>
        <a
          href="https://sharkani.com/2022/04/footer-prehliadana-pata-stranky/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card2 blog-card"></div>
            <h2 class="blog m-0">Footer, an underrated part of the site</h2>
          </div></a
        >
      </li>
      <li>
        <a
          href="https://sharkani.com/2022/03/qr-kody-a-ich-vyuzitie-v-roku-2022/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card3 blog-card"></div>
            <h2 class="blog m-0">QR codes and their use in 2022</h2>
          </div></a
        >
      </li>
      <li>
        <a
          href="https://sharkani.com/2022/02/trendy-v-domenach-v-roku-2022/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card4 blog-card"></div>
            <h2 class="blog m-0">Trends in domains in 2022</h2>
          </div></a
        >
      </li>
      <li>
        <a
          href="https://sharkani.com/2021/12/preco-si-kupit-web-od-sharkani-dame-vam-17-dovodov-2/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card5 blog-card"></div>
            <h2 class="blog m-0">Why buy a website from SHARKANI</h2>
          </div></a
        >
      </li>

      <li>
        <a
          href="https://sharkani.com/2021/12/aka-je-spravna-velkost-pisma-pre-web/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card6 blog-card"></div>
            <h2 class="blog m-0">Correct font size for the web</h2>
          </div></a
        >
      </li>
      <li>
        <a
          href="https://sharkani.com/2021/10/ako-pripravit-vas-web-na-sviatky/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card7 blog-card"></div>
            <h2 class="blog m-0">How to prepare a website for the holidays</h2>
          </div></a
        >
      </li>
      <li>
        <a
          href="https://sharkani.com/2021/10/ako-vybudujete-uspesny-e-shop-pomoze-vam-tychto-13-tipov/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card8 blog-card"></div>
            <h2 class="blog m-0">13 tips for a successful e-shop</h2>
          </div></a
        >
      </li>
      <li>
        <a
          href="https://sharkani.com/2021/07/co-robit-s-nefunkcnymi-linkami-a-spatnymi-odkazmi/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card9 blog-card"></div>
            <h2 class="blog m-0">What to do with broken links and backlinks</h2>
          </div></a
        >
      </li>
      <li>
        <a
          href="https://sharkani.com/2021/05/toto-su-najcastejsie-chyby-na-webe-ako-ich-opravit/"
          target="_blank"
        >
          <div class="galery-row">
            <div class="galery-card blog-card10 blog-card"></div>
            <h2 class="blog m-0">
              How to fix The most common mistakes on the web
            </h2>
          </div></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.text-content::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.text-content {
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.m-0 {
  margin: 0;
}
h2.blog {
  width: calc(100% - 2rem);
}
.item-galery {
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;

  justify-content: flex-start;
  width: 100%;

  margin-left: 0;
  margin-right: 0;
}
.item-galery li {
  margin: 0;
}
.galery-row {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
}
.galery-card {
  width: 3rem;
  height: 3rem;
  margin: 0.5rem 1rem;
  aspect-ratio: 1;

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 18%;
  transition: 1s ease-out;
}
.blog-card1,
.blog-card2,
.blog-card3,
.blog-card4,
.blog-card5,
.blog-card6,
.blog-card7,
.blog-card8,
.blog-card9,
.blog-card10 {
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.blog-card1 {
  background-image: url("../assets/subdomeny.jpg");
}

.blog-card2 {
  background-image: url("../assets/footerblog.jpg");
}

.blog-card3 {
  background-image: url("../assets/QRkodyblog.jpg");
}

.blog-card4 {
  background-image: url("../assets/trendyvdomenachblog.jpg");
}

.blog-card5 {
  background-image: url("../assets/precowebodsharkaniblog.jpg");
}

.blog-card6 {
  background-image: url("../assets/fontsizeblog.jpg");
}

.blog-card7 {
  background-image: url("../assets/webholidaysblog.jpg");
}

.blog-card8 {
  background-image: url("../assets/13tipoveshopblog.jpg");
}

.blog-card9 {
  background-image: url("../assets/brokenlinksblog.jpg");
}

.blog-card10 {
  background-image: url("../assets/404blog.jpg");
}
.blog-card:before {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  mix-blend-mode: hard-light;
  background-image: inherit;
  background-size: 100%;
  opacity: 1;
  transition: 0.3s ease-out;
  background-repeat: no-repeat;
  border-radius: inherit;
}
.blog-card:hover:before {
  animation: animate 0.9s linear infinite;
}

@keyframes animate {
  0% {
    background-color: transparent;
    background-position: 0 0;
    filter: hue-rotate(0deg);
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  10% {
    background-color: transparent;
    background-position: 5px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  20% {
    background-color: transparent;
    background-position: -5px 0;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  30% {
    background-color: transparent;
    background-position: 3px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  40% {
    background-color: transparent;
    background-position: 0 5px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  50% {
    background-position: 0 -3px;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    background-color: transparent;
  }
  55% {
    background-position: 0 -3px;
    background-color: darkgray;
  }

  60% {
    background-color: transparent;
    background-position: 0 2px;
    filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
    -moz-filter: drop-shadow(1px 1px 2px rgb(60, 207, 109));
  }
  70% {
    background-color: transparent;
    background-position: 0 -1px;
    filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
    -moz-filter: drop-shadow(1px 1px 2px rgb(0, 195, 255));
  }
  80% {
    background-color: transparent;
    background-position: -2px 0;
    filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -webkit-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
    -moz-filter: drop-shadow(1px 1px 2px rgb(255, 0, 0));
  }
  81% {
    background-color: transparent;
    background-position: 2px 0;
    filter: drop-shadow(3px 5px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
  100% {
    background-color: transparent;
    background-position: 0 0;
    filter: hue-rotate(380deg);
    filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -webkit-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
    -moz-filter: drop-shadow(3px 3px 1px rgb(238, 255, 0));
  }
}
</style>
