import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// const registerRouter = require("./backend/router");

function resolve(dir = "") {
  return path.resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/music-next/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  // devServer: {
  //   before(app) {
  //     registerRouter(app);
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入变量和 mixin
        additionalData: `
            @import "@/assets/scss/variable.scss";
            @import "@/assets/scss/mixin.scss";
          `,
      },
    },
  },
});
