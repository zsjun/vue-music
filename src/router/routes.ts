import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../views/SampleView.vue"),
    // children: [
    //   {
    //     name: "Home",
    //     path: "home",
    //     component: () => import("../views/SampleView.vue"),
    //   },
    // ],
  },
  {
    path: "/home",
    component: () => import("../views/SampleView.vue"),
    // children: [
    //   {
    //     name: "Home",
    //     path: "home",
    //     component: () => import("../views/SampleView.vue"),
    //   },
    // ],
  },
];

export default routes;
