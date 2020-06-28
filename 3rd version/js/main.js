// Ready translated locale messages
const messages = {
    en: {
        message: {
            hello: 'hello world',
        },
        button: {
            submit_dapp: 'submit dapp',
            iso639_1: 'en',

        },
        placeholder: {
            search: 'search',
        },
        alt: {
            select_language: 'select language'
        },


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
        },
        button: {
            submit_dapp: 'Разместить dapp',
            iso639_1: 'ru',
        },
        placeholder: {
            search: 'Поиск',
        },


    },


}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages, // set locale messages

})


// Create a Vue instance with `i18n` option
new Vue({
    i18n,
    methods: {
        // reverseMessage: function() {
        //     this.mensagem = this.mensagem.split('').reverse().join('')
        // }
    },
    data: {
        // mensagem: 'Hello Vue.js!',
        // teste: i18n.messages[i18n.locale].message.hello,
        background: "img/background.png",
        navbar_background: "img/navbar_background.png",
        logo_background: "img/logo_background.png",
        logo: "img/logo.png",
        search_field: "img/search_field.png",
        language: "img/language.png",
    },
}).$mount('#app')