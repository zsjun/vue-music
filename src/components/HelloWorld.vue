<script setup lang="ts">
import { useMouse } from "@vueuse/core";

defineProps<{ msg: string }>();
// tracks mouse position
const { x, y } = useMouse();
// const count = ref(0);

// // is user prefers dark theme
// const isDark = usePreferredDark();

// // persist state in localStorage
// const store = useLocalStorage("my-storage", {
//   name: "Apple",
//   color: "red",
// });
</script>

<template>
  <div class="about">
    <h1 class="text-3xl font-bold underline">{{ x }},{{ y }}</h1>
  </div>
</template>

<style scoped lang="scss">
.about {
  color: #888;
}
</style>
