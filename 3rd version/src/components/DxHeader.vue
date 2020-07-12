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
          @click="show_language_dropdown = !show_language_dropdown"
        >
          <div class="lang_icon">
            <img :src="language" />
          </div>
          <div class="iso639-1">{{$i18n.locale}}</div>
          <transition name="slide">
            <div v-show="show_language_dropdown" class="dropdown_language">
              <div
                v-for="(lang, key) in languages"
                :key="key"
                class="language_item"
                @click="changeLanguage(key)"
              >
                <img :src="lang.img" :alt="key" />
                <span class="language_label">{{lang.label}}</span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DxHeader",
  methods: {
    changeLanguage(lang) {
      localStorage.setItem("locale", lang);
      this.$i18n.locale = lang;
    }
  },
  data() {
    return {
      navbar_background: require("../assets/navbar_background.png"),
      logo_background: require("../assets/logo_background.png"),
      logo_background_mobile: require("../assets/logo_background_mobile.png"),
      logo: require("../assets/dx_logo.png"),
      search_field: require("../assets/search_field.png"),
      language: require("../assets/language.png"),
      languages: {
        en: {
          img: require("../assets/language-en.svg"),
          label: "English"
        },
        ru: {
          img: require("../assets/language-ru.svg"),
          label: "Русский язык"
        },
        ja: {
          img: require("../assets/language-ja.svg"),
          label: "日本語"
        },
        fr: {
          img: require("../assets/language-fr.svg"),
          label: "Français"
        },
        ko: {
          img: require("../assets/language-ko.svg"),
          label: "한국어"
        },
        pt: {
          img: require("../assets/language-pt.svg"),
          label: "Português"
        },
        zh: {
          img: require("../assets/language-zh.svg"),
          label: "简体中文"
        },
        tw: {
          img: require("../assets/language-tw.svg"),
          label: "繁體中文"
        },
        ms: {
          img: require("../assets/language-ms.svg"),
          label: "Bahasa Melayu"
        }
      },
      show_language_dropdown: false
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
        position: relative;
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
        .dropdown_language {
          position: absolute;
          top: calc(#{$navbar_height} - #{$navbar_height} / 3 + 0.1vmax);
          right: -1.6vmax;
          background: rgba($darkgrey, 0.95);
          border: 0.1vw solid rgba($black, 0.5vmax);
          .language_item {
            display: flex;
            align-items: center;
            padding: 0.5vmax 1vmax;
            img {
              height: 1.75vmax;
            }
            .language_label {
              margin-left: 1vmax;
              font-size: 1vmax;
              color: $white;
              white-space: nowrap;
            }
            &:hover {
              background: rgba($black, 0.5);
            }
          }
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
          .dropdown_language {
            display: grid;
            grid-template-columns: auto auto auto;
            top: calc(#{$navbar_height} - #{$navbar_height} / 3 + 0.5vmax);
            right: calc(50% - 2vmax);
            transform: translateX(50%);
            .language_item {
              padding: 0.5vmax 1vmax;
              img {
                height: 3vmax;
              }
              .language_label {
                margin-left: 0.75vmax;
                font-size: 1.5vmax;
              }
            }
          }
        }
      }
    }
  }
}
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100vh;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
