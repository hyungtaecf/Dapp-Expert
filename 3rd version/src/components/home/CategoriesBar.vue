<template>
  <section id="categories">
    <div class="categories_label">{{$t('message.categories')}}:</div>
    <div class="categories_container">
      <div class="dotted_line"></div>
      <div
        v-for="(category, key, index) in $t('categories')"
        :key="key"
        :class="{circle_outer:1, active: active===key}"
        @click="changeActiveCategory(key)"
      >
        <div class="category_option">{{category}}</div>
        <div class="circle_inner"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategoriesBar",
  methods: {
    changeActiveCategory(key) {
      this.active = key;
    }
  },
  data() {
    return {
      active: "all"
    };
  }
};
</script>