import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Products from "../views/ProductsPage.vue";
import Blog from "../views/BlogPage.vue";
import Contact from "../views/ContactPage.vue";
import ShoppingCart from "../views/ShoppingCartPage.vue";
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import LegalNotice from '../views/LegalNoticePage.vue';
import GeneralTerms from '../views/GeneralTermsPage.vue';
import Sitemap from '../views/SitemapPage.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produits",
    name: "Products",
    component: Products,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/panier",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
  {
    path: '/connexion',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/inscription',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/mentions-legales',
    name: 'LegalNotice',
    component: LegalNotice
  },
  {
    path: '/cgv',
    name: 'GeneralTerms',
    component: GeneralTerms
  },
  {
    path: '/plan-du-site',
    name: 'Sitemap',
    component: Sitemap
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
