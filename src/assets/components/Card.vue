<template>
    <div class="card">
        <img v-bind:src="product.images.main" v-bind:alt="product.name" class="card-img-top" />
        <div class="card-body">

            <h5 class="card-title">{{product.name}}</h5>
            
            <div>
                <b-button v-b-modal.modal-1>Get Price</b-button>

                <b-modal id="modal-1">
                    <p class="my-4">{{product.name}}</p>
                </b-modal>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Card',
    props: ['product']
}

</script>