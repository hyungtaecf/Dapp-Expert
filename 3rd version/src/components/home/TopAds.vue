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