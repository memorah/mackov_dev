import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/IntroPage.vue";
import VueRouterMetaTags from "@bachdgvn/vue-router-meta-tags";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
          content: "#242424",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
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
          content: "#242424",
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
          content: "#242424",
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
          content: "#242424",
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
          content: "#242424",
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
          content: "#242424",
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
          content: "#242424",
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
          content: "#242424",
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
          content: "#242424",
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
