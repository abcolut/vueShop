import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VueResource from 'vue-resource'
Vue.use(VueResource);
                              
import goods from './goods.js';
import basket from './basket.js';

export const store = new Vuex.Store({
	modules: {
		goods, 
		basket
	},
	state: {
		//serverDir: "http://localhost/resumeMag/server/",
		serverDir: "https://poskladam.ru/temp/vueshop/server/",
	},
	getters: {
		getServerDir(state){
			return state.serverDir
		}
	},

	strict: process.env.NODE_ENV !== 'production'
});

