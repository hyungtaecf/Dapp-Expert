import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DappDetail from '@/components/DappDetail'
import SubmitDapp from '@/components/SubmitDapp'
import PrivacyPolicy from '@/components/PrivacyPolicy'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/submit_dapp',
            name: 'SubmitDapp',
            component: SubmitDapp
        }, {
            path: '/privacy_policy',
            name: 'PrivacyPolicy',
            component: PrivacyPolicy
        }, {
            path: '/dapp/:dappName',
            name: 'DappDetail',
            component: DappDetail
        },
        {
            path: "*",
            name: "404",
            component: {
                template: '<h1 style="margin: 5vmax 20vmax;">Page Not Found</h1>'
            }
        }
    ]
})