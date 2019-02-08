import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VueResource from 'vue-resource'
Vue.use(VueResource);

export default {
	namespaced: true,
	state: {
		goods:[
            {name:"Product 1", price:1.5, src:"img/1.jpg"},
            {name:"Product 2", price:2.0, src:"img/2.jpg"},
            {name:"Product 3", price:3.5, src:"img/3.jpg"},
            {name:"Product 4", price:2.5, src:"img/4.jpg"},
            {name:"Product 5", price:3.5, src:"img/1.jpg"},
            {name:"Product 6", price:4.5, src:"img/2.jpg"},
        ],
	},
	getters: {
		getGoods(state){
			return state.goods
		},
	},
}
