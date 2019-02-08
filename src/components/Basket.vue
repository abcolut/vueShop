<template>
<section>
    <h2>Basket </h2>
    <p align=center>Id: {{basketId}}</p>
    <div v-for="b,i of basket" class="elements"> 
        <div class=good>
            {{goods[basket[i].id].name}}
            <br><img :src='srcGood(i)' height=50>
            <br><i>Price:  {{goods[basket[i].id].price}} </i>
            <editCount
                :count="basket[i].count"
                :i="i"
            ></editCount>
        </div>
    </div>

    <br><br>

    <div>
        <button @click="removeBasket()">Clear of basket</button>
    </div>

    <br>

    <div>
     Basket amount: <b>{{basketSum()}}</b>$
    </div>
<br>

<router-link :to="{name: 'shop'}">Go to shop</router-link>


</section>
</template>

<script>    
    import {mapGetters} from 'vuex';  
    import editCount from "./EditCount.vue";

	export default {
        components:{editCount}, 
        data () {
            return{       
            }
        },
        computed:{
            ...mapGetters('goods', {goods: 'getGoods'}),
            ...mapGetters('basket', {basket: 'getBasket'}), 
            ...mapGetters('basket', {basketId: 'getBasketId'}),         
            ...mapGetters({serverDir:'getServerDir'}),
        },
		methods:{	
            // get image src
            srcGood(i){
                return this.serverDir + this.goods[this.basket[i].id].src
            },
            // calculate ste sum of goods
            basketSum(){
                var sum=0;
                for (var i = 0; i < this.basket.length; i++){
                    sum = sum + this.basket[i].count * this.goods[this.basket[i].id].price
                }
                return sum
            },
            removeBasket(){   
                this.$store.commit("basket/removeBasket")
                this.$router.push({name:"shop"})
            },
        },	
    }

</script>

<style scoped>
.elements{
    display: inline-block;
}
.good{
    border: 1px solid #fee5fe;
    padding: 10px;
    text-align:center;    
}
.addGood{
    margin-top:5px;
    width:100%;
}

</style>