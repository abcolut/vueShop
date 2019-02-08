import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

export default {
	namespaced: true,
	state: {
		//the format of basket:[{id:2, count:2}, {id:4, count:4}, {id:1, count:1}],
		basket:[],
		basketId:null,
	},
	getters: {
		getBasket(state){return state.basket},
		getBasketId(state){	return state.basketId},
	},
	mutations:{
		// add new product from shop. Sort the products and calculation of amounts
		removeProductFromBasket(state, data){ 
			var i = data.i
            state.basket.splice(i, 1)
			this.dispatch("basket/saveBasket")
		},
		// set amount of count while editing the EditCount.vue
		setAmount(state, data){ 
			var i = data.i
			var count = data.count
			state.basket[i].count = +count	

			this.dispatch("basket/saveBasket")
		},
		// remove all products from basket
		removeBasket(state, index){ 
			state.basket = []					
			this.dispatch("basket/saveBasket")
		},
		// add new product from shop. Sort the products and calculation of amounts
		addGood(state,id){
			state.basket.unshift({id:id,count:1})
            var flag = false;
            for (var i = 1; i < state.basket.length; i++){
                if (state.basket[i].id == state.basket[0].id){
                    flag=true    
                    break                    
                }
            }
            if (flag == true){
                state.basket[0].count = state.basket[0].count + state.basket[i].count
                state.basket.splice(i,1)
            }
			this.dispatch("basket/saveBasket")
		},
		// to set basket id from cookies
		setBasketId(state,data){
			state.basketId = data;
		},
		// to set data of basket
		setBasket(state,data){
			state.basket = data;
		}
	},
	actions:{
		// read basket Id from cookies
		readbasketId(){
			var basketId = VueCookie.get('basketId');
			if (basketId == null) {
				basketId = randString(20);
				VueCookie.set('basketId',basketId, 300);
			}
			this.commit('basket/setBasketId', basketId);
			this.dispatch('basket/readBasket');
		},   
		// read basket data for Id from server
		readBasket(){
			var data = {basket:this.state["basket"].basketId}
			Vue.http.post(
				this.state.serverDir + "readBasket.php", data)
				.then(response => {
					return response.json()
				})
				.then(data => {
					this.commit('basket/setBasket', data);
					return;
					
				}, response => {
					console.error("??? ERROR to get readBasket ", response);
				});
		},
		// save basket data to server
		saveBasket(){
			var d = JSON.stringify(this.state["basket"].basket)
			var data = {basket:this.state["basket"].basketId, data:d}
			Vue.http.post(
				this.state.serverDir+"saveBasket.php", data)
				.then(response => {
					return response.json()
				})
				.then(data => {
					return;					
				}, response => {
					console.error("??? ERROR to get savebasket ", response);
				});
		},
	}
}

function randString(v = 5) {
  var text = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < v; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text;
}
