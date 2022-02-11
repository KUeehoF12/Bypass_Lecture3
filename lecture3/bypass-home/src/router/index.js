import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/lectures",
    name: "Lectures",
    component: () => import("../views/Lectures.vue"),
  },
  {
    path: "/members",
    name: "Members",
    component: () => import("../views/Members.vue"),
  },
  {
    path: "/activity/list",
    name: "Activities",
    component: () => import("../views/Activity/Index.vue"),
  },
  {
    path: "/activity/:id/detail",
    name: "ActivityDetial",
    component: () => import("../views/Activity/Detail.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/Page/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Page/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
