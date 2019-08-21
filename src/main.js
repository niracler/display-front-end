import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'


Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');

//全局的过滤器
Vue.filter('msgFormat', function (msg, num = 150) {
    if (!msg) return '';
    if (msg.length > num) {
        return msg.slice(0, num) + '...'
    }
    return msg
});
