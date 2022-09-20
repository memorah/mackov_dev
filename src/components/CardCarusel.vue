<template>
  <div class="partner-area">
    <div class="container">
      <div class="partner-slides">
        <carousel :autoplay="6000" :settings="settings" :wrapAround="true">
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="partner-item">
              <ul class="animation-v1">
                <li>
                  <h1>Project | {{ slide.projectName }}</h1>
                  <p>
                    <span class="text">{{ slide.projectDescription }} |</span
                    ><span class="important-text">
                      <a class="text-link" :href="slide.download"
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
              <ul>
                <li>
                  <img :src="slide.image" alt="wf-image" />
                </li>
              </ul>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CardCarusel",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        projectName: "Company Group wireframe",
        id: 1,
        image: require("../assets/WF-group-of-companies.png"),
        toolsMessage: "AdobeXD | Adobe Ilustrator",
        projectDescription: "Desctop first wireframe, home page UI&UX",
        projectText:
          "Complete home page wireframe, hero section with video background, simple about & partners section, team slider, offer gallery section, events slider, time zones , footer with contact form.",
        download: "/assets/downloads/Company_group_WF.xd",
      },
      {
        projectName: "Car Dealer wireframe",
        id: 2,
        image: require("../assets/WF-cardealer.png"),
        toolsMessage: "AdobeXD | Adobe Ilustrator",
        projectDescription: "Mobile first wireframe, home page UI&UX",
        projectText:
          "Complete car dealer web site wireframe, with product cards, main services sections, subscription form and footer",
        download: "/assets/downloads/car_dealer_wireframe.xd",
      },
    ],
  }),
});
</script>
