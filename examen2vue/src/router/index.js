import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/accueil",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/utilisateur",
    name: "Utilisateur",
    component: () => import("../views/Utilisateur.vue"),
  },
  {
    path: "/projet",
    name: "Projet",
    component: () => import("../views/Projets.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/licence",
    name: "Licence",
    component: () => import("../views/Licence.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
