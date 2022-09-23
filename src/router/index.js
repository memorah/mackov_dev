import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/IntroPage.vue";
import VueRouterMetaTags from "@bachdgvn/vue-router-meta-tags";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: `Frontend Developer | WordPress Developer | UI&UX | SEO`,
      metaTags: [
        {
          name: "description",
          content:
            "Meet Frontend & WordPress Developer. Building websites and interactive experiences, web solutions, website maintenance & security, seo optimalisation",
        },
        {
          property: "og:description",
          content: "mackov.dev",
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "og:site_name",
          content: "mackov.dev",
        },
        {
          name: "og:title",
          content: "mackov.dev",
        },
        {
          name: "og:type",
          content: "article",
        },
        {
          name: "og:image",
          content: "http://downloads/mackov.dev/ok-img.jpg",
        },
        {
          name: "og:url",
          content: "http:mackov.dev",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "og:description",
          content:
            "Meet Frontend & WordPress Developer. Building websites and interactive experiences, web solutions, website maintenance & security, seo optimalisation",
        },
        {
          name: "og:site_name",
          content: "mackov.dev",
        },
        {
          name: "twitter:image:alt",
          content: "mackov.dev",
        },
      ],
    },
  },
  {
    path: "/Menu",
    name: "Menu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MenuPage.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  {
    path: "/Profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  {
    path: "/Work",
    name: "Work",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Work.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  {
    path: "/Work/LanguageBakery",
    name: "LangugaeBakery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LanguageBakery.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  {
    path: "/Work/SmilingSnake",
    name: "SmilingSnake",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SmilingSnake.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  {
    path: "/Work/GAABarberShop",
    name: "GAABarberShop",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GaabarberShop.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  {
    path: "/Work/WireFrames",
    name: "WireFrames",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WireFrames.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogPage.vue"),
    meta: {
      title: `mackov.dev`,
      metaTags: [
        {
          name: "description",
          content: `mackov.dev`,
        },
        {
          property: "og:description",
          content: `mackov.dev`,
        },
        {
          name: "theme-color",
          content: "#000000",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(VueRouterMetaTags.update);
export default router;
