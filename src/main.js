import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
// Vue.http.option.root = 'http://plrom.niracler.com:8000';

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.filter('msgFormat', function (msg, num=150) {
  if (!msg) return '';
  if (msg.length > num) {
    return msg.slice(0, num) + '...'
  }
  return msg
});
