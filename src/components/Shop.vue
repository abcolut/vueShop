<template>
<section>
    <h2>Products from shop</h2>
    <div>
        You select <b> <span> {{basketCount()}} </span> </b> goods
    </div>
    <br>
    <div v-for="g, i of goods" class="elements"> 
        <div class="good">
            <b> {{g.name}} </b>
            <br>
            <img 
                :src = "srcGood(i)"
                height = "50"
            >
            <br><i>price: {{g.price}}</i>
            <br>
            <button 
                @click = "addGood(i)" 
                class = "addGood"
             >
                +
            </button>
        </div>
    </div>
    <br>
    <router-link 
        :to="{name: 'basket'}"
    >
        Go to basket
    </router-link>

</section>
</template>

<script>    
    import {mapGetters} from 'vuex';    
	export default {
        components:{}, 
        data () {
            return{        
            }
        },
        computed:{          
            ...mapGetters('goods', {goods:'getGoods'}),
            ...mapGetters('basket', {basket:'getBasket'}),
            ...mapGetters('basket', {basketId:'getBasketId'}),        
            ...mapGetters({serverDir:'getServerDir'}),
        },
		methods:{	
            // Get image code
            srcGood(i){
                return this.serverDir + this.goods[i].src
            },
            // add product to VUES store
            addGood(id){
                this.$store.commit('basket/addGood', id)
            },
            //Counting the quantity of goods
            basketCount(){
                var count = 0;
                for(var i = 0; i < this.basket.length; i++){
                    count = count + this.basket[i].count
                }
                return count
            },
        },	
    }

</script>

<style scoped>
.elements{
    display: inline-block;
}
.good{
    border: 1px solid #def5ae;
    margin: 10px;
    padding: 10px;
    text-align:center;    
}
.addGood{
    margin-top:5px;
    width:100%;
}
</style>