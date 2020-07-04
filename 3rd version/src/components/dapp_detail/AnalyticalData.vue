<template>
  <section id="analytical_data">
    <div class="section_title1">Аналитика</div>
    <div class="graphic_row">
      <div v-for="(_, key) in 3" :key="key" class="graphic">
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
#analytical_data {
  padding: 2vmax 22.5vmax;
  .graphic_row {
    display: flex;
    justify-content: space-between;
    .graphic {
      width: 100%;
      background: linear-gradient(to right, #0095fd, #00cee3);
      display: flex;
      justify-content: center;
      padding: 0.125vmax 0.125vmax 0.1vmax 0.075vmax;
      border-radius: 1.7vmax;
      margin: 2.5vmax 2vmax 0 0;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>