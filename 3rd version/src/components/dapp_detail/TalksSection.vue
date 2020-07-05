<template>
  <section id="talks_section">
    <div
      class="section_title2"
    >{{$t('talks_section.says._0')}}{{$route.params.dappName}}{{$t('talks_section.says._1')}}</div>
    <div
      class="article_body"
    >Tweets by {{ $route.params.dappName }} – play and conquer the blockchain universe!</div>
  </section>
</template>

<script>
export default {
  name: "TalksSection"
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#talks_section {
  padding: 0 $lower_part_padding;
  .article_body {
    padding-top: $article_body_padding_top;
    padding-bottom: $article_body_padding_bottom;
  }
}
</style>