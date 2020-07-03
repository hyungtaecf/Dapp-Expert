<template>
  <section id="graphic_section">
    <div class="upper_row">
      <div class="title">{{$t('message.blockchains_data_info')}}</div>
      <div class="buttons">
        <div
          v-for="(button, key, index) in $t('button.graphic_info')"
          :key="key"
          :class="{'button_selector' : 1, 'active' : active === key}"
          @click="select(key)"
        >{{button}}</div>
      </div>
    </div>
    <div class="graphic">
      <img :src="big_graphic" />
    </div>
  </section>
</template>

<script>
export default {
  name: "GraphicSection",
  methods: {
    select(key) {
      this.active = key;
    }
  },
  data() {
    return {
      big_graphic: require("../../assets/big_graphic.png"),
      active: "volume"
    };
  }
};
</script>