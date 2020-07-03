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