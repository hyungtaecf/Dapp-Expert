<template>
  <article id="dapp_article">
    <div class="section_title2">0xUniverse – play and conquer the blockchain universe!</div>
    <div class="article_body">
      0xUniverse - the blockchain. To reveal all its secrets, players have to populate
      the planets, extract resources and build spaceships.
      <br />
      <br />Contents:
    </div>
  </article>
</template>

<script>
export default {
  name: "DappArticle"
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#dapp_article {
  padding: 0 $lower_part_padding;
  .article_body {
    padding-top: $article_body_padding_top;
    padding-bottom: $article_body_padding_bottom;
  }
}
</style>