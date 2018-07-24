import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Router from './router';
import store from './store';

const router = Router(store);

Vue.use(ElementUI);

new Vue({
	el: '#app',
	router,
	store,
  render: h => h(App)
})
