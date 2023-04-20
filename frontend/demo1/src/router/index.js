import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("../views/layout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/bbs.vue"),
        },
        {
          path: "/profile",
          component: () => import("../views/profile.vue"),
        },
        {
          path: "/profile/edit",
          component: () => import("../views/ProfileEdit.vue"),
        },
      ],
    },
    {
      path: "/loginandregister",
      name: "loginandregister",
      component: () => import("../views/LoginAndRegister.vue"),
    },
  ],
});

export default router;
