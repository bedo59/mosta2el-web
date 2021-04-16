import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import messages from "../views/messages.vue";
import brojects from "../views/brojects.vue";
import aboutus from "../views/aboutus.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/messages",
    name: "messages",
    component: messages,
  },
  {
    path: "/brojects",
    name: "brojects",
    component: brojects,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: aboutus,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
