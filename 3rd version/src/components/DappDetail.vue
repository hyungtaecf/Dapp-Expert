<template>
  <div>
    <!-- Intro Section -->
    <intro-section></intro-section>
    <!-- !Intro Section -->

    <!-- Screenshots + Similar Section -->
    <screenshot-and-similar-section></screenshot-and-similar-section>
    <!-- Screenshots + Similar Section -->

    <!-- Analytical Data -->
    <analytical-data></analytical-data>
    <!-- !Analytical Data -->

    <!-- Article -->
    <dapp-article></dapp-article>
    <!-- !Article -->

    <!-- Dapp talks about itself section -->
    <section>
      <div class="section_title2">(leading) {{ $route.params.dappName }} says (trailing)</div>
      <div>(leading )Tweets by {{ $route.params.dappName }} (trailing)</div>
    </section>
    <!-- !Dapp talks about itself section -->

    <!-- Users Also Like -->
    <section>
      <div class="section_title2">Users Also Like</div>
      <div class="dapps">
        <img src alt />
        <img src alt />
        <img src alt />
      </div>
    </section>
    <!-- !Users Also Like -->
  </div>
</template>

<script>
import IntroSection from "./dapp_detail/IntroSection";
import ScreenshotAndSimilarSection from "./dapp_detail/ScreenshotAndSimilarSection";
import AnalyticalData from "./dapp_detail/AnalyticalData";
import DappArticle from "./dapp_detail/DappArticle";

export default {
  name: "DappDetail",
  components: {
    IntroSection,
    ScreenshotAndSimilarSection,
    AnalyticalData,
    DappArticle
  }
};
</script>

<style lang="scss">
@import "../css/variables";
.section_title1 {
  font-size: 1.25vmax;
  font-weight: bold;
}
.section_title2 {
  font-size: 1.25vmax;
  color: $primary;
  font-weight: bold;
}
.description,
.article_body {
  color: $secondary;
  font-size: 1.05vmax;
}
</style>