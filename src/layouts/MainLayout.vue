<script setup lang="ts">
import { ref, reactive } from "vue";
</script>

<template>
  <div class="box">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
}
</style>
