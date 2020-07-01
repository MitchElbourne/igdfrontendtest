<template>
    <div class="card">
        <img class="card-img-top">
        <div class="card-body">

            <img v-bind:src="product.imageThumb" v-bind:alt="product.name" class="card-img-top" />

            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.descripton}}</p>

            <button class="btn">View Price</button>

        </div>
    </div>
</template>


<script>
export default {
    name: 'Card',
    props: ['product']
}
</script>