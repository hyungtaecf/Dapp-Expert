// Ready translated locale messages
const messages = {
    en: {
        message: {
            hello: 'hello world',
            blockchains: 'blockchains',
            categories: 'categories',
            chain: 'chain',
            category: 'category',
            balance: 'balance',
            users: 'users',
            volume: 'volume',
            dapp_expert_score: { _0: "Dapp", _1: "Expert", _2: "Score" },
            sort: "sort",
            see_more: "see more",
            blockchains_data_info: "blockchain's data info"
        },
        button: {
            submit_dapp: 'submit dapp',
            iso639_1: 'en',
            all: 'all',
            _24h: '24h',
            _7d: '7d',
        },
        placeholder: {
            search: 'search',
        },
        alt: {
            select_language: 'select language'
        },
        categories: {
            all: "all",
            collectibles: "collectibles",
            exchanges: "exchanges",
            gambling: "gambling",
            games: "games",
            high_risk: "high-risk",
            marketplaces: "marketplaces",
            other: "other",
        },
        info_items: {
            total_dapps: {
                _0: "Total",
                _1: "Dapps"
            },
            smart_contracts: {
                _0: "Smart",
                _1: "Contracts"
            },
            _24h_users: {
                _0: "24h",
                _1: "Users"
            },
            _24h_transactions: {
                _0: "24h",
                _1: "Transactions"
            },
            _24h_volume: {
                _0: "24h",
                _1: "Volume"
            },
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界',
        },
        button: {
            iso639_1: 'ja',
        },
    },
    ru: {
        message: {
            hello: 'hello world',
            blockchains: 'Блокчейн',
            categories: 'Категории',
            chain: 'Блокчейн',
            category: 'Категория',
            balance: 'Баланс',
            users: 'Пользователи',
            volume: 'Оборот',
            dapp_expert_score: { _0: "Dapp", _1: "Expert", _2: "индекс" },
            see_more: "Показать больше",
            blockchains_data_info: "Данные блокчейна",
        },
        button: {
            submit_dapp: 'Разместить dapp',
            iso639_1: 'ru',
            _24h: '24 часа',
            _7d: '7 дней',
        },
        placeholder: {
            search: 'Поиск',
        },
        info_items: {
            total_dapps: { _0: "Всего", _1: "Dapp ов" },
            smart_contracts: { _0: "Смарт", _1: "Контракты" },
            _24h_users: { _0: "Пользователей", _1: "за 24 часа" },
            _24h_transactions: { _0: "Транзакции", _1: "за 24 часа" },
            _24h_volume: { _0: "Объем", _1: "за 24 часа" },
        }
    },
}

const dapp_list = {
    candy_pop_duel: {
        name: "Candy Pop Duel",
        chain: "EOS",
        category: "Games",
        balance: {
            value: "$ 446.40 M",
            percent: "0.01%",
        },
        users: {
            value: "2 K",
            percent: "0.01%",
        },
        volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
        },
        txs: "3 K",
        score: "99.11",
        hover: false,
    },
    candy_pop_duel2: {
        name: "Candy Pop Duel2",
        chain: "EOS",
        category: "Games",
        balance: {
            value: "$ 446.40 M",
            percent: "0.01%",
        },
        users: {
            value: "2 K",
            percent: "0.01%",
        },
        volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
        },
        txs: "3 K",
        score: "99.11",
        hover: false,
    },
    candy_pop_duel3: {
        name: "Candy Pop Duel3",
        chain: "EOS",
        category: "Games",
        balance: {
            value: "$ 446.40 M",
            percent: "0.01%",
        },
        users: {
            value: "2 K",
            percent: "0.01%",
        },
        volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
        },
        txs: "3 K",
        score: "99.11",
        hover: false,
    },
    candy_pop_duel4: {
        name: "Candy Pop Duel4",
        chain: "EOS",
        category: "Games",
        balance: {
            value: "$ 446.40 M",
            percent: "0.01%",
        },
        users: {
            value: "2 K",
            percent: "0.01%",
        },
        volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
        },
        txs: "3 K",
        score: "99.11",
        hover: false,
    },
    candy_pop_duel5: {
        name: "Candy Pop Duel5",
        chain: "EOS",
        category: "Games",
        balance: {
            value: "$ 446.40 M",
            percent: "0.01%",
        },
        users: {
            value: "2 K",
            percent: "0.01%",
        },
        volume: {
            value: "$ 186.47 K",
            percent_left: "15.41%",
            percent_right: "-7.37%",
        },
        txs: "3 K",
        score: "99.11",
        hover: false,
    },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'ru', // set locale
    silentTranslationWarn: true,
    messages, // set locale messages

})

const Foo = { template: '<div>submit dapp</div>' }
var badRoute = Vue.component('bad-route', {
    template: '<div id="bad_route"><h1>Page Not Found</h1><p>Sorry, but the page you were trying to view does not exist.</p></div>'
});
var vue_router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [{
            path: '/',
        }, {
            path: '*', // should be last, otherwise matches everything
            component: badRoute,
            name: 'NOT FOUND'
        },
        { path: '/submit_dapp', component: Foo },
    ]
});

// Create a Vue instance with `i18n` option
new Vue({
    i18n,
    router: vue_router,
    data: {
        background: "img/background.png",
        navbar_background: "img/navbar_background.png",
        blockchain_background: "img/blockchain_background.png",
        logo_background: "img/logo_background.png",
        logo: "img/logo.png",
        search_field: "img/search_field.png",
        language: "img/language.png",
        top_ads: {
            big_ad: { img: "img/top_ad_big.png", alt: "2020 Q1 DAPP MARKET REPORT" },
            small_ad: [
                { img: "img/small_ad_1.png", alt: "Race Your Puppy On Blockchain" },
                { img: "img/small_ad_2.png", alt: "Sports and esports betting right from your phone" },
                { img: "img/small_ad_3.png", alt: "ChainZ Arena: 5 Days, 5 Events" },
                { img: "img/small_ad_4.png", alt: "RedKit BRICKS" },
            ],
        },
        trapezio_blue_btn: "img/trapezio_blue_btn.png",
        trapezio_grey_btn: "img/trapezio_grey_btn.png",
        blockchains: {
            eos: { acronym: "eos" },
            eth: { acronym: "eth" },
            iost: { acronym: "iost" },
            loom: { acronym: "loom" },
            neo: { acronym: "neo" },
            tron: { acronym: "tron" },
            vechain: { acronym: "vechain" },
        },
        sort_icon: "img/sort_icon.svg",
        dapp_list: dapp_list,
        table_item: "img/table_item.png",
        table_item_active: "img/table_item_active.png",
        blank_square_avatar: "img/blank_square_avatar.png",
        percent_bar: "img/percent_bar.png",
        percent_bar_background: "img/percent_bar_background.png",
        percent_bar_background_active: "img/percent_bar_background_active.png",
        info_items: {
            total_dapps: "394",
            smart_contracts: "2,187",
            _24h_users: "49,858",
            _24h_transactions: "185,251",
            _24h_volume: "6,489,418",
        }
    },
}).$mount('#app')