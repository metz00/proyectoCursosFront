import { createRouter, createWebHistory } from "vue-router";
import { mixin } from "@/Server/index";
import { useAppStore } from "@/store/app";


const routes = [
  {
    path: "/",

       beforeEnter: (to, from, next) => {
      const appStore = useAppStore();
      const token = localStorage.getItem("token");
      if (!token) {
        next("/auth/sign-in");
      } else {
        mixin.methods
          .peticionApi({
            api: "users/me",
            method: "GET",
          })
          .then((response) => {
            appStore.$state.userData = response;
            next();
          })
          .catch((error) => {
            console.error("Error al obtener datos del usuario:", error);
            localStorage.removeItem("token");
            next("/auth/sign-in");
          });
      }
    },
        component: () => import("@/layouts/default/Default.vue"),

    children: [

      {
        path: "Dashboard",
        component: () => import("@/modules/dashboard/views/Dashboard.vue"),
      },
      {
        path: "categorias",
        component: () => import("@/modules/categories/views/Categories.vue"),
      },
      {
        path: "cursos",
        component: () => import("@/modules/courses/views/Courses.vue"),
      },
      {
        path: "usuarios",
        component: () => import("@/modules/users/views/Users.vue"),
      },
    ],
  },
  {
    path: "/auth/sign-in",
    name: "Login",
    component: () => import("@/modules/Auth/views/Sign-in.vue"),
  },
  {
    path: "/auth/sign-up",
    component: () => import("@/modules/Auth/views/Sign-up.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
