<template>
  <section id="intro_section">
    <div class="avatar_pic">
      <img :src="avatar_pic" alt />
    </div>
    <div class="dapp_info">
      <div class="dapp_name">{{ $route.params.dappName }}</div>
      <ul>
        <li class="info_item">{{$t('intro_section._24h_users')}}: {{k24h_users}}</li>
        <li class="info_item">{{$t('intro_section.balance')}}: {{balance}}</li>
        <li class="info_item uppercase">ETH / {{$t('categories.'+[category])}}</li>
        <li class="info_item uppercase">
          <span
            v-for="(language, index) in languages"
            :key="index"
          >{{language + [index &lt; languages.length -1 ? ", " : ""]}}</span>
        </li>
      </ul>
    </div>
    <div class="website_button">
      <div class="button1">{{$t('intro_section.go_to_the_website')}}</div>
    </div>
    <div class="description">{{description}}</div>
    <div class="smart_contracts_button">
      <div class="label">{{$t('intro_section.smart_contracts')}}</div>
      <div class="icon">v</div>
    </div>
  </section>
  <!-- !Intro Section -->
</template>

<script>
export default {
  name: "IntroSection",
  data() {
    return {
      avatar_pic: require("../../assets/circular_avatar.png"),
      k24h_users: 0,
      balance: "6 K($)",
      chain: "eth",
      category: "games",
      languages: ["en", "ru"],
      description: `0xUniverse - an online game, where you become
      an explorer of a blockchain-based galaxy. In order
      to figure out all tricks, users need to conquer all the
      planets, extract resources and build spaceships. You can earn money on this: any planet can be put up
      for sale at auction. The general principle - the more
      planets discovered, the more resources collected.`
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
.uppercase {
  text-transform: uppercase;
}
#intro_section {
  padding: 0 21.5vmax;
  display: grid;
  $margin_left_part: 1vmax;
  grid-template-columns: 49% 51%;
  grid-template-areas:
    "avatar_pic description"
    "dapp_info description"
    "website_button smart_contracts_button";
  .avatar_pic {
    grid-area: avatar_pic;
    padding: 1.3vmax 0 0.75vmax;
    img {
      width: 8vmax;
    }
  }
  .dapp_info {
    grid-area: dapp_info;
    margin-left: $margin_left_part;
    .dapp_name {
      font-size: 1.25vmax;
    }
    ul {
      margin-bottom: 1.5vmax;
      .info_item {
        color: $secondary;
        font-size: 1.05vmax;
      }
    }
  }
  .website_button {
    grid-area: website_button;
    margin-left: $margin_left_part;
    display: flex;
  }
  .description {
    grid-area: description;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.5vmax;
    line-height: 150%;
  }
  .smart_contracts_button {
    grid-area: smart_contracts_button;
    display: flex;
    .label {
      cursor: pointer;
      color: $primary;
      font-size: 1.25vmax;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    .icon {
      cursor: pointer;
      margin-left: 0.75vmax;
      display: flex;
      align-items: center;
      font-family: "Futura PT Book";
      font-size: 1.5vmax;
      color: rgb(72, 72, 72);
      transform: matrix(1.74836190322405, 0, 0, 0.89461237895896, 0, 0);
    }
  }
  @media (max-width: $breakpoint-tablet) {
    grid-template-areas:
      "avatar_pic avatar_pic"
      "description description"
      "dapp_info website_button"
      "smart_contracts_button smart_contracts_button";
  }
}
</style>
