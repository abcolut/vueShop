import Vue from 'vue';
import App from './App.vue';

import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

var VueResource = require('vue-resource');
Vue.use(VueResource);

import {store} from './store/store';
import {router} from './routes.js';

Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOn3533N3b3Jk';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

new Vue({
  data(){
    return {userId:0,
    }
  },
  el: '#app',
  store,
  router,
  render: h => h(App),

  created(){  
  	this.$store.dispatch("basket/readbasketId")  
  }

})


