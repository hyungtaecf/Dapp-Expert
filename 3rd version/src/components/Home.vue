<template>
  <div>
    <top-ads></top-ads>
    <blockchains-bar></blockchains-bar>
    <categories-bar></categories-bar>
    <dapp-table></dapp-table>
    <info-section></info-section>
    <graphic-section></graphic-section>
  </div>
</template>

<script>
import TopAds from "./home/TopAds";
import BlockchainsBar from "./home/BlockchainsBar";
import CategoriesBar from "./home/CategoriesBar";
import DappTable from "./home/DappTable";
import InfoSection from "./home/InfoSection";
import GraphicSection from "./home/GraphicSection";

export default {
  name: "Home",
  components: {
    TopAds,
    BlockchainsBar,
    CategoriesBar,
    DappTable,
    InfoSection,
    GraphicSection
  }
};
</script>

<style>
@import "../css/index.css";
</style>
