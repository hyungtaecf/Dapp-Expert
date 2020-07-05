<template>
  <section id="screenshot_similar">
    <div class="screenshots">
      <carousel :per-page="1" :navigationEnabled="true">
        <slide v-for="(picture, key) in screenshots" :key="key">
          <img :src="picture" alt />
        </slide>
      </carousel>
    </div>
    <div class="similar">
      <div
        class="section_title1"
      >{{$t('similar_section.similar_to._0')}}{{ $route.params.dappName}}{{$t('similar_section.similar_to._1')}}</div>
      <div class="dapp_list">
        <template v-for="(_, key, index) in 3">
          <hr :key="key" />
          <router-link
            :to="{name:'DappDetail', params:{dappName:other_dapp.name}}"
            :key="index"
            class="dapp_row"
          >
            <div class="other_dapp_img">
              <img :src="other_dapp.picture" alt />
            </div>
            <div class="info">
              <div class="name">{{other_dapp.name}}</div>
              <div class="category capitalize">{{$t('categories.'+[other_dapp.category])}}</div>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "ScreenshotAndSimilarSection",
  data() {
    return {
      screenshots: [
        require("../../assets/screenshot.png"),
        require("../../assets/screenshot.png"),
        require("../../assets/screenshot.png"),
        require("../../assets/screenshot.png")
      ],
      other_dapp: {
        name: "Tides of Magic",
        category: "games",
        picture: require("../../assets/square_avatar.png")
      }
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

// Not scoped
<style lang="scss">
@import "../../css/variables";
.VueCarousel-dot-container {
  margin: 0 !important;
  .VueCarousel-dot {
    border: solid 0.1vmax $darkgrey !important;
    padding: 0 !important;
    margin: 0.25vmax !important;
    background-color: transparent !important;
    &:focus {
      outline: none !important;
    }

    &.VueCarousel-dot--active {
      background-color: $primary !important;
    }
  }
}

.VueCarousel-navigation {
  $size: 3.25vmax;
  .VueCarousel-navigation-button {
    background: $primary !important;
    border-radius: 50%;
    height: $size;
    width: $size;
    padding: 0 !important;
    color: $white !important;
    font-size: 1.25vmax !important;
    &:focus {
      outline: none !important;
    }
  }
  .VueCarousel-navigation-next {
    right: #{$size / 2} !important;
  }
  .VueCarousel-navigation-prev {
    left: #{$size / 2} !important;
  }
}
#screenshot_similar {
  $screenshot_size: 38vmax;
  padding: 3.5vmax 18vmax 0 21vmax;
  display: grid;
  grid-template-areas: "screenshots similar";
  grid-template-columns: $screenshot_size auto;
  .screenshots {
    margin: 1.5vmax 0;
    grid-area: screenshots;
    width: 38vmax;
    img {
      width: 100%;
      object-fit: fill;
    }
  }
  .similar {
    $margin: 0.9vmax;
    margin-left: 4.5vmax;
    grid-area: similar;
    hr {
      margin: $margin 0;
    }
    .dapp_list {
      margin-right: 2.5vmax;
      hr {
        border: 1px solid $border-grey;
      }
      .dapp_row {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0.5vmax 0;
        .info {
          width: 100%;
          margin-left: 1.2vmax;
          .capitalize {
            text-transform: capitalize;
          }
          .name,
          .category {
            color: $secondary;
            font-size: 1vmax;
          }
        }
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    grid-template-areas: "screenshots" "similar";
  }
}
</style>