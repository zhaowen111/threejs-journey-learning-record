<template>
  <div class="nav">
    <router-link v-for="route in routes" :to="route.path">{{
      route.name
    }}</router-link>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import routes from "./router/routes";
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
