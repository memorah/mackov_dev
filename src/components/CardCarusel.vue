<template>
  <div class="partner-area">
    <div class="container">
      <div class="partner-slides">
        <carousel :autoplay="8000" :settings="settings">
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="partner-item">
              <ul class="animation-v1">
                <li>
                  <img :src="slide.image" alt="wf-image" />
                </li>
                <li>
                  <h1>Project | {{ slide.projectName }}</h1>
                </li>
                <li>
                  <p>
                    <span class="text">{{ slide.projectDescription }} |</span
                    ><span class="important-text">
                      <a class="text-link" download :href="slide.download"
                        >&nbsp;Download</a
                      >
                    </span>
                  </p>
                </li>
                <li>
                  <h2>Design</h2>
                  <p class="text">{{ slide.projectText }}</p>
                </li>
                <li>
                  <h2>Main tools</h2>
                  <p>
                    <span class="text">{{ slide.toolsMessage }}</span>
                  </p>
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
  name: "CardCarusel",
  components: {
    Carousel,
    Pagination,
    Slide,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      wrapAround: "true",
      transition: 600,
    },
    carouselItems: [
      {
        projectName: "Company Group wireframe",
        id: 1,
        image: require("../assets/WF-group-of-companies.png"),
        toolsMessage: "AdobeXD | Adobe Ilustrator",
        projectDescription: "Desktop first wireframe, home page UI&UX",
        projectText:
          "Complete home page wireframe, hero section with video background, simple about us & partners section, team slider, offer gallery section, events slider, time zones , footer with contact form.",
        download: "http://downloads.mackov.dev/company_group_wf.zip",
      },
      {
        projectName: "Car Dealer wireframe",
        id: 2,
        image: require("../assets/WF_cardealer.png"),
        toolsMessage: "AdobeXD | Adobe Ilustrator",
        projectDescription: "Mobile first wireframe, home page UI&UX",
        projectText:
          "Complete car dealer web site wireframe, with product cards, main services sections, subscription form and footer",
        download: "http://downloads.mackov.dev/car_dealer_wf.zip",
      },
    ],
  }),
});
</script>
<style scoped>
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
}
.partner-item ul {
  padding-inline: 5%;
}
</style>
