import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        name: "Home",
        path: "home",
        component: () => import("../views/SampleView.vue"),
      },
    ],
  },
];

export default routes;
