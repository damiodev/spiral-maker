import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

// Utilise Pinia comme store
const pinia = createPinia();
app.use(pinia);

// Utilise Vue Router
app.use(router);

app.mount("#app");
