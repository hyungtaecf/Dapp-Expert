<template>
  <section id="top_ads">
    <div class="big_ad">
      <a href="#">
        <div class="img_container">
          <img :src="big_ad.img" :alt="big_ad.alt" :title="big_ad.alt" />
        </div>
      </a>
    </div>
    <div class="small_ads">
      <a href="#" v-for="(ad, key) in small_ad" :key="key">
        <div class="img_container">
          <img :src="ad.img" :alt="ad.alt" :title="ad.alt" />
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "TopAds",
  data() {
    return {
      big_ad: {
        img: require("../../assets/top_ad_big.png"),
        alt: "2020 Q1 DAPP MARKET REPORT"
      },
      small_ad: [
        {
          img: require("../../assets/small_ad_1.png"),
          alt: "Race Your Puppy On Blockchain"
        },
        {
          img: require("../../assets/small_ad_2.png"),
          alt: "Sports and esports betting right from your phone"
        },
        {
          img: require("../../assets/small_ad_3.png"),
          alt: "ChainZ Arena: 5 Days, 5 Events"
        },
        {
          img: require("../../assets/small_ad_4.png"),
          alt: "RedKit BRICKS"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#top_ads {
  display: grid;
  $img_height: 17.5vmax;
  grid-template-areas: "big_ad small_ads";
  padding: 1.5vmax 19vmax 2vmax;
  .big_ad {
    grid-area: big_ad;
    .img_container {
      img {
        height: $img_height;
      }
    }
  }
  .small_ads {
    grid-area: small_ads;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: #{$img_height / 2} #{$img_height / 2};
    a {
      .img_container {
        img {
          height: #{$img_height / 2};
        }
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    // $img_height: 17.5vmax;
    width: 100%;
    grid-template-areas: "big_ad" "small_ads";
    padding: 1.5vmax 1vmax;
    row-gap: 0.75vmax;
    .big_ad {
      .img_container {
        img {
          height: auto;
          width: 100%;
        }
      }
    }
    .small_ads {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      a {
        .img_container {
          img {
            height: auto;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>