<template>
  <section id="info">
    <div
      v-for="(item, key, index) in $t('info_item')"
      :key="key"
      :class="{'border' : index === Object.keys($t('info_item')).length-1, 'info_item' : 1}"
    >
      <div class="info_title">
        {{ item._0 }}
        <br v-if="index!==Object.keys($t('info_item')).length - 1 || $mq==='desktop'" />
        {{item._1}}
      </div>
      <div class="info_value">{{ info_item[key] }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoSection",
  data() {
    return {
      info_item: {
        total_dapps: "394",
        smart_contracts: "2,187",
        _24h_users: "49,858",
        _24h_transactions: "185,251",
        _24h_volume: "6,489,418"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#info {
  padding: 0 $body_lower_padding;
  display: flex;
  justify-content: space-between;
  .info_item {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    .info_title {
      color: $secondary;
      font-size: 1vmax;
      padding: 1vmax 0;
    }
    .info_value {
      color: $primary;
      font-size: 1.4vmax;
      font-family: "Futura PT Heavy";
      font-weight: normal;
    }
    &.border {
      align-items: center;
      .info_value {
        padding: 0.25vmax 0.5vmax;
        border: 2px solid $primary;
        border-radius: 30vmax;
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    padding: 1.5vmax 0;
    display: grid;
    grid-template-columns: 55% 45%;
    .info_item {
      margin: 0 0 3.5vmax 3vmax;
      .info_title {
        color: black;
        font-size: 2vmax;
        margin: 0 0 0.5vmax 0.5vmax;
        padding: 1vmax 0 0.25vmax;
        line-height: 110%;
      }
      .info_value {
        font-size: 2.75vmax;
        margin-left: 0.5vmax;
      }
      &.border {
        align-items: start;
        .info_value {
          margin: 1vmax 0;
          padding: 1vmax 2vmax;
          border: 2px solid $primary;
        }
      }
    }
  }
}
</style>