<template>
  <canvas class="webgl" ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const canvas = ref(undefined);
const emit = defineEmits(["ready"]);
onMounted(() => {
  emit("ready", canvas.value);
});
</script>

<style scoped></style>
