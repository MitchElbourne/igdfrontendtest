<template>
    <div class="row">
        <div class="col-6 col-lg-3 " v-bind:key="product.id" v-for="product in products">
            <Card v-bind:product="product"/>
        </div>
    </div>
</template>
 

<script>

    import Card from './Card.vue'

    export default {
        name: 'CardsContainer',
        components: {
            Card: Card
        },
        props: ['products'],
    }
    
</script>