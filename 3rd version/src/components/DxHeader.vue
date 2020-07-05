<template>
  <header>
    <div id="navbar" :style="{ 'background': 'url(' + navbar_background + ')' }">
      <div
        class="logo"
        :style="{ 'background': 'url(' + [$mq==='tablet'?logo_background_mobile:logo_background] + ')' }"
      >
        <div class="logo_container">
          <router-link to="/">
            <img :src="logo" alt="Dapp.expert" />
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
          @click="changeLanguage"
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
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") this.$i18n.locale = "ru";
      else this.$i18n.locale = "en";
      localStorage.setItem("locale", this.$i18n.locale);
    }
  },
  data() {
    return {
      navbar_background: require("../assets/navbar_background.png"),
      logo_background: require("../assets/logo_background.png"),
      logo_background_mobile: require("../assets/logo_background_mobile.png"),
      logo: require("../assets/dx_logo.png"),
      search_field: require("../assets/search_field.png"),
      language: require("../assets/language.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../css/variables";
header {
  $input_height: 1.75vmax;
  $logo_width: 29.25vmax;
  display: flex;
  justify-content: center;
  padding: 0 $body_padding;
  height: $navbar_height;
  #navbar {
    padding-right: $navbar_padding;
    width: $navbar_width;
    height: $navbar_height;
    background-position: center !important;
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .logo {
      height: $navbar_height;
      width: $logo_width;
      background-position: center !important;
      background-size: 100% 100% !important;
      background-repeat: no-repeat !important;
      .logo_container {
        height: $navbar_height;
        width: $logo_width;
        position: relative;
        img {
          height: auto;
          width: 12vmax;
          position: absolute;
          top: 50%;
          left: $navbar_padding;
          transform: translateY(-50%);
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .search_field {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      input {
        height: $input_height;
        width: 13.5vmax;
        padding: 0 1.5vmax;
        border: none;
        background-position: center !important;
        background-size: 100% 100% !important;
        background-repeat: no-repeat !important;
        font-size: 0.9vmax;
        text-transform: capitalize;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: black;
        }
      }
    }
    .expanded {
      display: flex;
      justify-content: flex-end;
      .submit_btn {
        background: $primary;
        color: $white;
        text-transform: uppercase;
        border-radius: 0.25rem;
        height: $input_height;
        padding: 0 1.25vmax;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.5vmax;
        letter-spacing: 0.075vmax;
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
      }
      .language {
        margin-left: 2.75vmax;
        display: flex;
        &:hover {
          cursor: pointer;
        }
        .lang_icon {
          display: flex;
          align-items: center;
          img {
            height: #{$input_height - 0.5vmax};
          }
        }
        .iso639-1 {
          display: flex;
          align-items: center;
          padding-left: 0.5vmax;
          font-size: 0.95vmax;
          text-transform: capitalize;
          color: $white;
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    $navbar_height: 5.3vmax;
    $logo_width: 20vmax;
    $input_height: 2.75vmax;
    padding: 0;
    height: $navbar_height;
    #navbar {
      width: 100%;
      padding: 0;
      height: $navbar_height;
      background: $darkgrey !important;
      .logo {
        height: $navbar_height;
        width: $logo_width;
        .logo_container {
          height: $navbar_height;
          width: $logo_width;
          img {
            left: 4vmax;
          }
        }
      }
      .search_field {
        display: none;
      }
      .expanded {
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
        padding-right: 1.25vmax;
        .submit_btn {
          height: $input_height;
          padding: 0 1.25vmax;
          font-size: 0.9vmax;
        }
        .language {
          margin-left: 0;
          .lang_icon {
            img {
              height: calc(#{$input_height} - 0.75vmax);
            }
          }
          .iso639-1 {
            padding-left: 0.75vmax;
            font-size: 1.25vmax;
          }
        }
      }
    }
  }
}
</style>
