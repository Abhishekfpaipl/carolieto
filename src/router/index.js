import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue")
  },
  {
    path: "/product-detail/:productId",
    name: "ProductDetailPage",
    component: () => import("@/pages/ProductDetailPage.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
