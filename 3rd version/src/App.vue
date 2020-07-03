<template>
  <div id="app" :style="{ 'background': 'url(' + background + ')' }">
    <dx-header></dx-header>
    <main>
      <router-view />
    </main>
    <dx-footer></dx-footer>
  </div>
</template>

<script>
import DxHeader from "./components/DxHeader";
import DxFooter from "./components/DxFooter";
export default {
  name: "App",
  data() {
    return {
      background: require("./assets/background.png")
    };
  },
  components: {
    DxHeader,
    DxFooter
  }
};
</script>

<style>
@import "./css/master.css";
</style>
