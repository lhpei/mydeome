// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import echarts from 'echarts'
//引入中国地图依赖
import 'echarts/map/js/china'
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';
import store from './vuex/store'


Vue.use(VueAMap);
Vue.use(ElementUI);
Vue.use(echarts);
VueAMap.initAMapApiLoader({
  key:'7c56e4642de0c17db75fe98ee00975cc',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation']
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
