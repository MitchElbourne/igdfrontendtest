<template>
    <div class="card">
        <img v-bind:src="product.images.thumb" v-bind:alt="product.name" class="card-img-top">
        <div class="card-body">

            <h5 class="card-title">{{product.name}}</h5>
            
           <div>
                <b-button id="show-btn" @click="showModal">Get Price</b-button>

                <b-modal v-bind:ref="'modal-' + product.id" hide-footer hide-header class="modal">
                    <b-button id='close-btn' @click="hideModal"><img src="../close.svg" alt="close-icon"></b-button>
                    
                    <div class="panel-wrapper">    
                        <div class="left-panel">
                            <img v-bind:src="product.images.main" v-bind:alt="product.name" class="img-fluid">
                        </div>
                        <div class="right-panel">

                            <h2 class="product-name">{{product.name}}</h2>
                            <p>{{product.description}}</p>
                            <b>Enter Measurements to get a price:</b>


                            <form action="" class="measurements">
                                <div class="input-wrapper">
                                    <input type="number" placeholder="Width (cm)" v-model="width.value" @input="validateWidth">
                                    <span class="error">{{errors.widthError}}</span>
                                </div>
                                <div class="input-wrapper">
                                    <input type="number" placeholder="Drop (cm)" v-model="drop.value" @input="validateDrop">
                                    <span class="error">{{errors.dropError}}</span>
                                </div>
                            </form>


                        </div>
                    </div>


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
            modalNumber: null,
            width: {
                value: '',
                validated: false
            },
            drop: {
                value: '',
                validated: false
            },
            errors: {
                widthError: '',
                dropError: ''
            }
        }
    },
    methods: {
        showModal() {
            this.$refs['modal-' + this.product.id].show()
        },
        hideModal() {
            this.$refs['modal-' + this.product.id].hide()
        },
        validateWidth() {
            if(this.width.value < this.product.limits.width.min) {
                this.errors.widthError = 'The min width is: ' + this.product.limits.width.min + 'cm'
            } else if(this.width.value > this.product.limits.width.max) {
                this.errors.widthError = 'The max width is: ' + this.product.limits.width.max + 'cm'
            } else {
                this.errors.widthError = ''

            }
        },
        validateDrop() {

        },
        displayPrice() {

        }
    }
}

</script>