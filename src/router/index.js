import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/IntroPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
  },
  {
    path: "/Work",
    name: "Work",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Work.vue"),
  },
  {
    path: "/Work/LanguageBakery",
    name: "LangugaeBakery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LanguageBakery.vue"),
  },
  {
    path: "/Work/SmilingSnake",
    name: "SmilingSnake",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SmilingSnake.vue"),
  },
  {
    path: "/Work/GAABarberShop",
    name: "GAABarberShop",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GaabarberShop.vue"),
  },
  {
    path: "/Work/WireFrames",
    name: "WireFrames",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WireFrames.vue"),
  },
  {
    path: "/Blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogPage.vue"),
  },
  {
    path: "/Menu",
    name: "Menu",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MenuPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
