<template>
  <section id="dapp_table">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>
            <div class="period_select">
              <div class="button" @click="periodSelect('24h')">
                <div
                  id="_24h"
                  class="period active"
                  :style="{ 'background': 'url(' + [period.p_24h.active? trapezio_blue_btn : trapezio_grey_btn] + ')' }"
                >{{$t('button._24h')}}</div>
              </div>
              <div class="button" @click="periodSelect('7d')">
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
            <td class="row_bg" :style="{ 'background': 'url(' + table_item + ')' }">
              <span class="bg_active" :style="{ 'background': 'url(' + table_item_active + ')' }"></span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
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
      trapezio_blue_btn: require("../../assets/trapezio_blue_btn.png"),
      trapezio_grey_btn: require("../../assets/trapezio_grey_btn.png"),
      sort_icon: require("../../assets/sort_icon.svg"),
      table_item: require("../../assets/table_item.png"),
      table_item_active: require("../../assets/table_item_active.png"),
      blank_square_avatar: require("../../assets/blank_square_avatar.png"),
      percent_bar: require("../../assets/percent_bar.png"),
      percent_bar_background: require("../../assets/percent_bar_background.png"),
      percent_bar_background_active: require("../../assets/percent_bar_background_active.png"),
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
          hover: false
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
          hover: false
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
          hover: false
        },
        candy_pop_duel4: {
          name: "Candy Pop Duel4",
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
          hover: false
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
          hover: false
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
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
          hover: false
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
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
            percent_right: "-7.37%"
          },
          txs: "3 K",
          score: "99.11",
          hover: false
        }
      }
    };
  }
};
</script>