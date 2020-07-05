<template>
  <section id="graphic_section">
    <div class="upper_row">
      <div class="title">{{$t('message.blockchains_data_info')}}</div>
      <div class="buttons">
        <div
          v-for="(button, key) in $t('button.graphic_info')"
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

<style lang="scss" scoped>
@import "../../css/variables";
#graphic_section {
  padding: 10vmax $body_lower_padding;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .upper_row {
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 1.25vmax;
      font-weight: bold;
      text-transform: capitalize;
    }
    .buttons {
      margin: 0 1.35vmax;
      display: flex;
      .button_selector {
        $height: 2.3vmax;
        $padding: 0.25vmax;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        height: $height;
        line-height: $height;
        width: calc(6.75vmax - #{$padding} * 2);
        padding: 0 $padding;
        margin: 0 0.25vmax;
        font-size: 0.8vmax;
        border: 0.11vmax solid $primary;
        border-radius: 35vmax;
        color: $secondary;
        &.active {
          color: $white;
          background-color: $primary;
          font-weight: bold;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .graphic {
    img {
      width: 100%;
    }
  }
  @media (max-width: $breakpoint-tablet) {
    display: none;
  }
}
</style>