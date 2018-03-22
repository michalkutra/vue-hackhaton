<!-- ./src/components/Home.vue -->
<template>
    <div>
        <div class="title">
            <h1>{{msg}}</h1>
            <button @click="getAllProducts">GET ALL PRODUCTS</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to MANEL' + this.$store.state.cart
            }
        },
        methods:{
            getAllProducts(){
                this.$store.dispatch('allProducts');;
            }
        }
    }


</script>