<template>
  <section id="intro_section">
    <div class="avatar_pic">
      <img :src="avatar_pic" alt />
    </div>
    <div class="dapp_info">
      <div class="dapp_name">{{ $route.params.dappName }}</div>
      <ul>
        <li class="info_item">Пользователей за 24 часа: 0</li>
        <li class="info_item">Баланс: 6 K($)</li>
        <li class="info_item">ETH / GAMES</li>
        <li class="info_item">EN, RU</li>
      </ul>
    </div>
    <div class="website_button">
      <div class="button">перейти на сайт</div>
    </div>
    <div class="description">
      0xUniverse - an online game, where you become
      an explorer of a blockchain-based galaxy. In order
      to figure out all tricks, users need to conquer all the
      planets, extract resources and build spaceships. You can earn money on this: any planet can be put up
      for sale at auction. The general principle - the more
      planets discovered, the more resources collected.
    </div>
    <div class="whitepaper_button">
      <div class="label">Смарт контракты</div>
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
      avatar_pic: require("../../assets/circular_avatar.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#intro_section {
  padding: 0 21.5vmax;
  display: grid;
  --margin_left_part: 1vmax;
  grid-template-columns: 49% 51%;
  grid-template-areas:
    "avatar_pic description"
    "dapp_info description"
    "website_button whitepaper_button";
  .avatar_pic {
    grid-area: avatar_pic;
    padding: 1.3vmax 0 0.75vmax;
    img {
      width: 8vmax;
    }
  }
  .dapp_info {
    grid-area: dapp_info;
    margin-left: var(--margin_left_part);
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
    margin-left: var(--margin_left_part);
    display: flex;
    .button {
      padding: 0.5vmax 1.5vmax;
      display: flex;
      align-items: center;
      background-color: $primary;
      color: $white;
      cursor: pointer;
      font-size: 0.9vmax;
      border-radius: 0.25rem;
    }
  }
  .description {
    grid-area: description;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1.5vmax;
    line-height: 150%;
  }
  .whitepaper_button {
    grid-area: whitepaper_button;
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
  @media (max-width: 768px) {
    grid-template-areas:
      "avatar_pic avatar_pic"
      "description description"
      "dapp_info website_button"
      "whitepaper_button whitepaper_button";
  }
}
</style>
