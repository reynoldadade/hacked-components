import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import LazyLoadDirective from "./directives/lazyLoad.directive";

const app = createApp(App);
// add directives
app.directive("lazyLoad", LazyLoadDirective);

app.mount("#app");
