<template>
  <header>
    <div id="navbar" :style="{ 'background': 'url(' + navbar_background + ')' }">
      <div class="logo" :style="{ 'background': 'url(' + logo_background + ')' }">
        <div class="logo_container">
          <router-link to="/">
            <img :src="logo" alt="Dapp Expert" />
          </router-link>
        </div>
      </div>
      <div class="search_field">
        <form action="POST">
          <input
            type="text"
            :placeholder="$t('placeholder.search')"
            name="search_input"
            :style="{ 'background': 'url(' + search_field + ')' }"
          />
        </form>
      </div>
      <div class="expanded">
        <router-link :to="{name:'SubmitDapp'}">
          <div class="submit_btn">{{$t("button.submit_dapp")}}</div>
        </router-link>
        <div
          class="language"
          :alt="$t('alt.select_language')"
          :title="$t('alt.select_language')"
          @click="$i18n.locale==='en'?$i18n.locale='ru':$i18n.locale='en'"
        >
          <div class="lang_icon">
            <img :src="language" />
          </div>
          <div class="iso639-1">{{$t('button.iso639_1')}}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DxHeader",
  data() {
    return {
      navbar_background: require("../assets/navbar_background.png"),
      logo_background: require("../assets/logo_background.png"),
      logo: require("../assets/dx_logo.png"),
      search_field: require("../assets/search_field.png"),
      language: require("../assets/language.png")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* TODO: Separate css from master and import it */
</style>
