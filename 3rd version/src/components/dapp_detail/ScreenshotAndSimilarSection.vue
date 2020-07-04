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
      <div class="section_title1">Похожее на 0xUniverse</div>
      <div class="dapp_list">
        <template v-for="(_, key, index) in 3">
          <hr :key="key" />
          <router-link
            :to="{name:'DappDetail', params:{dappName:'Tides of Magic'}}"
            :key="index"
            class="dapp_row"
          >
            <div class="img">
              <img :src="square_avatar" alt />
            </div>
            <div class="info">
              <div class="name">Tides of Magic</div>
              <div class="category">Games</div>
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
      square_avatar: require("../../assets/square_avatar.png")
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
  --size: 3.25vmax;
  .VueCarousel-navigation-button {
    background: $primary !important;
    border-radius: 50%;
    height: var(--size);
    width: var(--size);
    padding: 0 !important;
    color: $white !important;
    font-size: 1.25vmax !important;
    &:focus {
      outline: none !important;
    }
  }
  .VueCarousel-navigation-next {
    right: calc(var(--size) / 2) !important;
  }
  .VueCarousel-navigation-prev {
    left: calc(var(--size) / 2) !important;
  }
}
#screenshot_similar {
  --screenshot_size: 38vmax;
  padding: 3.5vmax 18vmax 0 21vmax;
  display: grid;
  grid-template-areas: "screenshots similar";
  grid-template-columns: var(--screenshot_size) auto;
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
    --margin: 0.9vmax;
    margin-left: 4.5vmax;
    grid-area: similar;
    hr {
      margin: var(--margin) 0;
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
        .img {
          --width: 4vmax;
          width: var(--width);
          background: linear-gradient(to right, #0095fd, #00cee3);
          display: flex;
          justify-content: center;
          padding: 0.15vmax;
          border-radius: 0.25rem;
          img {
            width: 100%;
          }
          img {
            width: var(--width);
          }
        }
        .info {
          width: 100%;
          margin-left: 1.2vmax;
          .name,
          .category {
            color: $secondary;
            font-size: 1vmax;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-areas: "screenshots" "similar";
  }
}
</style>