<template>

  <div>
    <div class="logo container">
      <img src="./assets/logo.svg" />
      <p class="font-italic">{{description}}</p>
    </div> 
    
    <section class="container cards-container">
      <CardsContainer v-bind:products="products"/>  
    </section>
  </div>

</template>



<script>

import CardsContainer from './assets/components/CardsContainer.vue'
const axios = require('axios').default;

export default {
  name: 'App',
  components: {
    CardsContainer: CardsContainer
  },
  data() {
    return {
      products: null,
      description: null   
    }
  },
  created() {
    axios('https://www.interiorgoodsdirect.com/interview/api/products?key=6HJx2R8st$%25Q')
      .then(response => {
        let productList = response.data.data.products
        for (let i = 0; i < productList.length; i++) {
          var product = productList[i]
          product.id = i;

          var widthMetres = product.limits.width.min / 100
          var dropMetres = product.limits.drop.min / 100

          var areaMetresSquared = widthMetres * dropMetres

          productList[i].fromPrice = 'From: £' + (areaMetresSquared * product.price_per_metre_squared).toFixed(2)

        }
        this.products = productList
        this.description = response.data.data.description
      })

  }
}

</script>