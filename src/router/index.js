import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/messages",
    name: "message",

    component: () => import("../views/messages.vue"),
  },

  {
    path: "/brojects",
    name: "brojects",

    component: () => import("../views/brojects.vue"),
  },

  {
    path: "/aboutus",
    name: "aboutus",

    component: () => import("../views/aboutus.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
