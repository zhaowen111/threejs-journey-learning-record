import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import BasicScene from '../pages/basicScene1.vue';
const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/basicScene1", component: BasicScene, name: "1-Basic-Scene" },

];
export default routes;