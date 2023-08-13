<template>
  <Canvas @ready="getCanvas"></Canvas>
</template>

<script setup lang="ts">
import Canvas from "../../components/Canvas.vue";
import FoxScene from "./FoxScene.js";
function getCanvas(canvas: HTMLCanvasElement) {
  new FoxScene(canvas);
}
</script>

<style scoped></style>
