import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Highchart from "highcharts/highcharts";
import HighchartsVue from "highcharts-vue";
import highcharts3d from 'highcharts/highcharts-3d'
import stockInit from "highcharts/modules/stock";
Vue.config.productionTip = false

stockInit(Highchart);
highcharts3d(Highchart)
Vue.use(HighchartsVue);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

