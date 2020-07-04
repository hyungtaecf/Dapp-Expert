<template>
  <div id="app" :style="{ 'background': 'url(' + background + ')' }">
    <dx-header></dx-header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
