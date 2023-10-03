<template>
  <div class="partner-area">
    <div class="container">
      <div class="partner-slides">
        <carousel :autoplay="6000" :settings="settings" :wrapAround="true">
          <slide v-for="slide in blogItems" :key="slide.id">
            <div class="partner-item">
              <ul class="item-galery animation-v1">
                <li>
                  <a :href="slide.blogLink1" target="_blank">
                    <div class="galery-row">
                      <div
                        :class="(slide.blogMainclass, slide.blogNomber1)"
                      ></div>

                      <h2 class="blog m-0">
                        {{ slide.blogName1 }}
                      </h2>
                    </div></a
                  >
                </li>
                <li>
                  <a :href="slide.blogLink2" target="_blank">
                    <div class="galery-row">
                      <div :class="slide.blogNomber2"></div>

                      <h2 class="blog m-0">
                        {{ slide.blogName2 }}
                      </h2>
                    </div></a
                  >
                </li>
                <li>
                  <a :href="slide.blogLink3" target="_blank">
                    <div class="galery-row">
                      <div :class="slide.blogNomber3"></div>

                      <h2 class="blog m-0">
                        {{ slide.blogName3 }}
                      </h2>
                    </div></a
                  >
                </li>
                <li>
                  <a :href="slide.blogLink4" target="_blank">
                    <div class="galery-row">
                      <div :class="slide.blogNomber4"></div>

                      <h2 class="blog m-0">
                        {{ slide.blogName4 }}
                      </h2>
                    </div></a
                  >
                </li>
                <li>
                  <a :href="slide.blogLink5" target="_blank">
                    <div class="galery-row">
                      <div :class="slide.blogNomber5"></div>

                      <h2 class="blog m-0">
                        {{ slide.blogName5 }}
                      </h2>
                    </div></a
                  >
                </li>
                <li>
                  <a :href="slide.blogLink6" target="_blank">
                    <div class="galery-row">
                      <div :class="slide.blogNomber6"></div>

                      <h2 class="blog m-0">
                        {{ slide.blogName6 }}
                      </h2>
                    </div></a
                  >
                </li>
                <li>
                  <a :href="slide.blogLink7" target="_blank">
                    <div class="galery-row">
                      <div :class="slide.blogNomber7"></div>

                      <h2 class="blog m-0">
                        {{ slide.blogName7 }}
                      </h2>
                    </div></a
                  >
                </li>
              </ul>
            </div>
          </slide>
          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "BlogCarusel",
  components: {
    Carousel,
    Pagination,
    Slide,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    blogItems: [
      {
        id: 1,
        blogMainclass: "galery-card blog-card",
        blogName1:
          "WooCommerce pitfalls and why to solve them with the help of specialists",
        blogNomber1: "galery-card blog-card blog-card12",
        blogLink1:
          "https://www.ecommercebridge.sk/uskalia-woocommerce-a-preco-ich-riesit-s-pomocou-specialistov/",

        blogName2: "Security and WordPress",
        blogNomber2: "galery-card blog-card blog-card13",
        blogLink2:
          "https://www.ecommercebridge.sk/bezpecnost-a-wordpress-ako-sa-chranit-pred-kybernetickymi-hrozbami/",

        blogName3: "Cookie consent & Cookie policy",
        blogNomber3: "galery-card blog-card blog-card11",
        blogLink3:
          "https://sharkani.com/2022/10/suhlas-so-spracovanim-suborov-cookie/",
        blogName4: "Subdomen's and problem's with them",
        blogNomber4: "galery-card blog-card blog-card1",
        blogLink4:
          "https://sharkani.com/2022/04/footer-prehliadana-pata-stranky/",
        blogName5: "Footer, an underrated part of the site",
        blogNomber5: "galery-card blog-card blog-card2",
        blogLink5:
          "https://sharkani.com/2022/04/footer-prehliadana-pata-stranky/",
        blogName6: "QR codes and their use in 2022",
        blogNomber6: "galery-card blog-card blog-card3",
        blogLink6:
          "https://sharkani.com/2022/03/qr-kody-a-ich-vyuzitie-v-roku-2022/",
        blogName7: "Trends in domains in 2022",
        blogNomber7: "galery-card blog-card blog-card4",
        blogLink7:
          "https://sharkani.com/2022/02/trendy-v-domenach-v-roku-2022/",
      },
      {
        id: 2,
        blogMainclass: "galery-card blog-card",
        blogName1: "How to prepare a website for the holidays",
        blogNomber1: "galery-card blog-card blog-card7",
        blogLink1:
          "https://sharkani.com/2021/10/ako-pripravit-vas-web-na-sviatky/",
        blogName2: "13 tips for successful e-shop",
        blogNomber2: "galery-card blog-card blog-card8",
        blogLink2:
          "https://sharkani.com/2021/10/ako-vybudujete-uspesny-e-shop-pomoze-vam-tychto-13-tipov/",
        blogName3: "What to do with broken links and backlinks",
        blogNomber3: "galery-card blog-card blog-card9",
        blogLink3:
          "https://sharkani.com/2021/07/co-robit-s-nefunkcnymi-linkami-a-spatnymi-odkazmi/",
        blogName4: "How to fix The most common mistakes on the web",
        blogNomber4: "galery-card blog-card blog-card10",
        blogLink4:
          "https://sharkani.com/2021/05/toto-su-najcastejsie-chyby-na-webe-ako-ich-opravit//",
        blogName6: "Why buy a website from SHARKANI",
        blogNomber6: "galery-card blog-card blog-card5",
        blogLink6:
          "https://sharkani.com/2021/12/preco-si-kupit-web-od-sharkani-dame-vam-17-dovodov-2/",
        blogName7: "Correct font size for the web",
        blogNomber7: "galery-card blog-card blog-card6",
        blogLink7:
          "https://sharkani.com/2021/12/aka-je-spravna-velkost-pisma-pre-web/",
      },
    ],
  }),
});
</script>
<style scoped>
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
}
.carousel__pagination-button {
  background-color: #fefefe;
  opacity: 0.7;
}

.carousel__pagination-button--active {
  background-color: #fefefe;
  opacity: 1;
}
ol {
  padding-inline-start: 0;
}
.carousel {
  text-align: left;
  z-index: 1;
  margin-top: 0rem;
}
.partner-item ul {
  padding-inline: 5%;
}
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
.blog-card10,
.blog-card11,
.blog-card12 {
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
.blog-card11 {
  background-image: url("../assets/blog_cookie.jpg");
}
.blog-card12 {
  background-image: url("../assets/woo-bridge.jpg");
}
.blog-card13 {
  background-image: url("../assets/wpsec.jpg");
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
@media (hover: none) {
  .blog-card:hover:before {
    -webkit-animation: none;
    animation: none;
  }
}
</style>
