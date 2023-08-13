import BasicScene from "../pages/lesson_03_basic_scene/index.vue";
import CodeStruct from "../pages/lesson_29_code_struct/index.vue";
import GeoMetry from "../pages/lesson_09_geometry/index.vue";

const routes = [
  {
    path: "/01-basicScene",
    component: BasicScene,
    name: "01-Basic-Scene",
  },
  {
    path: "/29-CodeStruct",
    component: CodeStruct,
    name: "29-CodeStruct",
  },
  {
    path: "/09-GeoMetry",
    component: GeoMetry,
    name: "09-GeoMetry",
  },
];
export default routes;
