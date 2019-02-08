import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Shop from './components/Shop.vue';
import Basket from './components/Basket.vue';
import E404 from './components/E404.vue';
import {store} from './store/store';

const routes = [
	{path:'', redirect: {name: 'shop'}},
	{name:'basket', path:'/basket', component:Basket, meta: {title: 'the basket'}},
	{name:'shop', path:'/shop', component:Shop, meta: {title: 'the shop'}},
	{path:'*', component: E404, meta: {title: '404'}}
];

export const router = new VueRouter({
	routes,
	mode: 'history',
});

router.afterEach((toRoute, fromRoute) => {
    window.document.title = toRoute.meta.title
})

