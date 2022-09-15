<script setup lang="ts">
import { computed } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header/Header.vue";
import Tab from "./components/tab/tab.vue";
// import Player from "./components/player/player.vue";
const playlist = [];
const viewStyle = computed(() => {
  return playlist.length ? "60px" : "0";
});
</script>

<template>
  <Header></Header>
  <Tab></Tab>
  <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <router-view :style="viewStyle" name="user" v-slot="{ Component }">
    <transition appear name="slide">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <player></player>
  <router-view />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style lang="scss" scoped></style>
