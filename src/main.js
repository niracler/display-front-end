import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import 'jquery/dist/jquery.js'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min'

//<!--<script src="assets/libs/jquery/dist/jquery.min.js"></script>-->
// <!--&lt;!&ndash; Bootstrap tether Core JavaScript &ndash;&gt;-->
// <!--<script src="assets/libs/popper.js/dist/umd/popper.min.js"></script>-->
// <!--<script src="assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>-->

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
