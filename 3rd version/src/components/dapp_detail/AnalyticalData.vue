<template>
  <section id="analytical_data">
    <div class="section_title1">{{$t('analytical_data.analytical_data')}}</div>
    <div class="graphic_row">
      <div v-show="$mq === 'desktop'" v-for="(_, key) in 3" :key="key" class="graphic">
        <img :src="small_graphic" alt />
      </div>
      <div v-show="$mq === 'tablet'" class="graphic">
        <img :src="small_graphic" alt />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AnalyticalData",
  data() {
    return {
      small_graphic: require("../../assets/small_graphic.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#analytical_data {
  padding: 2vmax 22.5vmax;
  .graphic_row {
    display: flex;
    justify-content: space-between;
    .graphic {
      $border-radius: 1.7vmax;
      width: 100%;
      background: linear-gradient(to right, #0095fd, #00cee3);
      display: flex;
      justify-content: center;
      padding: 0.125vmax 0.125vmax 0.1vmax 0.075vmax;
      border-radius: $border-radius;
      margin: 2.5vmax 2vmax 0 0;
      &:last-child {
        margin-right: 0;
      }
      img {
        border-radius: $border-radius;
        width: 100%;
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    padding: 0 9.25vmax;
    .section_title1 {
      text-align: center;
      font-size: 2.4vmax;
    }
    .graphic_row {
      .graphic {
        $height: 68vw;
        $border-radius: 7vw;
        padding: 0 0.5vw 0.5vw 0.5vw;
        border-radius: $border-radius;
        margin: 7vw 4.5vw 0 0;
        height: $height;

        img {
          border-radius: $border-radius;
          object-fit: contain;
          height: $height;
        }
      }
    }
  }
}
</style>