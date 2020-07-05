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
    <talks-section></talks-section>
    <!-- !Dapp talks about itself section -->

    <!-- User's Voice -->
    <users-voice></users-voice>
    <!-- !User's Voice -->

    <!-- Users Also Like -->
    <users-also-like></users-also-like>
    <!-- !Users Also Like -->
  </div>
</template>

<script>
import IntroSection from "./dapp_detail/IntroSection";
import ScreenshotAndSimilarSection from "./dapp_detail/ScreenshotAndSimilarSection";
import AnalyticalData from "./dapp_detail/AnalyticalData";
import DappArticle from "./dapp_detail/DappArticle";
import TalksSection from "./dapp_detail/TalksSection";
import UsersVoice from "./dapp_detail/UsersVoice";
import UsersAlsoLike from "./dapp_detail/UsersAlsoLike";

export default {
  name: "DappDetail",
  components: {
    IntroSection,
    ScreenshotAndSimilarSection,
    AnalyticalData,
    DappArticle,
    TalksSection,
    UsersVoice,
    UsersAlsoLike
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
.button1 {
  padding: 0.5vmax 1.5vmax;
  display: flex;
  align-items: center;
  background-color: $primary;
  color: $white;
  cursor: pointer;
  font-size: 0.9vmax;
  border-radius: 0.25rem;
}
.other_dapp_img {
  $size: 4vmax;
  background: linear-gradient(to right, #0095fd, #00cee3);
  display: flex;
  justify-content: center;
  padding: 0.15vmax;
  border-radius: 0.25rem;
  img {
    width: $size;
    height: $size;
    border-radius: 0.25rem;
    object-fit: contain;
  }
}
</style>