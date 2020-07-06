<template>
  <section id="dapp_table">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>
            <div class="period_select">
              <div class="period_button" @click="periodSelect('24h')">
                <div
                  id="_24h"
                  class="period active"
                  :style="{ 'background': 'url(' + [period.p_24h.active? trapezio_blue_btn : trapezio_grey_btn] + ')' }"
                >{{$t('button._24h')}}</div>
              </div>
              <div class="period_button" @click="periodSelect('7d')">
                <div
                  id="_7d"
                  class="period"
                  :style="{ 'background': 'url(' + [period.p_7d.active? trapezio_blue_btn : trapezio_grey_btn] + ')' }"
                >{{$t('button._7d')}}</div>
              </div>
            </div>
          </th>
          <th>
            <div class="thead_item">{{$t('message.chain')}}</div>
          </th>
          <th>
            <div class="thead_item">{{$t('message.category')}}</div>
          </th>
          <th>
            <div class="thead_item">
              <div class="help" title="About">
                <span>?</span>
              </div>
              <div>{{$t('message.balance')}}</div>
              <div class="sort">
                <img :src="sort_icon" :alt="$t('message.sort')" />
              </div>
            </div>
          </th>
          <th>
            <div class="thead_item">
              <div class="help" title="About">
                <span>?</span>
              </div>
              <div>{{$t('message.users')}}</div>
              <div class="sort">
                <img :src="sort_icon" :alt="$t('message.sort')" />
              </div>
            </div>
          </th>
          <th>
            <div class="thead_item">
              <div class="help" title="About">
                <span>?</span>
              </div>
              <div>{{$t('message.volume')}}</div>
              <div class="sort">
                <img :src="sort_icon" :alt="$t('message.sort')" />
              </div>
            </div>
          </th>
          <th>
            <div class="thead_item">
              <div class="help" title="About">
                <span>?</span>
              </div>
              <div>TXS</div>
              <div class="sort">
                <img :src="sort_icon" :alt="$t('message.sort')" />
              </div>
            </div>
          </th>
          <th>
            <a href>
              <div class="thead_item">
                <div class="breaklines">
                  {{$t('message.dapp_expert_score._0')}}
                  <br />
                  {{$t('message.dapp_expert_score._1')}}
                  <br />
                  {{$t('message.dapp_expert_score._2')}}
                </div>
              </div>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(dapp, key, index) in dapp_list">
          <tr
            :key="key"
            @mouseover="dapp.hover = true"
            @mouseleave="dapp.hover = false"
            @click="goToDappPage(dapp.name)"
            v-if="index<number_of_items"
          >
            <td>
              <div class="row_bg" :style="{ 'background': 'url(' + table_item + ')' }">
                <span class="bg_active" :style="{ 'background': 'url(' + table_item_active + ')' }"></span>
              </div>
              <div class="picture_and_name">
                <div class="picture">
                  <img :src="blank_square_avatar" alt />
                </div>
                <div class="dapp_name">{{dapp.name}}</div>
              </div>
            </td>
            <td>
              <div class="cell">
                <div class="value">{{dapp.chain}}</div>
              </div>
            </td>
            <td>
              <div class="cell">
                <div class="value">{{dapp.category}}</div>
              </div>
            </td>
            <td>
              <div class="cell">
                <div class="value">{{dapp.balance.value}}</div>
                <div class="percent_row">
                  <div class="percent_left">{{dapp.balance.percent}}</div>
                </div>
              </div>
            </td>
            <td>
              <div class="cell">
                <div class="value">{{dapp.users.value}}</div>
                <div class="percent_row">
                  <div class="percent_left">{{dapp.users.percent}}</div>
                </div>
              </div>
            </td>
            <td>
              <div class="cell">
                <div class="value">{{dapp.volume.value}}</div>
                <div class="percent_row">
                  <div class="percent_left">{{dapp.volume.percent_left}}</div>
                  <div class="percent_right">{{dapp.volume.percent_right}}</div>
                </div>
                <div class="percent_bar_container">
                  <div class="percent_bar">
                    <img
                      v-if="dapp.hover"
                      class="percent_bar_background"
                      :src="percent_bar_background_active"
                    />
                    <img v-else class="percent_bar_background" :src="percent_bar_background" />
                    <img class="current_percentage" :src="percent_bar" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="cell">
                <div class="value">{{dapp.txs}}</div>
              </div>
            </td>
            <td>
              <div class="cell">
                <div class="value">{{dapp.score}}</div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="dapp_list_mobile">
      <div class="period_select">
        <div
          id="_24h"
          class="period active"
          :style="{ 'background': 'url(' + [period.p_24h.active? trapezio_blue_btn_mobile : trapezio_grey_btn_mobile] + ')' }"
          @click="periodSelect('24h')"
        >{{$t('button._24h')}}</div>
        <div
          id="_7d"
          class="period"
          :style="{ 'background': 'url(' + [period.p_7d.active? trapezio_blue_btn_mobile : trapezio_grey_btn_mobile] + ')' }"
          @click="periodSelect('7d')"
        >{{$t('button._7d')}}</div>
      </div>
      <div class="dapp_list">
        <template v-for="(dapp, key, index) in dapp_list">
          <div
            class="dapp_row"
            :key="key"
            v-if="index<number_of_items"
            @click="goToDappPageMobile(index, dapp.name)"
          >
            <div
              v-show="dapp.token"
              class="token"
              :style="{'background':'url('+ trapezio_blue_btn +')'}"
            >{{$t('dapp_table.token')}}</div>
            <div
              :class="{bg:1,active:active_row===index}"
              :style="{'background':'url('+[active_row===index?table_item_mobile_active:table_item_mobile]+')'}"
            >
              <div class="upper_row">
                <div class="avatar_pic">
                  <img :src="blank_square_avatar_mobile" :alt="dapp.name" />
                </div>
                <div class="dapp_name">{{dapp.name}}</div>
                <div class="score_col">
                  <div class="score">{{dapp.score_mobile}}</div>
                  <div class="score_percent">{{dapp.score_percent}}</div>
                </div>
              </div>
              <div class="percent_bar">
                <div
                  class="percent_bar_left"
                  :style="{'background':'url('+percent_bar_left_mobile+')'}"
                ></div>
                <div
                  class="percent_bar_center"
                  :style="{'background':'url('+percent_bar_center_mobile+')'}"
                ></div>
                <div
                  class="percent_bar_right"
                  :style="{'background':'url('+percent_bar_right_mobile+')'}"
                ></div>
              </div>
              <div class="lower_row">
                <div class="percent_left">{{dapp.volume.left_value}}</div>
                <div class="percent_center">{{dapp.volume.center_value}}</div>
                <div class="percent_right">{{dapp.volume.right_value}}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="see_more">
      <div class="text" @click="seeMore">{{$t('message.see_more')}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DappTable",
  methods: {
    goToDappPage(dapp_name) {
      this.$router.push({
        name: "DappDetail",
        params: { dappName: dapp_name }
      });
    },
    async goToDappPageMobile(index, dapp_name) {
      this.active_row = index;
      window.setTimeout(() => {
        this.$router.push({
          name: "DappDetail",
          params: { dappName: dapp_name }
        });
      }, 75);
    },
    seeMore() {
      this.number_of_items += this.plus_items;
    },
    periodSelect(period) {
      if (period === "7d") {
        this.period.p_24h.active = false;
        this.period.p_7d.active = true;
      } else {
        this.period.p_24h.active = true;
        this.period.p_7d.active = false;
      }
    }
  },
  data() {
    return {
      number_of_items: 5,
      plus_items: 3,
      active_row: -1,
      trapezio_blue_btn: require("../../assets/trapezio_blue_btn.png"),
      trapezio_blue_btn_mobile: require("../../assets/trapezio_blue_btn_mobile.png"),
      trapezio_grey_btn: require("../../assets/trapezio_grey_btn.png"),
      trapezio_grey_btn_mobile: require("../../assets/trapezio_grey_btn_mobile.png"),
      sort_icon: require("../../assets/sort_icon.svg"),
      table_item: require("../../assets/table_item.png"),
      table_item_mobile: require("../../assets/table_item_mobile.png"),
      table_item_active: require("../../assets/table_item_active.png"),
      table_item_mobile_active: require("../../assets/table_item_mobile_active.png"),
      blank_square_avatar: require("../../assets/blank_square_avatar.png"),
      blank_square_avatar_mobile: require("../../assets/blank_square_avatar_mobile.png"),
      percent_bar: require("../../assets/percent_bar.png"),
      percent_bar_background: require("../../assets/percent_bar_background.png"),
      percent_bar_background_active: require("../../assets/percent_bar_background_active.png"),
      percent_bar_center_mobile: require("../../assets/percent_bar_center_mobile.png"),
      percent_bar_left_mobile: require("../../assets/percent_bar_left_mobile.png"),
      percent_bar_right_mobile: require("../../assets/percent_bar_right_mobile.png"),
      test: true,
      period: {
        p_24h: {
          active: true
        },
        p_7d: {
          active: false
        }
      },
      dapp_list: {
        candy_pop_duel: {
          name: "Candy Pop Duel",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false,
          token: true
        },
        candy_pop_duel2: {
          name: "Candy Pop Duel2",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false,
          token: true
        },
        candy_pop_duel3: {
          name: "Candy Pop Duel3",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false
        },
        candy_pop_duel4: {
          name: "0xUniverse",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false,
          token: true
        },
        other_game: {
          name: "OtherGame",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false,
          token: true
        },
        awesome_game: {
          name: "Awesome Game",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false
        },
        revolution_of_dapps: {
          name: "Revolution of Dapps",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false
        },
        fps_300: {
          name: "FPS 300",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false,
          token: true
        },
        encrypts: {
          name: "Encrypts",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false
        },
        ninja_monkey: {
          name: "Ninja Monkey",
          chain: "EOS",
          category: "Games",
          balance: {
            value: "$ 446.40 M",
            percent: "0.01%"
          },
          users: {
            value: "2 K",
            percent: "0.01%"
          },
          volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
            left_value: "$ 0.00 ETH",
            center_value: "$ 5.13M WETH",
            right_value: "$ 3.08 M Others"
          },
          txs: "3 K",
          score: "99.11",
          score_mobile: "68",
          score_percent: "-2.58% ↓",
          hover: false,
          token: true
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/variables";
.triangle {
  border-width: 3px;
  border-color: rgb(12, 135, 242);
  border-style: solid;
  position: absolute;
  left: 1892px;
  top: 1598px;
  width: 16px;
  height: 15px;
  z-index: 179;
}
#dapp_table {
  $percent_bar_height: 0.3vmax;
  $percent_bar_width: 5vmax;
  padding: 0 calc(#{$submenu_body_padding} + #{$submenu_inner_padding});
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.3vmax;
    thead {
      th:first-child {
        width: 0;
      }
      .period_select {
        display: flex;
        .period_button {
          height: $trapezio_button_height;
          width: $trapezio_button_width;
          position: relative;
          cursor: pointer;
          .period {
            $gap: 0.35vmax;
            position: absolute;
            top: 0;
            height: $trapezio_button_height;
            width: $trapezio_button_width;
            background-position: center !important;
            background-size: 100% 100% !important;
            background-repeat: no-repeat !important;
            text-transform: uppercase;
            font-size: 0.6vmax;
            letter-spacing: 0.075vmax;
            color: $white;
            display: flex;
            justify-content: center;
            align-items: center;
            &#_24h {
              left: $gap;
            }
            &#_7d {
              right: $gap;
            }
            &.active {
              font-weight: bold;
            }
          }
        }
      }
      .thead_item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75vmax;
        text-transform: capitalize;
        font-weight: normal;
        color: $secondary;
        .help {
          height: 1vmax;
          width: 1vmax;
          margin: 0.25vmax;
          border: 0.15vmax solid $border-grey;
          border-radius: 50%;
          position: relative;
          &:hover {
            cursor: help;
          }
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 0.75vmax;
            font-weight: lighter;
          }
        }
        .sort {
          margin: 0.25vmax;
          img {
            height: 0.5vmax;
          }
        }
        .breaklines {
          text-align: start;
        }
      }
    }
    tbody {
      &:before {
        content: ".";
        display: block;
        line-height: 1vmax;
        text-indent: -100vw;
      }
      tr {
        position: relative;
        height: $navbar_height;
        $fix_bg_offset: 21.5vmax;
        &:hover {
          cursor: pointer;
          color: $white;
          .bg_active {
            top: 2.15vmax;
            height: 120%;
            transition: ease-in 0.1s;
            opacity: 1;
          }
          .percent_right {
            color: $white !important;
          }
        }
        .row_bg,
        .bg_active {
          position: absolute;
          height: 100%;
          left: calc(50% + #{$fix_bg_offset});
          top: 50%;
          z-index: 5;
          width: calc(100vw - #{$submenu_body_padding} * 2);
          background-position: center !important;
          background-size: 100% 100% !important;
          background-repeat: no-repeat !important;
        }
        .row_bg {
          transform: translate(-50%, -50%);
        }
        .bg_active {
          width: 102%;
          opacity: 0;
          z-index: 6;
          transform: translate(-80%, -50%);
        }
        td {
          position: relative;
          min-width: 4vmax;
          * {
            z-index: 10;
          }
          .dapp_name,
          .value {
            font-size: 0.9vmax;
          }
          .picture_and_name {
            display: flex;
            align-items: center;
            .picture {
              display: flex;
              align-items: center;
              height: 100%;
              img {
                height: calc(#{$navbar_height} - 0.4vmax);
              }
            }
            .dapp_name {
              margin-left: 0.5vmax;
              color: black;
            }
          }
          .cell {
            position: absolute;
            top: 0.75vmax;
            left: 50%;
            transform: translateX(-50%);
            .value {
              text-align: center;
              white-space: nowrap;
            }
            .percent_row {
              padding: 0.25vmax 0;
              display: flex;
              justify-content: space-between;
              font-size: 0.6vmax;
              .percent_right {
                color: $primary;
              }
            }
            .percent_bar_container {
              .percent_bar {
                position: relative;
                height: $percent_bar_height;
                width: $percent_bar_width;
                .percent_bar_background,
                .current_percentage {
                  height: $percent_bar_height;
                  position: absolute;
                  left: 0;
                  top: 50%;
                  transform: translateY(-50%);
                }
                .percent_bar_background {
                  width: 100%;
                }
                .current_percentage {
                  width: 65%;
                }
              }
            }
          }
        }
      }
    }
  }
  .dapp_list_mobile {
    display: none;
  }
  .see_more {
    width: 100%;
    text-align: right;
    text-transform: capitalize;
    color: $primary;
    text-decoration: underline;
    font-size: 0.8vmax;
    .text {
      padding: 1vmax 2vmax;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    padding: 0;
    table {
      display: none;
    }
    .dapp_list_mobile {
      display: block;
      .period_select {
        display: flex;
        justify-content: end;
        margin: 3.25vmax 1.5vmax;
        .period {
          height: 2.75vmax;
          width: 13.75vmax;
          cursor: pointer;
          background-size: 100% 100% !important;
          text-transform: lowercase;
          font-size: 1.75vmax;
          letter-spacing: 0.075vmax;
          color: $white;
          display: flex;
          justify-content: center;
          align-items: center;
          &.active {
            font-weight: bold;
          }
        }
      }
      // EVERYTHING UNDER .dapp_row USES vw
      .dapp_row {
        $height: 33vw;
        $img_fix: 6.25vw;
        position: relative;
        height: calc(#{$height} - #{$img_fix});
        .token {
          position: absolute;
          top: 0;
          left: 0.4vw;
          z-index: 10;
          text-transform: uppercase;
          background-size: 100% 100% !important;
          font-size: 1.75vw;
          padding: 0.8vw 1.7vw;
          color: $white;
        }
        .bg {
          height: $height;
          position: absolute;
          top: 0;
          background-size: 100% 100% !important;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 2.75vw 10.5vw;
          letter-spacing: 0.1vw;
          &:last-child {
            padding-bottom: 0;
          }
          .upper_row {
            display: flex;
            align-items: center;
            .avatar_pic {
              img {
                height: 12.5vw;
              }
            }
            .dapp_name {
              color: $secondary;
              font-size: 3.5vw;
              font-weight: bold;
              margin-left: 2.5vw;
              width: 37.5vw;
            }
            .score_col {
              display: flex;
              flex-direction: column;
              align-items: end;
              justify-content: space-between;
              height: 100%;
              .score {
                font-size: 4vw;
                font-weight: bold;
                padding: 1vw 0;
              }
              .score_percent {
                font-size: 3vw;
                color: #f00;
                font-weight: bold;
                padding: 0 1vw 1vw 0;
              }
            }
          }
          .percent_bar {
            $lateral_percent: 15.5%;
            width: 100%;
            height: 1.15vw;
            display: grid;
            margin: 1.5vw 0 1vw;
            grid-template-columns:
              $lateral_percent calc(100% - #{$lateral_percent} * 2)
              $lateral_percent;
            * {
              background-size: 100% 100% !important;
              margin: 0 0.5vw;
            }
          }
          .lower_row {
            display: flex;
            justify-content: space-between;
            font-size: 2.75vw;
            .percent_left {
              color: #3971fa;
            }
            .percent_center {
              color: #2f4fbc;
            }
            .percent_right {
              color: #6c97fd;
            }
          }
          &.active {
            .dapp_name {
              color: $white;
            }
          }
        }
      }
    }
    .see_more {
      font-size: 1.15vmax;
      z-index: 10;
      .text {
        padding: 2.5vmax 1vmax;
        text-transform: uppercase;
      }
    }
  }
}
</style>