<template>
  <section id="categories">
    <div class="categories_label">{{$t('message.categories')}}:</div>
    <div class="category_select" :style="{'background':'url('+category_select_button+')'}">All</div>
    <div class="categories_container">
      <div class="dotted_line"></div>
      <div
        v-for="(category, key) in $t('categories')"
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
      active: "all",
      category_select_button: require("../../assets/category_select_button.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#categories {
  $circle_size: 2.25vmax;
  $inner_circle: #{$circle_size * 0.4};
  padding: 4vmax calc(#{$submenu_body_padding} + #{$submenu_inner_padding})
    3vmax;
  .categories_label {
    font-weight: bold;
    font-size: 1.25vmax;
    text-transform: capitalize;
  }
  .category_select {
    display: none;
  }
  .categories_container {
    $margin_top: 0.5vmax;
    margin-top: $margin_top;
    padding-left: 8vmax;
    padding-right: 1vmax;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .dotted_line {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      border-top: dotted $secondary 0.15vmax;
    }
    .circle_outer {
      height: $circle_size;
      width: $circle_size;
      border: $secondary solid 0.1vmax;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      .category_option {
        position: absolute;
        top: -2vmax;
        left: 50%;
        transform: translateX(-50%);
        color: $secondary;
        letter-spacing: 0.075vmax;
        text-transform: capitalize;
        font-size: 0.9vmax;
        white-space: nowrap;
      }
      .circle_inner {
        height: $inner_circle;
        width: $inner_circle;
        background-color: $secondary;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &.active {
        border: $primary solid 0.1vmax;
        .category_option {
          font-weight: bold;
          color: $primary;
        }
        .circle_inner {
          background-color: $primary;
        }
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    padding: 0.5vmax 1vmax;
    display: flex;
    align-items: center;
    .categories_label {
      font-size: 2.4vmax;
    }
    .category_select {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vmax;
      height: 3.25vmax;
      width: 100%;
      margin-right: 1vmax;
      color: $secondary;
      font-family: Futura PT Book;
      font-weight: bold;
      letter-spacing: 0.25vmax;
      background-size: 100% 100% !important;
      cursor: pointer;
    }
    .categories_container {
      display: none;
    }
  }
}
</style>