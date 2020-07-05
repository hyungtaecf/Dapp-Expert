<template>
  <section id="users_also_like">
    <div class="section_title2">{{$t('users_also_like.users_also_like')}}</div>
    <div class="dapps">
      <template v-for="(_, key, index) in 3">
        <router-link
          class="other_dapp_img"
          :to="{name:'DappDetail', params:{dappName:'Tides of Magic'}}"
          :key="index"
        >
          <img :src="square_avatar" alt />
        </router-link>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "UsersAlsoLike",
  data() {
    return {
      square_avatar: require("../../assets/square_avatar.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
#users_also_like {
  padding: 0 $lower_part_padding;
  .dapps {
    display: flex;
    padding: 2vmax 0;
    margin-bottom: 9vmax;
    .other_dapp_img {
      margin-right: 3.5vmax;
    }
  }
}
</style>