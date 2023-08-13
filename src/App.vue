<template>
  <router-view></router-view>
  <div class="nav">
    <router-link v-for="route in routesSorted" :to="route.path">{{
      route.name
    }}</router-link>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import routes from "./router/routes";
const routesSorted = computed(() => {
  return routes.sort((v1, v2) => {
    return v1.name > v2.name ? 1 : -1;
  });
});
</script>
<style scoped>
.nav {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}
</style>
