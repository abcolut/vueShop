<template>
<section>
    <input  
        v-model="count" 
        size = "2" 
        type = "number" 
        min = "0" 
        class = "width100"
    >        
    </input> 
    <br>
    <button 
        @click = "removeProductFromBasket(i)" 
        class = "width100"
    >
        Remove
    </button>
</section>
</template>

<script>
    import {mapGetters} from 'vuex';  
	export default {
        props: {
            i:Number
        },
        data () {
            return{}
        },
        computed:{   
            ...mapGetters('basket', {basket:'getBasket'}),       
            count:{
                // to read new VUE count for "i" good
                get(){
                    return this.basket[this.i].count
                },
                // to set new VUE count from edit field
                set(newValue){
                    this.$store.commit('basket/setAmount', {i:this.i, count:newValue})
                }
            }
        },
		methods:{            
            // remove this good
            removeProductFromBasket(i){
                this.$store.commit('basket/removeProductFromBasket', {i:i})
            }
        }
    }
</script>

<style scoped>
button{
    margin:3px;
}
input{
    margin:3px;
}
.width100{
    width:100%
}
   
</style>