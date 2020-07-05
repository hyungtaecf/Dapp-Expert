<template>
  <section id="info">
    <div
      v-for="(item, key, index) in $t('info_item')"
      :key="key"
      :class="{'border' : index === Object.keys($t('info_item')).length-1, 'info_item' : 1}"
    >
      <div class="info_title">
        {{ item._0 }}
        <br />
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
    display: none;
  }
}
</style>