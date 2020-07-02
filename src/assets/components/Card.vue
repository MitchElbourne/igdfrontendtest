<template>
    <div class="card">
        <img v-bind:src="product.images.thumb" v-bind:alt="product.name" class="card-img-top">
        <div class="card-body">

            <h2 class="card-title h5">{{product.name}}</h2>
            <p class="from-price">{{product.fromPrice}}</p>

           <div>
                <b-button id="show-btn" @click="showModal" class="btn-gold">Get Price</b-button>

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
                                    <input :style="{'border-color': width.borderColor}" type="number" placeholder="Width (cm)" v-model="width.value" @input="validateWidth">
                                    <p class="error">{{errors.widthError}}</p>
                                </div>
                                <div class="input-wrapper">
                                    <input :style="{'border-color': drop.borderColor}" type="number" placeholder="Drop (cm)" v-model="drop.value" @input="validateDrop">
                                    <p class="error">{{errors.dropError}}</p>
                                </div>
                            </form>

                            <div class="price" v-if="showPrice">
                                <p class="h1">{{calculatedPrice}}</p>
                                <button class="w-100 btn-gold">Add to basket</button>
                            </div>



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
            showPrice: false,
            calculatedPrice: '',
            width: {
                value: '',
                borderColor: 'transparent',
                validated: false
            },
            drop: {
                value: '',
                borderColor: 'transparent',
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
            var width = this.width.value
            var min = this.product.limits.width.min
            var max = this.product.limits.width.max

            if(width == '') {
                // If the width input field contains nothing
                this.width.validated = false
                this.showPrice = false
                this.width.borderColor = 'transparent'
                this.errors.widthError = ''
            } else if(width < min) {
                // If the width input is smaller than the min limit
                this.width.validated = false
                this.showPrice = false
                this.errors.widthError = 'The min width is: ' + min + 'cm'
                this.width.borderColor = 'red'
            } else if(width > max) {
                // If the width value is greater than the max limit
                this.width.validated = false
                this.showPrice = false
                this.errors.widthError = 'The max width is: ' + max + 'cm'
                this.width.borderColor = 'red'
            } else {
                // If the width value is between the max and min limits
                this.width.borderColor = '#93FF96'
                this.errors.widthError = ''
                this.width.validated = true

                this.displayPrice()
            }
        },
        validateDrop() {
            var drop = this.drop.value
            var min = this.product.limits.drop.min
            var max = this.product.limits.drop.max

            if(drop == '') {
                // If the drop input field contains nothing
                this.drop.validated = false
                this.showPrice = false
                this.drop.borderColor = 'transparent'
                this.errors.dropError = ''
            } else if(drop < min) {
                // If the drop input is smaller than the min limit
                this.drop.validated = false
                this.showPrice = false
                this.errors.dropError = 'The min drop is: ' + min + 'cm'
                this.drop.borderColor = 'red'
            } else if(drop > max) {
                // If the drop value is greater than the max limit
                this.drop.validated = false
                this.showPrice = false
                this.errors.dropError = 'The max drop is: ' + max + 'cm'
                this.drop.borderColor = 'red'
            } else {
                // If the drop value is between the max and min limits
                this.drop.borderColor = '#93FF96'
                this.errors.dropError = ''
                this.drop.validated = true
                
                this.displayPrice()
            }
        },
        displayPrice() {
            if(this.width.validated == true && this.drop.validated == true) {
                
                var widthMetres = this.width.value / 100
                var dropMetres = this.drop.value / 100

                var areaMetresSquared = (widthMetres * dropMetres)

                this.calculatedPrice = '£' + (areaMetresSquared * this.product.price_per_metre_squared).toFixed(2)

                this.showPrice = true
            }
        }
    }
}

</script>