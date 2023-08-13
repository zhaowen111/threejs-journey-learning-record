<template>
  <Canvas @ready="getCanvas"></Canvas>
</template>
<script setup lang="ts">
import * as THREE from "three";
import Canvas from "../../components/Canvas.vue";
import BaseScene from "../../utils/BaseScene.ts";
function getCanvas(canvas: HTMLCanvasElement) {
  const baseScene = new BaseScene(canvas);
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const mesh = new THREE.Mesh(geometry, material);
  baseScene.scene.add(mesh);
}
</script>

<style scoped></style>
