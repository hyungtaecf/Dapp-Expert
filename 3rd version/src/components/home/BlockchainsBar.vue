<template>
  <section id="blockchain">
    <div
      class="blockchains_container"
      :style="{ 'background': 'url(' + blockchain_background + ')' }"
    >
      <div
        :class="{'blockchain_label':1, 'nowrap': nowrap_languages.includes($i18n.locale)}"
      >{{$t('message.blockchains')}}</div>
      <div class="blockchain_buttons">
        <div
          v-for="(blockchain, key, index) in blockchains"
          :key="key"
          :class="{'blockchain_btn': 1, 'active': blockchain.active}"
          :style="{ 'background': 'url(' + [blockchain.active? trapezio_blue_btn : trapezio_grey_btn] + ')' }"
          @click="selectBlockChain(key)"
        >{{index === 0? $t('message.all') : blockchain.acronym}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockchainsBar",
  methods: {
    selectBlockChain(key) {
      for (let el in this.blockchains) {
        this.blockchains[el].active = false;
      }
      this.blockchains[key].active = true;
    }
  },
  data() {
    return {
      blockchain_background: require("../../assets/blockchain_background.png"),
      trapezio_blue_btn: require("../../assets/trapezio_blue_btn.png"),
      trapezio_grey_btn: require("../../assets/trapezio_grey_btn.png"),
      blockchains: {
        all: { active: true },
        eos: { acronym: "eos", active: false },
        eth: { acronym: "eth", active: false },
        iost: { acronym: "iost", active: false },
        loom: { acronym: "loom", active: false },
        neo: { acronym: "neo", active: false },
        tron: { acronym: "tron", active: false },
        vechain: { acronym: "vechain", active: false }
      },
      nowrap_languages: ["ja", "ko", "zh", "tw"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#blockchain {
  display: flex;
  justify-content: center;
  padding: 0 $submenu_body_padding;
  .blockchains_container {
    display: flex;
    align-items: center;
    padding: 0 $submenu_inner_padding;
    height: $navbar_height;
    width: $navbar_width;
    background-position: center !important;
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
    .blockchain_label {
      font-size: 1.25vmax;
      color: $white;
      font-weight: bold;
      text-transform: capitalize;
      &.nowrap {
        white-space: nowrap;
      }
    }
    .blockchain_buttons {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 1vmax;
      .blockchain_btn {
        height: $trapezio_button_height;
        width: $trapezio_button_width;
        background-position: center !important;
        background-size: 100% 100% !important;
        background-repeat: no-repeat !important;
        text-transform: uppercase;
        font-size: 0.6vmax;
        letter-spacing: 0.075vmax;
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &.active {
          font-weight: bold;
        }
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    padding: 3.5vmax 1vmax;
    .blockchains_container {
      flex-direction: column;
      align-items: start;
      padding: 0;
      height: auto;
      width: 100%;
      background: none !important;
      .blockchain_label {
        font-size: 2.4vmax;
        margin-bottom: 3vmax;
        color: $black;
      }
      .blockchain_buttons {
        display: grid;
        width: 100%;
        padding: 0;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 1vmax;
        row-gap: 1.75vmax;
        .blockchain_btn {
          height: 2.75vmax;
          width: 100%;
          font-size: 1.25vmax;
        }
      }
    }
  }
}
</style>