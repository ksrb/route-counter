import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";

export const home: RouteRecordRaw = {
  path: "/home",
  name: "Home",
  component: Home,
};
export const about: RouteRecordRaw = {
  path: "/about",
  name: "About",
  component: About,
};

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: home.path },
  home,
  about,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
