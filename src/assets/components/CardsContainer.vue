<template>
    <div class="row">
        <div class="col-12 col-lg-3 col-md-6" v-bind:key="product" v-for="product in products">
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