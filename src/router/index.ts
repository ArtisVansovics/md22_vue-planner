import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PlannerView from "@/views/PlannerView.vue";
import ServicesView from "@/views/ServicesView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "planner",
    component: PlannerView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
