import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CompTest from "../views/CompTest.vue";
import SearchView from "@/views/search/SearchView.vue";



const routes = [
  {
    path: "/search",
    name: "SearchView",
    component: SearchView,
  },
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/comp",
    name: "CompTest",
    component: CompTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;