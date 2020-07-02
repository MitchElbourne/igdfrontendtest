<template>
    <div class="card">
        <img v-bind:src="product.images.main" v-bind:alt="product.name" class="card-img-top">
        <div class="card-body">

            <h5 class="card-title">{{product.name}}</h5>
            
           <div>
                <b-button id="show-btn" @click="showModal">Get Price</b-button>

                <b-modal v-bind:ref="'modal-' + product.id" hide-footer hide-header class="modal">
                    <b-button id='close-btn' @click="hideModal"><img src="../close.svg" alt="close-icon"></b-button>
                </b-modal>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'Card',
    props: ['product'],
    data() {
        return {
            modalNumber: null
        }
    },
    methods: {
        showModal() {
            this.$refs['modal-' + this.product.id].show()
        },
        hideModal() {
            this.$refs['modal-' + this.product.id].hide()
        }
    }
}

</script>