<template>
  <div
    id="app"
    :style="{ 'background': 'url(' + [$mq==='tablet'?background_mobile:background] + ')' }"
  >
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
      background: require("./assets/background.png"),
      background_mobile: require("./assets/background_mobile.png")
    };
  },
  components: {
    DxHeader,
    DxFooter
  }
};
</script>

<style lang="scss">
@import "./css/variables";
@import "./css/fonts";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

:root {
  cursor: default;
}

html {
  height: 100%;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  font-family: "Open Sans";
  font-weight: normal;
  font-size: 0.8vmax;
}

a {
  text-decoration: none;
  color: $black;
  &:visited {
    color: unset;
  }
}

ul {
  list-style: none;
}

#app {
  margin: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-size: 100% auto !important;
  background-repeat: repeat-y !important;
}

main {
  min-height: calc(100vh - #{$navbar_height} - #{$footer_height});
}
</style>
