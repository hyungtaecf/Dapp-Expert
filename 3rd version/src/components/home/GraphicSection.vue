<template>
  <section id="graphic_section">
    <div class="upper_row">
      <div class="title">{{$t('message.blockchains_data_info')}}</div>
      <div class="buttons">
        <div
          class="button_selector_container"
          v-for="(button, key) in $t('button.graphic_info')"
          :key="key"
        >
          <div
            :class="{'button_selector' : 1, 'active' : active === key}"
            @click="select(key)"
            :style="[active === key && $mq==='tablet'?{'background':'url('+trapezio_blue_btn+')'}:{'background':'url('+trapezio_grey_btn+')'}]"
          >{{button}}</div>
        </div>
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
      trapezio_blue_btn: require("../../assets/trapezio_blue_btn.png"),
      trapezio_grey_btn: require("../../assets/trapezio_grey_btn.png"),
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
      .button_selector_container {
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
          @media (min-width: #{$breakpoint-tablet + 0.99px}) {
            background: transparent !important;
            &.active {
              background: $primary !important;
            }
          }
          &.active {
            color: $white;
            font-weight: bold;
          }
          &:hover {
            cursor: pointer;
          }
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
    padding: 0;
    .upper_row {
      flex-direction: column;
      .title {
        font-size: 2.4vmax;
        margin-bottom: 5vmax;
      }
      .buttons {
        margin: 0 1.35vmax;
        display: flex;
        width: 100%;
        padding: 0 5%;
        .button_selector_container {
          $height: 4.5vmax;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          position: relative;
          width: 100%;
          height: $height;
          .button_selector {
            height: $height;
            line-height: $height;
            $padding: 0.25vmax;
            padding: 0 $padding;
            width: 116%;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            background-size: 100% 100% !important;
            border-radius: unset;
            border: none;
            margin: 0;
            font-size: 1.5vmax;
            color: $white;
          }
        }
      }
    }
    .graphic {
      display: flex;
      justify-content: center;
      padding: 1.5vmax 0 8.5vmax;
      height: auto;
      max-height: 70vw;
      img {
        width: 95%;
        max-width: 95vw !important;
        max-height: 70vw;
        height: auto;
        object-fit: contain;
      }
    }
  }
}
</style>