import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory("/paldeck/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/paldeck",
      name: "paldeck",
      component: () => import("../views/PalDeckView.vue"),
    },
    {
      path: "/planner",
      name: "planner",
      component: () => import("../views/PlannerView.vue"),
    },
    {
      path: "/pal/:id",
      name: "pal",
      component: () => import("../views/PalView.vue"),
    },
  ],
});

export default router;
