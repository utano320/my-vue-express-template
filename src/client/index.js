import Vue from 'vue';
import App from './App.vue';

console.log(process.env.API_HOST);

new Vue({
  el: '#app',
  render: h => h(App)
});
