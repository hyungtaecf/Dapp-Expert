<template>
  <section id="blockchain">
    <div
      class="blockchains_container"
      :style="{ 'background': 'url(' + blockchain_background + ')' }"
    >
      <div class="blockchain_label">{{$t('message.blockchains')}}</div>
      <div class="blockchain_buttons">
        <div
          v-for="(blockchain, key) in blockchains"
          :key="key"
          :class="{'blockchain_btn': 1, 'active': blockchain.active}"
          :style="{ 'background': 'url(' + [blockchain.active? trapezio_blue_btn : trapezio_grey_btn] + ')' }"
          @click="selectBlockChain(key)"
        >{{blockchain.acronym}}</div>
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
        all: { acronym: "all", active: true },
        eos: { acronym: "eos", active: false },
        eth: { acronym: "eth", active: false },
        iost: { acronym: "iost", active: false },
        loom: { acronym: "loom", active: false },
        neo: { acronym: "neo", active: false },
        tron: { acronym: "tron", active: false },
        vechain: { acronym: "vechain", active: false }
      }
    };
  }
};
</script>