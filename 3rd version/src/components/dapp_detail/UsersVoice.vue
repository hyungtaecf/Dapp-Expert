<template>
  <section id="users_voice">
    <div class="section_title2">{{$t('users_voice.users_voice')}}</div>
    <div class="users_voice_button">
      <div class="button1">{{$t('users_voice.go_to_the_website')}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UsersVoice"
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#users_voice {
  padding: 0 $lower_part_padding;
  .users_voice_button {
    display: flex;
    padding-top: $article_body_padding_top;
    padding-bottom: $article_body_padding_bottom;
  }
}
</style>