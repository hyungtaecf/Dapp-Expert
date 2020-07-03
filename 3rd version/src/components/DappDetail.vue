<template>
  <div>
    <h1>{{ $route.params.dappName }}</h1>
    <carousel :per-page="1">
      <slide>Slide Content1</slide>
      <slide>Slide Content2</slide>
      <slide>Slide Content3</slide>
      <slide>Slide Content4</slide>
      <slide>Slide Content5</slide>
      <slide>Slide Content6</slide>
      <slide>Slide Content7</slide>
      <slide>Slide Content8</slide>
      <slide>Slide Content9</slide>
      <slide>Slide Content10</slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "DappDetail",
  watch: {
    $route(to, from) {
      alert(to.params.dappName);
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>